package dbm

import (
	"strings"
	"time"
)

const (
	sqliteRetryMaxAttempts = 5
	sqliteRetryBaseDelay   = 100 * time.Millisecond
)

// RetryTransientSQLite retries operation on transient SQLite errors
// that are common during database file replacement windows.
func RetryTransientSQLite(fn func() error) error {
	var err error
	for i := 0; i < sqliteRetryMaxAttempts; i++ {
		err = fn()
		if err == nil {
			return nil
		}
		if !isTransientSQLiteError(err.Error()) {
			return err
		}
		time.Sleep(sqliteRetryBaseDelay * time.Duration(1<<i))
	}
	return err
}

func isTransientSQLiteError(msg string) bool {
	s := strings.ToLower(msg)
	return strings.Contains(s, "database disk image is malformed") ||
		strings.Contains(s, "sql: database is closed") ||
		strings.Contains(s, "database is locked") ||
		strings.Contains(s, "database is busy")
}
