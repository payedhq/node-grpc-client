// package: payed_grpc.account_profiles
// file: api/grpc/account_profile.proto

import * as jspb from "google-protobuf";

export class DebitAccountProfileRequest extends jspb.Message {
  getReference(): string;
  setReference(value: string): void;

  getOriginaccountprofileid(): number;
  setOriginaccountprofileid(value: number): void;

  getDestinationaccountprofileid(): number;
  setDestinationaccountprofileid(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getPurpose(): string;
  setPurpose(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DebitAccountProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DebitAccountProfileRequest): DebitAccountProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DebitAccountProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DebitAccountProfileRequest;
  static deserializeBinaryFromReader(message: DebitAccountProfileRequest, reader: jspb.BinaryReader): DebitAccountProfileRequest;
}

export namespace DebitAccountProfileRequest {
  export type AsObject = {
    reference: string,
    originaccountprofileid: number,
    destinationaccountprofileid: number,
    amount: number,
    purpose: string,
  }
}

export class DebitAccountProfileResponse extends jspb.Message {
  getReference(): string;
  setReference(value: string): void;

  getOriginaccountprofileid(): number;
  setOriginaccountprofileid(value: number): void;

  hasOriginaccountprofiletransactionid(): boolean;
  clearOriginaccountprofiletransactionid(): void;
  getOriginaccountprofiletransactionid(): number;
  setOriginaccountprofiletransactionid(value: number): void;

  getDestinationaccountprofileid(): number;
  setDestinationaccountprofileid(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getPurpose(): string;
  setPurpose(value: string): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): DebitAccountProfileStatusMap[keyof DebitAccountProfileStatusMap];
  setStatus(value: DebitAccountProfileStatusMap[keyof DebitAccountProfileStatusMap]): void;

  getCreatedat(): number;
  setCreatedat(value: number): void;

  hasCompletedat(): boolean;
  clearCompletedat(): void;
  getCompletedat(): number;
  setCompletedat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DebitAccountProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DebitAccountProfileResponse): DebitAccountProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DebitAccountProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DebitAccountProfileResponse;
  static deserializeBinaryFromReader(message: DebitAccountProfileResponse, reader: jspb.BinaryReader): DebitAccountProfileResponse;
}

export namespace DebitAccountProfileResponse {
  export type AsObject = {
    reference: string,
    originaccountprofileid: number,
    originaccountprofiletransactionid: number,
    destinationaccountprofileid: number,
    amount: number,
    purpose: string,
    status: DebitAccountProfileStatusMap[keyof DebitAccountProfileStatusMap],
    createdat: number,
    completedat: number,
  }
}

export class ReverseDebitAccountProfileRequest extends jspb.Message {
  getReference(): string;
  setReference(value: string): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReverseDebitAccountProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReverseDebitAccountProfileRequest): ReverseDebitAccountProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReverseDebitAccountProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReverseDebitAccountProfileRequest;
  static deserializeBinaryFromReader(message: ReverseDebitAccountProfileRequest, reader: jspb.BinaryReader): ReverseDebitAccountProfileRequest;
}

export namespace ReverseDebitAccountProfileRequest {
  export type AsObject = {
    reference: string,
    reason: string,
  }
}

export class ReverseDebitAccountProfileResponse extends jspb.Message {
  getReference(): string;
  setReference(value: string): void;

  getOriginaccountprofileid(): number;
  setOriginaccountprofileid(value: number): void;

  hasOriginaccountprofilereversedtransactionid(): boolean;
  clearOriginaccountprofilereversedtransactionid(): void;
  getOriginaccountprofilereversedtransactionid(): number;
  setOriginaccountprofilereversedtransactionid(value: number): void;

  getDestinationaccountprofileid(): number;
  setDestinationaccountprofileid(value: number): void;

  hasDestinationaccountprofilereversedtransactionid(): boolean;
  clearDestinationaccountprofilereversedtransactionid(): void;
  getDestinationaccountprofilereversedtransactionid(): number;
  setDestinationaccountprofilereversedtransactionid(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): DebitAccountProfileStatusMap[keyof DebitAccountProfileStatusMap];
  setStatus(value: DebitAccountProfileStatusMap[keyof DebitAccountProfileStatusMap]): void;

  getCreatedat(): number;
  setCreatedat(value: number): void;

  hasCompletedat(): boolean;
  clearCompletedat(): void;
  getCompletedat(): number;
  setCompletedat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReverseDebitAccountProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReverseDebitAccountProfileResponse): ReverseDebitAccountProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReverseDebitAccountProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReverseDebitAccountProfileResponse;
  static deserializeBinaryFromReader(message: ReverseDebitAccountProfileResponse, reader: jspb.BinaryReader): ReverseDebitAccountProfileResponse;
}

export namespace ReverseDebitAccountProfileResponse {
  export type AsObject = {
    reference: string,
    originaccountprofileid: number,
    originaccountprofilereversedtransactionid: number,
    destinationaccountprofileid: number,
    destinationaccountprofilereversedtransactionid: number,
    amount: number,
    reason: string,
    status: DebitAccountProfileStatusMap[keyof DebitAccountProfileStatusMap],
    createdat: number,
    completedat: number,
  }
}

export class FetchTransferByReferenceRequest extends jspb.Message {
  getReference(): string;
  setReference(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchTransferByReferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchTransferByReferenceRequest): FetchTransferByReferenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchTransferByReferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchTransferByReferenceRequest;
  static deserializeBinaryFromReader(message: FetchTransferByReferenceRequest, reader: jspb.BinaryReader): FetchTransferByReferenceRequest;
}

export namespace FetchTransferByReferenceRequest {
  export type AsObject = {
    reference: string,
  }
}

export interface DebitAccountProfileStatusMap {
  PENDING: 0;
  SUCCESSFUL: 1;
  FAILED: 2;
}

export const DebitAccountProfileStatus: DebitAccountProfileStatusMap;

