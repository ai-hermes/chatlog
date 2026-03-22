BINARY_NAME := chatlog
GO := go
ARM64_CC ?= aarch64-linux-gnu-gcc
ARM64_CXX ?= aarch64-linux-gnu-g++
ARM64_PKG_CONFIG_PATH ?= /usr/lib/aarch64-linux-gnu/pkgconfig
ARM64_PKG_CONFIG_LIBDIR ?= /usr/lib/aarch64-linux-gnu/pkgconfig:/usr/share/pkgconfig
ifeq ($(VERSION),)
	VERSION := $(shell git describe --tags --always --dirty="-dev")
endif
LDFLAGS := -ldflags '-X "github.com/sjzar/chatlog/pkg/version.Version=$(VERSION)" -w -s'

PLATFORMS := \
	darwin/amd64 \
	darwin/arm64 \
	linux/amd64 \
	linux/arm64 \
	windows/amd64 \
	windows/arm64

UPX_PLATFORMS := \
	darwin/amd64 \
	linux/amd64 \
	linux/arm64 \
	windows/amd64

.PHONY: all clean lint tidy test build crossbuild build-wechat-mem0-core crossbuild-wechat-mem0-core upx tag tag-push tag-and-push tag-push-all tag-delete tag-auto tag-auto-push proto proto-js

all: clean lint tidy test build

clean:
	@echo "🧹 Cleaning..."
	@rm -rf bin/

lint:
	@echo "🕵️‍♂️ Running linters..."
	golangci-lint run ./...

tidy:
	@echo "🧼 Tidying up dependencies..."
	$(GO) mod tidy

test:
	@echo "🧪 Running tests..."
	$(GO) test ./... -cover

build:
	@echo "🔨 Building for current platform..."
	CGO_ENABLED=1 $(GO) build -trimpath $(LDFLAGS) -o bin/$(BINARY_NAME) main.go

crossbuild: clean
	@echo "🌍 Building for multiple platforms..."
	@mkdir -p bin
	@set -e; \
	for platform in $(PLATFORMS); do \
		os=$$(echo $$platform | cut -d/ -f1); \
		arch=$$(echo $$platform | cut -d/ -f2); \
		float=$$(echo $$platform | cut -d/ -f3); \
		output_name=bin/chatlog_$${os}_$${arch}; \
		[ "$$os" = "windows" ] && output_name=$${output_name}.exe; \
		[ "$$float" != "" ] && output_name=$$output_name_$$float; \
		echo "🔨 Building for $$os/$$arch..."; \
		echo "🔨 Building for $$output_name..."; \
		cc_env=""; cxx_env=""; pkg_path_env=""; pkg_libdir_env=""; \
		if [ "$$os/$$arch" = "linux/arm64" ]; then \
			cc_env="$(ARM64_CC)"; \
			cxx_env="$(ARM64_CXX)"; \
			pkg_path_env="$${PKG_CONFIG_PATH:-$(ARM64_PKG_CONFIG_PATH)}"; \
			pkg_libdir_env="$${PKG_CONFIG_LIBDIR:-$(ARM64_PKG_CONFIG_LIBDIR)}"; \
			command -v "$$cc_env" >/dev/null 2>&1 || { echo "missing cross-compiler: $$cc_env (required for CGO linux/arm64)"; exit 1; }; \
			command -v "$$cxx_env" >/dev/null 2>&1 || { echo "missing cross-compiler: $$cxx_env (required for CGO linux/arm64)"; exit 1; }; \
			echo "⚙️ Using CC=$$cc_env CXX=$$cxx_env"; \
		fi; \
		GOOS=$$os GOARCH=$$arch CGO_ENABLED=1 GOARM=$$float CC=$$cc_env CXX=$$cxx_env PKG_CONFIG_PATH=$$pkg_path_env PKG_CONFIG_LIBDIR=$$pkg_libdir_env $(GO) build -trimpath $(LDFLAGS) -o $$output_name main.go; \
		if [ "$(ENABLE_UPX)" = "1" ] && echo "$(UPX_PLATFORMS)" | grep -q "$$os/$$arch"; then \
			echo "⚙️ Compressing binary $$output_name..." && upx --best $$output_name; \
		fi; \
	done

