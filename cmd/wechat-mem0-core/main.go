package main

import (
	_ "github.com/joho/godotenv/autoload"
	"github.com/rs/zerolog/log"
	"github.com/sjzar/chatlog/internal/chatlog"
	"os"
)

func main() {
	// debug 场景没法突破内存限制，用单独的命令行可以解析出来
	m := chatlog.New(chatlog.ManagerTypeGRPC)
	/*
		keyData, err := m.GetKey("", 0, false, false)
		if err != nil {
			if errors.Is(err, errors.ErrSIPEnabled) {
				log.Info().Msg("SIP is enabled")
				return
			}
			log.Err(err).Msgf("failed to get key")
			return
		}
		fmt.Println(keyData)
	*/
	/*
		instances := m.GetWeChatInstances()
		if len(instances) > 0 {
			instance := instances[0]
			err := instance.RefreshStatus()
			if err != nil {
				log.Err(err).Msgf("failed to refresh status")
				return
			}
			fmt.Println(instance)
		}
	*/
	cmdConf := make(map[string]any)
	cmdConf["platform"] = os.Getenv("PLATFORM")
	cmdConf["version"] = os.Getenv("VERSION")
	cmdConf["img_key"] = os.Getenv("IMG_KEY")
	cmdConf["data_key"] = os.Getenv("DATA_KEY")
	cmdConf["data_dir"] = os.Getenv("DATA_DIR")
	cmdConf["work_dir"] = os.Getenv("WORK_DIR")
	err := m.Decrypt("", cmdConf)
	if err != nil {
		log.Err(err).Msg("failed to decrypt")
		return
	}
	log.Info().Msg("decrypt success")

	//ret, err := m.CommandKeyForGRPC("", 0, false, false)
	//if err != nil {
	//	log.Err(err).Msg("failed to get key")
	//	return
	//}
	//fmt.Println(ret)
}
