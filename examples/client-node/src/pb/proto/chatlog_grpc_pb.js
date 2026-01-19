// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_chatlog_pb = require('../proto/chatlog_pb.js');

function serialize_ipc_CommandDecryptRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.CommandDecryptRequest)) {
    throw new Error('Expected argument of type ipc.CommandDecryptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_CommandDecryptRequest(buffer_arg) {
  return proto_chatlog_pb.CommandDecryptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_CommandDecryptResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.CommandDecryptResponse)) {
    throw new Error('Expected argument of type ipc.CommandDecryptResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_CommandDecryptResponse(buffer_arg) {
  return proto_chatlog_pb.CommandDecryptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_CommandHTTPServerRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.CommandHTTPServerRequest)) {
    throw new Error('Expected argument of type ipc.CommandHTTPServerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_CommandHTTPServerRequest(buffer_arg) {
  return proto_chatlog_pb.CommandHTTPServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_CommandHTTPServerResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.CommandHTTPServerResponse)) {
    throw new Error('Expected argument of type ipc.CommandHTTPServerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_CommandHTTPServerResponse(buffer_arg) {
  return proto_chatlog_pb.CommandHTTPServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_CommandKeyRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.CommandKeyRequest)) {
    throw new Error('Expected argument of type ipc.CommandKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_CommandKeyRequest(buffer_arg) {
  return proto_chatlog_pb.CommandKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_CommandKeyResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.CommandKeyResponse)) {
    throw new Error('Expected argument of type ipc.CommandKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_CommandKeyResponse(buffer_arg) {
  return proto_chatlog_pb.CommandKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_DecryptDBFilesRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.DecryptDBFilesRequest)) {
    throw new Error('Expected argument of type ipc.DecryptDBFilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_DecryptDBFilesRequest(buffer_arg) {
  return proto_chatlog_pb.DecryptDBFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_DecryptDBFilesResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.DecryptDBFilesResponse)) {
    throw new Error('Expected argument of type ipc.DecryptDBFilesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_DecryptDBFilesResponse(buffer_arg) {
  return proto_chatlog_pb.DecryptDBFilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_DecryptRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.DecryptRequest)) {
    throw new Error('Expected argument of type ipc.DecryptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_DecryptRequest(buffer_arg) {
  return proto_chatlog_pb.DecryptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_DecryptResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.DecryptResponse)) {
    throw new Error('Expected argument of type ipc.DecryptResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_DecryptResponse(buffer_arg) {
  return proto_chatlog_pb.DecryptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_GetDataKeyRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.GetDataKeyRequest)) {
    throw new Error('Expected argument of type ipc.GetDataKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_GetDataKeyRequest(buffer_arg) {
  return proto_chatlog_pb.GetDataKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_GetDataKeyResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.GetDataKeyResponse)) {
    throw new Error('Expected argument of type ipc.GetDataKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_GetDataKeyResponse(buffer_arg) {
  return proto_chatlog_pb.GetDataKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_GetKeyRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.GetKeyRequest)) {
    throw new Error('Expected argument of type ipc.GetKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_GetKeyRequest(buffer_arg) {
  return proto_chatlog_pb.GetKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_GetKeyResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.GetKeyResponse)) {
    throw new Error('Expected argument of type ipc.GetKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_GetKeyResponse(buffer_arg) {
  return proto_chatlog_pb.GetKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_GetWeChatInstancesRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.GetWeChatInstancesRequest)) {
    throw new Error('Expected argument of type ipc.GetWeChatInstancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_GetWeChatInstancesRequest(buffer_arg) {
  return proto_chatlog_pb.GetWeChatInstancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_GetWeChatInstancesResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.GetWeChatInstancesResponse)) {
    throw new Error('Expected argument of type ipc.GetWeChatInstancesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_GetWeChatInstancesResponse(buffer_arg) {
  return proto_chatlog_pb.GetWeChatInstancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_RefreshSessionRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.RefreshSessionRequest)) {
    throw new Error('Expected argument of type ipc.RefreshSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_RefreshSessionRequest(buffer_arg) {
  return proto_chatlog_pb.RefreshSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_RefreshSessionResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.RefreshSessionResponse)) {
    throw new Error('Expected argument of type ipc.RefreshSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_RefreshSessionResponse(buffer_arg) {
  return proto_chatlog_pb.RefreshSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_RunRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.RunRequest)) {
    throw new Error('Expected argument of type ipc.RunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_RunRequest(buffer_arg) {
  return proto_chatlog_pb.RunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_RunResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.RunResponse)) {
    throw new Error('Expected argument of type ipc.RunResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_RunResponse(buffer_arg) {
  return proto_chatlog_pb.RunResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_SetHTTPAddrRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.SetHTTPAddrRequest)) {
    throw new Error('Expected argument of type ipc.SetHTTPAddrRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_SetHTTPAddrRequest(buffer_arg) {
  return proto_chatlog_pb.SetHTTPAddrRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_SetHTTPAddrResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.SetHTTPAddrResponse)) {
    throw new Error('Expected argument of type ipc.SetHTTPAddrResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_SetHTTPAddrResponse(buffer_arg) {
  return proto_chatlog_pb.SetHTTPAddrResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_SetLogLevelRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.SetLogLevelRequest)) {
    throw new Error('Expected argument of type ipc.SetLogLevelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_SetLogLevelRequest(buffer_arg) {
  return proto_chatlog_pb.SetLogLevelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_SetLogLevelResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.SetLogLevelResponse)) {
    throw new Error('Expected argument of type ipc.SetLogLevelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_SetLogLevelResponse(buffer_arg) {
  return proto_chatlog_pb.SetLogLevelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_StartAutoDecryptRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.StartAutoDecryptRequest)) {
    throw new Error('Expected argument of type ipc.StartAutoDecryptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_StartAutoDecryptRequest(buffer_arg) {
  return proto_chatlog_pb.StartAutoDecryptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_StartAutoDecryptResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.StartAutoDecryptResponse)) {
    throw new Error('Expected argument of type ipc.StartAutoDecryptResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_StartAutoDecryptResponse(buffer_arg) {
  return proto_chatlog_pb.StartAutoDecryptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_StartServiceRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.StartServiceRequest)) {
    throw new Error('Expected argument of type ipc.StartServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_StartServiceRequest(buffer_arg) {
  return proto_chatlog_pb.StartServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_StartServiceResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.StartServiceResponse)) {
    throw new Error('Expected argument of type ipc.StartServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_StartServiceResponse(buffer_arg) {
  return proto_chatlog_pb.StartServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_StopAutoDecryptRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.StopAutoDecryptRequest)) {
    throw new Error('Expected argument of type ipc.StopAutoDecryptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_StopAutoDecryptRequest(buffer_arg) {
  return proto_chatlog_pb.StopAutoDecryptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_StopAutoDecryptResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.StopAutoDecryptResponse)) {
    throw new Error('Expected argument of type ipc.StopAutoDecryptResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_StopAutoDecryptResponse(buffer_arg) {
  return proto_chatlog_pb.StopAutoDecryptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_StopServiceRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.StopServiceRequest)) {
    throw new Error('Expected argument of type ipc.StopServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_StopServiceRequest(buffer_arg) {
  return proto_chatlog_pb.StopServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_StopServiceResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.StopServiceResponse)) {
    throw new Error('Expected argument of type ipc.StopServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_StopServiceResponse(buffer_arg) {
  return proto_chatlog_pb.StopServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_SwitchRequest(arg) {
  if (!(arg instanceof proto_chatlog_pb.SwitchRequest)) {
    throw new Error('Expected argument of type ipc.SwitchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_SwitchRequest(buffer_arg) {
  return proto_chatlog_pb.SwitchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ipc_SwitchResponse(arg) {
  if (!(arg instanceof proto_chatlog_pb.SwitchResponse)) {
    throw new Error('Expected argument of type ipc.SwitchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ipc_SwitchResponse(buffer_arg) {
  return proto_chatlog_pb.SwitchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ManagerService provides gRPC interface for WeChat operations
var ManagerServiceService = exports.ManagerServiceService = {
  setLogLevel: {
    path: '/ipc.ManagerService/SetLogLevel',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.SetLogLevelRequest,
    responseType: proto_chatlog_pb.SetLogLevelResponse,
    requestSerialize: serialize_ipc_SetLogLevelRequest,
    requestDeserialize: deserialize_ipc_SetLogLevelRequest,
    responseSerialize: serialize_ipc_SetLogLevelResponse,
    responseDeserialize: deserialize_ipc_SetLogLevelResponse,
  },
  run: {
    path: '/ipc.ManagerService/Run',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.RunRequest,
    responseType: proto_chatlog_pb.RunResponse,
    requestSerialize: serialize_ipc_RunRequest,
    requestDeserialize: deserialize_ipc_RunRequest,
    responseSerialize: serialize_ipc_RunResponse,
    responseDeserialize: deserialize_ipc_RunResponse,
  },
  switch: {
    path: '/ipc.ManagerService/Switch',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.SwitchRequest,
    responseType: proto_chatlog_pb.SwitchResponse,
    requestSerialize: serialize_ipc_SwitchRequest,
    requestDeserialize: deserialize_ipc_SwitchRequest,
    responseSerialize: serialize_ipc_SwitchResponse,
    responseDeserialize: deserialize_ipc_SwitchResponse,
  },
  startService: {
    path: '/ipc.ManagerService/StartService',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.StartServiceRequest,
    responseType: proto_chatlog_pb.StartServiceResponse,
    requestSerialize: serialize_ipc_StartServiceRequest,
    requestDeserialize: deserialize_ipc_StartServiceRequest,
    responseSerialize: serialize_ipc_StartServiceResponse,
    responseDeserialize: deserialize_ipc_StartServiceResponse,
  },
  stopService: {
    path: '/ipc.ManagerService/StopService',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.StopServiceRequest,
    responseType: proto_chatlog_pb.StopServiceResponse,
    requestSerialize: serialize_ipc_StopServiceRequest,
    requestDeserialize: deserialize_ipc_StopServiceRequest,
    responseSerialize: serialize_ipc_StopServiceResponse,
    responseDeserialize: deserialize_ipc_StopServiceResponse,
  },
  setHTTPAddr: {
    path: '/ipc.ManagerService/SetHTTPAddr',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.SetHTTPAddrRequest,
    responseType: proto_chatlog_pb.SetHTTPAddrResponse,
    requestSerialize: serialize_ipc_SetHTTPAddrRequest,
    requestDeserialize: deserialize_ipc_SetHTTPAddrRequest,
    responseSerialize: serialize_ipc_SetHTTPAddrResponse,
    responseDeserialize: deserialize_ipc_SetHTTPAddrResponse,
  },
  getDataKey: {
    path: '/ipc.ManagerService/GetDataKey',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.GetDataKeyRequest,
    responseType: proto_chatlog_pb.GetDataKeyResponse,
    requestSerialize: serialize_ipc_GetDataKeyRequest,
    requestDeserialize: deserialize_ipc_GetDataKeyRequest,
    responseSerialize: serialize_ipc_GetDataKeyResponse,
    responseDeserialize: deserialize_ipc_GetDataKeyResponse,
  },
  decryptDBFiles: {
    path: '/ipc.ManagerService/DecryptDBFiles',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.DecryptDBFilesRequest,
    responseType: proto_chatlog_pb.DecryptDBFilesResponse,
    requestSerialize: serialize_ipc_DecryptDBFilesRequest,
    requestDeserialize: deserialize_ipc_DecryptDBFilesRequest,
    responseSerialize: serialize_ipc_DecryptDBFilesResponse,
    responseDeserialize: deserialize_ipc_DecryptDBFilesResponse,
  },
  startAutoDecrypt: {
    path: '/ipc.ManagerService/StartAutoDecrypt',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.StartAutoDecryptRequest,
    responseType: proto_chatlog_pb.StartAutoDecryptResponse,
    requestSerialize: serialize_ipc_StartAutoDecryptRequest,
    requestDeserialize: deserialize_ipc_StartAutoDecryptRequest,
    responseSerialize: serialize_ipc_StartAutoDecryptResponse,
    responseDeserialize: deserialize_ipc_StartAutoDecryptResponse,
  },
  stopAutoDecrypt: {
    path: '/ipc.ManagerService/StopAutoDecrypt',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.StopAutoDecryptRequest,
    responseType: proto_chatlog_pb.StopAutoDecryptResponse,
    requestSerialize: serialize_ipc_StopAutoDecryptRequest,
    requestDeserialize: deserialize_ipc_StopAutoDecryptRequest,
    responseSerialize: serialize_ipc_StopAutoDecryptResponse,
    responseDeserialize: deserialize_ipc_StopAutoDecryptResponse,
  },
  refreshSession: {
    path: '/ipc.ManagerService/RefreshSession',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.RefreshSessionRequest,
    responseType: proto_chatlog_pb.RefreshSessionResponse,
    requestSerialize: serialize_ipc_RefreshSessionRequest,
    requestDeserialize: deserialize_ipc_RefreshSessionRequest,
    responseSerialize: serialize_ipc_RefreshSessionResponse,
    responseDeserialize: deserialize_ipc_RefreshSessionResponse,
  },
  commandKey: {
    path: '/ipc.ManagerService/CommandKey',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.CommandKeyRequest,
    responseType: proto_chatlog_pb.CommandKeyResponse,
    requestSerialize: serialize_ipc_CommandKeyRequest,
    requestDeserialize: deserialize_ipc_CommandKeyRequest,
    responseSerialize: serialize_ipc_CommandKeyResponse,
    responseDeserialize: deserialize_ipc_CommandKeyResponse,
  },
  commandDecrypt: {
    path: '/ipc.ManagerService/CommandDecrypt',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.CommandDecryptRequest,
    responseType: proto_chatlog_pb.CommandDecryptResponse,
    requestSerialize: serialize_ipc_CommandDecryptRequest,
    requestDeserialize: deserialize_ipc_CommandDecryptRequest,
    responseSerialize: serialize_ipc_CommandDecryptResponse,
    responseDeserialize: deserialize_ipc_CommandDecryptResponse,
  },
  commandHTTPServer: {
    path: '/ipc.ManagerService/CommandHTTPServer',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.CommandHTTPServerRequest,
    responseType: proto_chatlog_pb.CommandHTTPServerResponse,
    requestSerialize: serialize_ipc_CommandHTTPServerRequest,
    requestDeserialize: deserialize_ipc_CommandHTTPServerRequest,
    responseSerialize: serialize_ipc_CommandHTTPServerResponse,
    responseDeserialize: deserialize_ipc_CommandHTTPServerResponse,
  },
  getWeChatInstances: {
    path: '/ipc.ManagerService/GetWeChatInstances',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.GetWeChatInstancesRequest,
    responseType: proto_chatlog_pb.GetWeChatInstancesResponse,
    requestSerialize: serialize_ipc_GetWeChatInstancesRequest,
    requestDeserialize: deserialize_ipc_GetWeChatInstancesRequest,
    responseSerialize: serialize_ipc_GetWeChatInstancesResponse,
    responseDeserialize: deserialize_ipc_GetWeChatInstancesResponse,
  },
  getKey: {
    path: '/ipc.ManagerService/GetKey',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.GetKeyRequest,
    responseType: proto_chatlog_pb.GetKeyResponse,
    requestSerialize: serialize_ipc_GetKeyRequest,
    requestDeserialize: deserialize_ipc_GetKeyRequest,
    responseSerialize: serialize_ipc_GetKeyResponse,
    responseDeserialize: deserialize_ipc_GetKeyResponse,
  },
  decrypt: {
    path: '/ipc.ManagerService/Decrypt',
    requestStream: false,
    responseStream: false,
    requestType: proto_chatlog_pb.DecryptRequest,
    responseType: proto_chatlog_pb.DecryptResponse,
    requestSerialize: serialize_ipc_DecryptRequest,
    requestDeserialize: deserialize_ipc_DecryptRequest,
    responseSerialize: serialize_ipc_DecryptResponse,
    responseDeserialize: deserialize_ipc_DecryptResponse,
  },
};

exports.ManagerServiceClient = grpc.makeGenericClientConstructor(ManagerServiceService, 'ManagerService');
