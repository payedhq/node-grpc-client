// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var api_grpc_account_profile_pb = require('../../api/grpc/account_profile_pb.js');

function serialize_payed_grpc_account_profiles_DebitAccountProfileRequest(arg) {
  if (!(arg instanceof api_grpc_account_profile_pb.DebitAccountProfileRequest)) {
    throw new Error('Expected argument of type payed_grpc.account_profiles.DebitAccountProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payed_grpc_account_profiles_DebitAccountProfileRequest(buffer_arg) {
  return api_grpc_account_profile_pb.DebitAccountProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payed_grpc_account_profiles_DebitAccountProfileResponse(arg) {
  if (!(arg instanceof api_grpc_account_profile_pb.DebitAccountProfileResponse)) {
    throw new Error('Expected argument of type payed_grpc.account_profiles.DebitAccountProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payed_grpc_account_profiles_DebitAccountProfileResponse(buffer_arg) {
  return api_grpc_account_profile_pb.DebitAccountProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payed_grpc_account_profiles_FetchTransferByReferenceRequest(arg) {
  if (!(arg instanceof api_grpc_account_profile_pb.FetchTransferByReferenceRequest)) {
    throw new Error('Expected argument of type payed_grpc.account_profiles.FetchTransferByReferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payed_grpc_account_profiles_FetchTransferByReferenceRequest(buffer_arg) {
  return api_grpc_account_profile_pb.FetchTransferByReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountProfileService = exports.AccountProfileService = {
  profileToProfileTransfer: {
    path: '/payed_grpc.account_profiles.AccountProfile/ProfileToProfileTransfer',
    requestStream: false,
    responseStream: false,
    requestType: api_grpc_account_profile_pb.DebitAccountProfileRequest,
    responseType: api_grpc_account_profile_pb.DebitAccountProfileResponse,
    requestSerialize: serialize_payed_grpc_account_profiles_DebitAccountProfileRequest,
    requestDeserialize: deserialize_payed_grpc_account_profiles_DebitAccountProfileRequest,
    responseSerialize: serialize_payed_grpc_account_profiles_DebitAccountProfileResponse,
    responseDeserialize: deserialize_payed_grpc_account_profiles_DebitAccountProfileResponse,
  },
  fetchProfileToProfileTransferByReference: {
    path: '/payed_grpc.account_profiles.AccountProfile/FetchProfileToProfileTransferByReference',
    requestStream: false,
    responseStream: false,
    requestType: api_grpc_account_profile_pb.FetchTransferByReferenceRequest,
    responseType: api_grpc_account_profile_pb.DebitAccountProfileResponse,
    requestSerialize: serialize_payed_grpc_account_profiles_FetchTransferByReferenceRequest,
    requestDeserialize: deserialize_payed_grpc_account_profiles_FetchTransferByReferenceRequest,
    responseSerialize: serialize_payed_grpc_account_profiles_DebitAccountProfileResponse,
    responseDeserialize: deserialize_payed_grpc_account_profiles_DebitAccountProfileResponse,
  },
};

exports.AccountProfileClient = grpc.makeGenericClientConstructor(AccountProfileService);
