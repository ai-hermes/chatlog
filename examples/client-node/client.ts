/**
 * wechat-mem0-core gRPC Client
 * 
 * This client connects to the Go gRPC service.
 */

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(__filename);
console.log(__dirname);