// GENERATED CODE -- DO NOT EDIT!

// package: payed_grpc.account_profiles
// file: api/grpc/account_profile.proto

import * as api_grpc_account_profile_pb from "../../api/grpc/account_profile_pb";
import * as grpc from "@grpc/grpc-js";

interface IAccountProfileService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  profileToProfileTransfer: grpc.MethodDefinition<api_grpc_account_profile_pb.DebitAccountProfileRequest, api_grpc_account_profile_pb.DebitAccountProfileResponse>;
  fetchProfileToProfileTransferByReference: grpc.MethodDefinition<api_grpc_account_profile_pb.FetchTransferByReferenceRequest, api_grpc_account_profile_pb.DebitAccountProfileResponse>;
}

export const AccountProfileService: IAccountProfileService;

export interface IAccountProfileServer extends grpc.UntypedServiceImplementation {
  profileToProfileTransfer: grpc.handleUnaryCall<api_grpc_account_profile_pb.DebitAccountProfileRequest, api_grpc_account_profile_pb.DebitAccountProfileResponse>;
  fetchProfileToProfileTransferByReference: grpc.handleUnaryCall<api_grpc_account_profile_pb.FetchTransferByReferenceRequest, api_grpc_account_profile_pb.DebitAccountProfileResponse>;
}

export class AccountProfileClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  profileToProfileTransfer(argument: api_grpc_account_profile_pb.DebitAccountProfileRequest, callback: grpc.requestCallback<api_grpc_account_profile_pb.DebitAccountProfileResponse>): grpc.ClientUnaryCall;
  profileToProfileTransfer(argument: api_grpc_account_profile_pb.DebitAccountProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<api_grpc_account_profile_pb.DebitAccountProfileResponse>): grpc.ClientUnaryCall;
  profileToProfileTransfer(argument: api_grpc_account_profile_pb.DebitAccountProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<api_grpc_account_profile_pb.DebitAccountProfileResponse>): grpc.ClientUnaryCall;
  fetchProfileToProfileTransferByReference(argument: api_grpc_account_profile_pb.FetchTransferByReferenceRequest, callback: grpc.requestCallback<api_grpc_account_profile_pb.DebitAccountProfileResponse>): grpc.ClientUnaryCall;
  fetchProfileToProfileTransferByReference(argument: api_grpc_account_profile_pb.FetchTransferByReferenceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<api_grpc_account_profile_pb.DebitAccountProfileResponse>): grpc.ClientUnaryCall;
  fetchProfileToProfileTransferByReference(argument: api_grpc_account_profile_pb.FetchTransferByReferenceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<api_grpc_account_profile_pb.DebitAccountProfileResponse>): grpc.ClientUnaryCall;
}
