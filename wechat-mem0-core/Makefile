.PHONY: all proto build clean

# Go protobuf output directory
PB_GO_OUT = pb

# Node.js protobuf output directory  
PB_JS_OUT = client-node/src/pb

all: proto build

# Compile protobuf files (with gRPC)
proto:
	@echo "Compiling protobuf with gRPC..."
	@mkdir -p $(PB_GO_OUT)
	protoc --go_out=. --go_opt=paths=source_relative \
		--go-grpc_out=. --go-grpc_opt=paths=source_relative \
		--go_opt=Mproto/ipc.proto=wechat-mem0-core/pb \
		--go-grpc_opt=Mproto/ipc.proto=wechat-mem0-core/pb \
		proto/ipc.proto
	@mv proto/ipc.pb.go $(PB_GO_OUT)/ 2>/dev/null || true
	@mv proto/ipc_grpc.pb.go $(PB_GO_OUT)/ 2>/dev/null || true
	@echo "Protobuf compilation complete."

# Generate JavaScript/TypeScript protobuf (for Node.js client)
proto-js:
	@echo "Compiling protobuf for JavaScript..."
	@mkdir -p $(PB_JS_OUT)
	npx grpc_tools_node_protoc \
		--js_out=import_style=commonjs,binary:$(PB_JS_OUT) \
		--grpc_out=grpc_js:$(PB_JS_OUT) \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		proto/ipc.proto
	@echo "JavaScript protobuf compilation complete."

# Build Go binary
build:
	@echo "Building wechat-mem0-core..."
	go build -o bin/wechat-mem0-core ./cmd/
	@echo "Build complete."

# Run the service (for testing)
run:
	go run ./cmd/

# Clean build artifacts
clean:
	rm -rf bin/
	rm -rf $(PB_GO_OUT)/*.pb.go

# Install protobuf tools
install-tools:
	go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
	go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
	cd client-node && npm install

# Tidy go modules
tidy:
	go mod tidy
