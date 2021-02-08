/* eslint-disable */
import { UnaryMethodDefinition } from '@improbable-eng/grpc-web/dist/typings/service';
import { Observable } from 'rxjs';
import { BrowserHeaders } from 'browser-headers';
import { grpc } from '@improbable-eng/grpc-web';
import { Code } from '@improbable-eng/grpc-web/dist/typings/Code';
import { share } from 'rxjs/operators';
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';

export const protobufPackage = 'echo';

export interface EchoRequest {
  message: string;
}

export interface EchoResponse {
  message: string;
  serverTime: number;
}

export interface StreamEchoRequest {
  message: string;
  intervalMillis: number;
}

export interface StreamEchoResponse {
  message: string;
  serverTime: number;
  count: number;
}

const baseEchoRequest: object = { message: '' };

export const EchoRequest = {
  encode(message: EchoRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.message);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EchoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEchoRequest } as EchoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EchoRequest {
    const message = { ...baseEchoRequest } as EchoRequest;
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = '';
    }
    return message;
  },

  fromPartial(object: DeepPartial<EchoRequest>): EchoRequest {
    const message = { ...baseEchoRequest } as EchoRequest;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = '';
    }
    return message;
  },

  toJSON(message: EchoRequest): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
};

const baseEchoResponse: object = { message: '', serverTime: 0 };

export const EchoResponse = {
  encode(message: EchoResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.message);
    writer.uint32(16).int64(message.serverTime);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EchoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEchoResponse } as EchoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.serverTime = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EchoResponse {
    const message = { ...baseEchoResponse } as EchoResponse;
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = '';
    }
    if (object.serverTime !== undefined && object.serverTime !== null) {
      message.serverTime = Number(object.serverTime);
    } else {
      message.serverTime = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<EchoResponse>): EchoResponse {
    const message = { ...baseEchoResponse } as EchoResponse;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = '';
    }
    if (object.serverTime !== undefined && object.serverTime !== null) {
      message.serverTime = object.serverTime;
    } else {
      message.serverTime = 0;
    }
    return message;
  },

  toJSON(message: EchoResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.serverTime !== undefined && (obj.serverTime = message.serverTime);
    return obj;
  },
};

const baseStreamEchoRequest: object = { message: '', intervalMillis: 0 };

export const StreamEchoRequest = {
  encode(message: StreamEchoRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.message);
    writer.uint32(16).int64(message.intervalMillis);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StreamEchoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamEchoRequest } as StreamEchoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.intervalMillis = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamEchoRequest {
    const message = { ...baseStreamEchoRequest } as StreamEchoRequest;
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = '';
    }
    if (object.intervalMillis !== undefined && object.intervalMillis !== null) {
      message.intervalMillis = Number(object.intervalMillis);
    } else {
      message.intervalMillis = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<StreamEchoRequest>): StreamEchoRequest {
    const message = { ...baseStreamEchoRequest } as StreamEchoRequest;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = '';
    }
    if (object.intervalMillis !== undefined && object.intervalMillis !== null) {
      message.intervalMillis = object.intervalMillis;
    } else {
      message.intervalMillis = 0;
    }
    return message;
  },

  toJSON(message: StreamEchoRequest): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.intervalMillis !== undefined && (obj.intervalMillis = message.intervalMillis);
    return obj;
  },
};

const baseStreamEchoResponse: object = { message: '', serverTime: 0, count: 0 };

export const StreamEchoResponse = {
  encode(message: StreamEchoResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.message);
    writer.uint32(16).int64(message.serverTime);
    writer.uint32(24).int64(message.count);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StreamEchoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamEchoResponse } as StreamEchoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.serverTime = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.count = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamEchoResponse {
    const message = { ...baseStreamEchoResponse } as StreamEchoResponse;
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = '';
    }
    if (object.serverTime !== undefined && object.serverTime !== null) {
      message.serverTime = Number(object.serverTime);
    } else {
      message.serverTime = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<StreamEchoResponse>): StreamEchoResponse {
    const message = { ...baseStreamEchoResponse } as StreamEchoResponse;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = '';
    }
    if (object.serverTime !== undefined && object.serverTime !== null) {
      message.serverTime = object.serverTime;
    } else {
      message.serverTime = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: StreamEchoResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.serverTime !== undefined && (obj.serverTime = message.serverTime);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },
};

/** The echo service provides a convenient way for clients to test connectivity */
export interface EchoService {
  /** The request is received by the service and echoed back with a timestamp */
  Echo(request: DeepPartial<EchoRequest>, metadata?: grpc.Metadata): Promise<EchoResponse>;
  /** Start a stream that responds with a regular interval */
  StreamEcho(request: DeepPartial<StreamEchoRequest>, metadata?: grpc.Metadata): Observable<StreamEchoResponse>;
  BidiStreamEcho(
    request: DeepPartial<Observable<EchoRequest>>,
    metadata?: grpc.Metadata
  ): Observable<StreamEchoResponse>;
}

export class EchoServiceClientImpl implements EchoService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  Echo(request: DeepPartial<EchoRequest>, metadata?: grpc.Metadata): Promise<EchoResponse> {
    return this.rpc.unary(EchoServiceEchoDesc, EchoRequest.fromPartial(request), metadata);
  }

  StreamEcho(request: DeepPartial<StreamEchoRequest>, metadata?: grpc.Metadata): Observable<StreamEchoResponse> {
    return this.rpc.invoke(EchoServiceStreamEchoDesc, StreamEchoRequest.fromPartial(request), metadata);
  }

  BidiStreamEcho(
    request: DeepPartial<Observable<EchoRequest>>,
    metadata?: grpc.Metadata
  ): Observable<StreamEchoResponse> {
    throw new Error('client-side streaming is not supported');
  }
}

export const EchoServiceDesc = {
  serviceName: 'echo.EchoService',
};

export const EchoServiceEchoDesc: UnaryMethodDefinitionish = {
  methodName: 'Echo',
  service: EchoServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EchoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EchoResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const EchoServiceStreamEchoDesc: UnaryMethodDefinitionish = {
  methodName: 'StreamEcho',
  service: EchoServiceDesc,
  requestStream: false,
  responseStream: true,
  requestType: {
    serializeBinary() {
      return StreamEchoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...StreamEchoResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>;
  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Observable<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;
    streamingTransport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;
      streamingTransport?: grpc.TransportFactory;
      debug?: boolean;
      metadata?: grpc.Metadata;
    }
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }

  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Observable<any> {
    // Status Response Codes (https://developers.google.com/maps-booking/reference/grpc-api/status_codes)
    const upStreamCodes = [2, 4, 8, 9, 10, 13, 14, 15];
    const DEFAULT_TIMEOUT_TIME: number = 3_000;
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
        : metadata || this.options.metadata;
    return new Observable((observer) => {
      const upStream = () => {
        grpc.invoke(methodDesc, {
          host: this.host,
          request,
          transport: this.options.streamingTransport || this.options.transport,
          metadata: maybeCombinedMetadata,
          debug: this.options.debug,
          onMessage: (next) => observer.next(next),
          onEnd: (code: Code, message: string) => {
            if (code === 0) {
              observer.complete();
            } else if (upStreamCodes.includes(code)) {
              setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
            } else {
              observer.error(new Error(`Error ${code} ${message}`));
            }
          },
        });
      };
      upStream();
    }).pipe(share());
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw new Error('Unable to locate global object');
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
