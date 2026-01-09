package main

import (
	"fmt"
	"github.com/rs/zerolog/log"
	"github.com/sjzar/chatlog/internal/errors"

	"github.com/sjzar/chatlog/internal/chatlog"
)

func main() {
	m := chatlog.New(chatlog.ManagerTypeGRPC)
	fmt.Println(m)
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
	//ret, err := m.CommandKeyForGRPC("", 0, false, false)
	//if err != nil {
	//	log.Err(err).Msg("failed to get key")
	//	return
	//}
	//fmt.Println(ret)
}