build-wechat-mem0-core:
	@echo "🔨 Building wechat-mem0-core for current platform..."
	CGO_ENABLED=1 $(GO) build -trimpath $(LDFLAGS) -o bin/wechat-mem0-core cmd/wechat-mem0-core/*.go

crossbuild-wechat-mem0-core:
	@echo "🌍 Building wechat-mem0-core for multiple platforms..."
	@mkdir -p bin
	@set -e; \
	for platform in $(PLATFORMS); do \
		os=$$(echo $$platform | cut -d/ -f1); \
		arch=$$(echo $$platform | cut -d/ -f2); \
		output_name=bin/wechat-mem0-core_$${os}_$${arch}; \
		if [ "$$os" = "windows" ]; then \
			output_name=$${output_name}.exe; \
		fi; \
		echo "🔨 Building wechat-mem0-core for $$os/$$arch..."; \
		cc_env=""; cxx_env=""; pkg_path_env=""; pkg_libdir_env=""; \
		if [ "$$os/$$arch" = "linux/arm64" ]; then \
			cc_env="$(ARM64_CC)"; \
			cxx_env="$(ARM64_CXX)"; \
			pkg_path_env="$${PKG_CONFIG_PATH:-$(ARM64_PKG_CONFIG_PATH)}"; \
			pkg_libdir_env="$${PKG_CONFIG_LIBDIR:-$(ARM64_PKG_CONFIG_LIBDIR)}"; \
			command -v "$$cc_env" >/dev/null 2>&1 || { echo "missing cross-compiler: $$cc_env (required for CGO linux/arm64)"; exit 1; }; \
			command -v "$$cxx_env" >/dev/null 2>&1 || { echo "missing cross-compiler: $$cxx_env (required for CGO linux/arm64)"; exit 1; }; \
			echo "⚙️ Using CC=$$cc_env CXX=$$cxx_env"; \
		fi; \
		GOOS=$$os GOARCH=$$arch CGO_ENABLED=1 CC=$$cc_env CXX=$$cxx_env PKG_CONFIG_PATH=$$pkg_path_env PKG_CONFIG_LIBDIR=$$pkg_libdir_env $(GO) build -trimpath $(LDFLAGS) -o $$output_name cmd/wechat-mem0-core/main.go; \
	done


REMOTE ?= origin
TAG_PREFIX ?= v
TAG_LEVEL ?= patch

tag:
	@[ -n "$(TAG)" ] || (echo "TAG is required: make tag TAG=v1.0.0 [MSG=...]" >&2; exit 1)
	@branch=$$(git rev-parse --abbrev-ref HEAD); \
	[ "$$branch" = "main" ] || (echo "tag can only be created on main (current: $$branch)" >&2; exit 1)
	@echo "🏷️ Creating annotated tag $(TAG)..."
	git tag -a "$(TAG)" -m "$(if $(MSG),$(MSG),release $(TAG))"

tag-push:
	@[ -n "$(TAG)" ] || (echo "TAG is required: make tag-push TAG=v1.0.0" >&2; exit 1)
	@echo "🚀 Pushing tag $(TAG) to $(REMOTE)..."
	git push "$(REMOTE)" "$(TAG)"

tag-and-push: tag tag-push

tag-push-all:
	@echo "🚀 Pushing all tags to $(REMOTE)..."
	git push "$(REMOTE)" --tags

tag-delete:
	@[ -n "$(TAG)" ] || (echo "TAG is required: make tag-delete TAG=v1.0.0" >&2; exit 1)
	@echo "🗑️ Deleting tag $(TAG) locally and on $(REMOTE)..."
	git tag -d "$(TAG)"
	git push "$(REMOTE)" ":refs/tags/$(TAG)"

tag-auto:
	@branch=$$(git rev-parse --abbrev-ref HEAD); \
	[ "$$branch" = "main" ] || (echo "tag can only be created on main (current: $$branch)" >&2; exit 1); \
	latest=$$(git tag --list '$(TAG_PREFIX)[0-9]*.[0-9]*.[0-9]*' --sort=-v:refname | head -n 1); \
	[ -n "$$latest" ] || latest='$(TAG_PREFIX)0.0.0'; \
	ver=$${latest#'$(TAG_PREFIX)'}; \
	set -- $$(echo "$$ver" | tr '.' ' '); \
	major=$$1; minor=$$2; patch=$$3; \
	case "$(TAG_LEVEL)" in \
		major) major=$$((major+1)); minor=0; patch=0 ;; \
		minor) minor=$$((minor+1)); patch=0 ;; \
		patch|'') patch=$$((patch+1)) ;; \
		*) echo "TAG_LEVEL must be major|minor|patch (got $(TAG_LEVEL))" >&2; exit 1 ;; \
	esac; \
	new='$(TAG_PREFIX)'"$$major.$$minor.$$patch"; \
	echo "🏷️ Creating annotated tag $$new (from $$latest, level=$(TAG_LEVEL))..."; \
	git tag -a "$$new" -m "$(if $(MSG),$(MSG),release $$new)"; \
	echo "TAG=$$new"

tag-auto-push:
	@tag_line=$$(make --no-print-directory tag-auto TAG_LEVEL='$(TAG_LEVEL)' TAG_PREFIX='$(TAG_PREFIX)' MSG='$(MSG)' | tail -n 1); \
	new=$${tag_line#TAG=}; \
	[ -n "$$new" ] || (echo "failed to detect TAG from tag-auto output" >&2; exit 1); \
	echo "🚀 Pushing tag $$new to $(REMOTE)..."; \
	git push "$(REMOTE)" "$$new"


# Go protobuf output directory
PB_GO_OUT = pkg/pb
# Node.js protobuf output directory
PB_JS_OUT = examples/client-node/src/pb

# Compile protobuf files (with gRPC)
proto:
	@echo "Compiling protobuf with gRPC..."
	@mkdir -p $(PB_GO_OUT)
	protoc --go_out=. --go_opt=paths=source_relative \
		--go-grpc_out=. --go-grpc_opt=paths=source_relative \
		--go_opt=Mproto/chatlog.proto=pkg/pb \
		--go-grpc_opt=Mproto/chatlog.proto=pkg/pb \
		proto/chatlog.proto
	@mv proto/chatlog.pb.go $(PB_GO_OUT)/ 2>/dev/null || true
	@mv proto/chatlog_grpc.pb.go $(PB_GO_OUT)/ 2>/dev/null || true
	@echo "Protobuf compilation complete."


# Generate JavaScript/TypeScript protobuf (for Node.js client)
proto-js:
	@echo "Compiling protobuf for JavaScript..."
	@mkdir -p $(PB_JS_OUT)
	./examples/client-node/node_modules/.bin/grpc_tools_node_protoc \
		--js_out=import_style=commonjs,binary:$(PB_JS_OUT) \
		--grpc_out=grpc_js:$(PB_JS_OUT) \
		--plugin=protoc-gen-grpc=./examples/client-node/node_modules/.bin/grpc_tools_node_protoc_plugin \
		proto/chatlog.proto
	@echo "JavaScript protobuf compilation complete."
