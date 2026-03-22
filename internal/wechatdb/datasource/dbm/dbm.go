package dbm

import (
	"database/sql"
	"os"
	"path/filepath"
	"runtime"
	"sync"

	"github.com/fsnotify/fsnotify"
	_ "github.com/mattn/go-sqlite3"
	"github.com/rs/zerolog/log"

	"github.com/sjzar/chatlog/internal/errors"
	"github.com/sjzar/chatlog/pkg/filecopy"
	"github.com/sjzar/chatlog/pkg/filemonitor"
)

type DBManager struct {
	path    string
	id      string
	fm      *filemonitor.FileMonitor
	fgs     map[string]*filemonitor.FileGroup
	dbs     map[string]*dbCache
	dbPaths map[string][]string
	mutex   sync.RWMutex
}

type dbCache struct {
	db      *sql.DB
	size    int64
	modTime int64
}

func NewDBManager(path string) *DBManager {
	return &DBManager{
		path:    path,
		id:      filepath.Base(path),
		fm:      filemonitor.NewFileMonitor(),
		fgs:     make(map[string]*filemonitor.FileGroup),
		dbs:     make(map[string]*dbCache),
		dbPaths: make(map[string][]string),
	}
}

func (d *DBManager) AddGroup(g *Group) error {
	fg, err := filemonitor.NewFileGroup(g.Name, d.path, g.Pattern, g.BlackList)
	if err != nil {
		return err
	}
	fg.AddCallback(d.Callback)
	d.fm.AddGroup(fg)
	d.mutex.Lock()
	d.fgs[g.Name] = fg
	d.mutex.Unlock()
	return nil
}

func (d *DBManager) AddCallback(group string, callback func(event fsnotify.Event) error) error {
	d.mutex.RLock()
	fg, ok := d.fgs[group]
	d.mutex.RUnlock()
	if !ok {
		return errors.FileGroupNotFound(group)
	}
	fg.AddCallback(callback)
	return nil
}

func (d *DBManager) GetDB(name string) (*sql.DB, error) {
	dbPaths, err := d.GetDBPath(name)
	if err != nil {
		return nil, err
	}
	return d.OpenDB(dbPaths[0])
}

func (d *DBManager) GetDBs(name string) ([]*sql.DB, error) {
	dbPaths, err := d.GetDBPath(name)
	if err != nil {
		return nil, err
	}
	dbs := make([]*sql.DB, 0)
	for _, file := range dbPaths {
		db, err := d.OpenDB(file)
		if err != nil {
			return nil, err
		}
		dbs = append(dbs, db)
	}
	return dbs, nil
}

func (d *DBManager) GetDBPath(name string) ([]string, error) {
	d.mutex.RLock()
	fg, ok := d.fgs[name]
	d.mutex.RUnlock()
	if !ok {
		return nil, errors.FileGroupNotFound(name)
	}

	list, err := fg.List()
	if err != nil {
		return nil, errors.DBFileNotFound(d.path, fg.PatternStr, err)
	}
	if len(list) == 0 {
		return nil, errors.DBFileNotFound(d.path, fg.PatternStr, nil)
	}

	d.mutex.Lock()
	d.dbPaths[name] = list
	d.mutex.Unlock()
	return list, nil
}

func (d *DBManager) OpenDB(path string) (*sql.DB, error) {
	stat, err := os.Stat(path)
	if err != nil {
		return nil, err
	}
	size := stat.Size()
	modTime := stat.ModTime().UnixNano()

	var old *sql.DB
	d.mutex.RLock()
	cache, ok := d.dbs[path]
	d.mutex.RUnlock()
	if ok && cache.size == size && cache.modTime == modTime {
		return cache.db, nil
	}
	if ok {
		old = cache.db
		d.mutex.Lock()
		delete(d.dbs, path)
		d.mutex.Unlock()
	}

	tempPath := path
	if runtime.GOOS == "windows" {
		tempPath, err = filecopy.GetTempCopy(d.id, path)
		if err != nil {
			log.Err(err).Msgf("获取临时拷贝文件 %s 失败", path)
			return nil, err
		}
	}
	db, err := sql.Open("sqlite3", tempPath)
	if err != nil {
		log.Err(err).Msgf("连接数据库 %s 失败", path)
		return nil, err
	}

	if old != nil {
		_ = old.Close()
	}

	d.mutex.Lock()
	d.dbs[path] = &dbCache{
		db:      db,
		size:    size,
		modTime: modTime,
	}
	d.mutex.Unlock()
	return db, nil
}

func (d *DBManager) Callback(event fsnotify.Event) error {
	if event.Op&(fsnotify.Create|fsnotify.Write|fsnotify.Rename|fsnotify.Remove|fsnotify.Chmod) == 0 {
		return nil
	}

	d.mutex.RLock()
	matchedGroups := make([]string, 0)
	for name, fg := range d.fgs {
		if fg.Match(event.Name) {
			matchedGroups = append(matchedGroups, name)
		}
	}
	d.mutex.RUnlock()

	var old *sql.DB
	d.mutex.Lock()
	if cache, ok := d.dbs[event.Name]; ok {
		delete(d.dbs, event.Name)
		old = cache.db
	}
	for _, name := range matchedGroups {
		delete(d.dbPaths, name)
	}
	d.mutex.Unlock()

	if old != nil {
		_ = old.Close()
	}

	return nil
}

func (d *DBManager) Start() error {
	return d.fm.Start()
}

func (d *DBManager) Stop() error {
	return d.fm.Stop()
}

func (d *DBManager) Close() error {
	d.mutex.RLock()
	caches := make([]*dbCache, 0, len(d.dbs))
	for _, cache := range d.dbs {
		caches = append(caches, cache)
	}
	d.mutex.RUnlock()
	for _, cache := range caches {
		_ = cache.db.Close()
	}
	return d.fm.Stop()
}
