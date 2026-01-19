package main

import (
	"flag"
	"os"
	"os/signal"
	"syscall"

	"github.com/sjzar/chatlog/internal/chatlog"
	"github.com/sjzar/chatlog/pkg/grpcserver"
	"github.com/sjzar/chatlog/pkg/logger"
)

func main() {
	// Parse command line flags
	addr := flag.String("addr", ":50051", "gRPC server address")
	logLevel := flag.String("log-level", "info", "Log level (debug, info, warn, error)")
	flag.Parse()

	// Override with environment variable if set
	if envLevel := os.Getenv("LOG_LEVEL"); envLevel != "" {
		*logLevel = envLevel
	}

	// Initialize logger
	logger.Init(*logLevel)

	logger.Info().
		Str("addr", *addr).
		Str("log_level", *logLevel).
		Msg("wechat-mem0-core gRPC service starting...")

	// Create your Manager implementation here
	// TODO: Replace StubManager with your actual implementation
	// mgr := manager.NewStubManager()
	mgr := chatlog.New(chatlog.ManagerTypeGRPC)

	// Create and start gRPC server
	server := grpcserver.New(mgr)

	// Handle graceful shutdown
	go func() {
		sigChan := make(chan os.Signal, 1)
		signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)
		<-sigChan
		logger.Info().Msg("Shutting down gRPC server...")
		server.Stop()
	}()

	// Start the server (blocking)
	if err := server.Start(*addr); err != nil {
		logger.Error().Err(err).Msg("gRPC server error")
		os.Exit(1)
	}
}
