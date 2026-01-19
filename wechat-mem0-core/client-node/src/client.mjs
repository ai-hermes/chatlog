/**
 * wechat-mem0-core gRPC Client
 * 
 * This client connects to the Go gRPC service.
 */

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load protobuf definition
const PROTO_PATH = path.join(__dirname, '..', '..', 'proto', 'ipc.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const ipc = protoDescriptor.ipc;

export class GRPCClient {
    constructor(address = 'localhost:50051') {
        this.address = address;
        this.client = null;
    }

    /**
     * Connect to the gRPC server.
     */
    connect() {
        this.client = new ipc.ManagerService(
            this.address,
            grpc.credentials.createInsecure()
        );
        return this;
    }

    /**
     * Close the connection.
     */
    close() {
        if (this.client) {
            grpc.closeClient(this.client);
            this.client = null;
        }
    }

    /**
     * Wrap a gRPC call in a Promise.
     */
    _promisify(method, request = {}) {
        return new Promise((resolve, reject) => {
            this.client[method](request, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response);
                }
            });
        });
    }

    // ==================== High-level API ====================

    async setLogLevel(level) {
        return this._promisify('SetLogLevel', { level });
    }

    async run(configPath) {
        return this._promisify('Run', { config_path: configPath });
    }

    async switch(info, history) {
        return this._promisify('Switch', { info, history });
    }

    async startService() {
        return this._promisify('StartService', {});
    }

    async stopService() {
        return this._promisify('StopService', {});
    }

    async setHTTPAddr(text) {
        return this._promisify('SetHTTPAddr', { text });
    }

    async getDataKey() {
        return this._promisify('GetDataKey', {});
    }

    async decryptDBFiles() {
        return this._promisify('DecryptDBFiles', {});
    }

    async startAutoDecrypt() {
        return this._promisify('StartAutoDecrypt', {});
    }

    async stopAutoDecrypt() {
        return this._promisify('StopAutoDecrypt', {});
    }

    async refreshSession() {
        return this._promisify('RefreshSession', {});
    }

    async commandKey(configPath, pid, force, showXorKey) {
        return this._promisify('CommandKey', {
            config_path: configPath,
            pid,
            force,
            show_xor_key: showXorKey,
        });
    }

    async commandDecrypt(configPath, cmdConf) {
        return this._promisify('CommandDecrypt', {
            config_path: configPath,
            cmd_conf: cmdConf,
        });
    }

    async commandHTTPServer(configPath, cmdConf) {
        return this._promisify('CommandHTTPServer', {
            config_path: configPath,
            cmd_conf: cmdConf,
        });
    }

    async getWeChatInstances() {
        return this._promisify('GetWeChatInstances', {});
    }

    async getKey(configPath, pid, force, showXorKey) {
        return this._promisify('GetKey', {
            config_path: configPath,
            pid,
            force,
            show_xor_key: showXorKey,
        });
    }

    async decrypt(configPath, cmdConf) {
        return this._promisify('Decrypt', {
            config_path: configPath,
            cmd_conf: cmdConf,
        });
    }
}

export default GRPCClient;
