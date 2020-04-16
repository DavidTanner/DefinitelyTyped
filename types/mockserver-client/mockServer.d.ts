/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "body".
 */
export type RequestBodyMatcher =
  | {
      not?: boolean;
      type?: "BINARY";
      base64Bytes?: string;
      contentType?: string;
    }
  | {
      not?: boolean;
      type?: "JSON";
      json?: string;
      contentType?: string;
      matchType?: "STRICT" | "ONLY_MATCHING_FIELDS";
    }
  | {
      [k: string]: any;
    }
  | any[]
  | {
      not?: boolean;
      type?: "JSON_SCHEMA";
      jsonSchema?: string;
    }
  | {
      not?: boolean;
      type?: "JSON_PATH";
      jsonPath?: string;
    }
  | {
      not?: boolean;
      type?: "PARAMETERS";
      parameters?: KeyToMultiValue;
    }
  | {
      not?: boolean;
      type?: "REGEX";
      regex?: string;
    }
  | {
      not?: boolean;
      type?: "STRING";
      string?: string;
      subString?: boolean;
      contentType?: string;
    }
  | string
  | {
      not?: boolean;
      type?: "XML";
      xml?: string;
      contentType?: string;
    }
  | {
      not?: boolean;
      type?: "XML_SCHEMA";
      xmlSchema?: string;
    }
  | {
      not?: boolean;
      type?: "XPATH";
      xpath?: string;
    };
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "keyToMultiValue".
 */
export type KeyToMultiValue =
  | {
      name?: string;
      values?: string[];
    }[]
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\S+$".
       */
      [k: string]: string[];
    };
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "bodyWithContentType".
 */
export type ResponseBody =
  | {
      not?: boolean;
      type?: "BINARY";
      base64Bytes?: string;
      contentType?: string;
    }
  | {
      not?: boolean;
      type?: "JSON";
      json?: string;
      contentType?: string;
    }
  | {
      [k: string]: any;
    }
  | any[]
  | {
      not?: boolean;
      type?: "PARAMETERS";
      parameters?: KeyToMultiValue;
    }
  | {
      not?: boolean;
      type?: "STRING";
      string?: string;
      contentType?: string;
    }
  | string
  | {
      not?: boolean;
      type?: "XML";
      xml?: string;
      contentType?: string;
    };
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "keyToValue".
 */
export type KeyToValue =
  | {
      name?: string;
      value?: string;
    }[]
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\S+$".
       */
      [k: string]: string;
    };
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "expectations".
 */
export type ListOfExpectations = Expectation[];

export interface RequiredSchema {
  [k: string]: any;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "connectionOptions".
 */
export interface ConnectionOptions {
  suppressContentLengthHeader?: boolean;
  contentLengthHeaderOverride?: number;
  suppressConnectionHeader?: boolean;
  chunkSize?: number;
  keepAliveOverride?: boolean;
  closeSocket?: boolean;
  closeSocketDelay?: ResponseDelay;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "delay".
 */
export interface ResponseDelay {
  timeUnit?: string;
  value?: number;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "expectation".
 */
export interface Expectation {
  id?: string;
  priority?: number;
  httpRequest?: RequestMatcher;
  httpResponse?: ResponseToReturn;
  httpResponseTemplate?: TemplateToGenerateResponseRequest;
  httpResponseClassCallback?: ClassCallback;
  httpResponseObjectCallback?: ObjectMethodCallback;
  httpForward?: HostAndPortToForwardTo;
  httpForwardTemplate?: TemplateToGenerateResponseRequest;
  httpForwardClassCallback?: ClassCallback;
  httpForwardObjectCallback?: ObjectMethodCallback;
  httpOverrideForwardedRequest?: OverrideForwardedRequest;
  httpError?: ErrorBehaviour;
  times?: NumberOfResponses;
  timeToLive?: TimeExpectationIsValidFor;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "httpRequest".
 */
export interface RequestMatcher {
  body?: RequestBodyMatcher;
  headers?: KeyToMultiValue;
  cookies?: KeyToValue;
  queryStringParameters?: KeyToMultiValue;
  path?: string;
  method?: string;
  secure?: boolean;
  keepAlive?: boolean;
  socketAddress?: RemoteAddressToSendRequestTo;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "socketAddress".
 */
export interface RemoteAddressToSendRequestTo {
  host?: string;
  port?: number;
  scheme?: "HTTP" | "HTTPS";
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "httpResponse".
 */
export interface ResponseToReturn {
  delay?: ResponseDelay;
  body?: ResponseBody;
  cookies?: KeyToValue;
  connectionOptions?: ConnectionOptions;
  headers?: KeyToMultiValue;
  statusCode?: number;
  reasonPhrase?: string;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "httpTemplate".
 */
export interface TemplateToGenerateResponseRequest {
  delay?: ResponseDelay;
  templateType?: "JAVASCRIPT" | "VELOCITY";
  template?: string;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "httpClassCallback".
 */
export interface ClassCallback {
  delay?: ResponseDelay;
  callbackClass?: string;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "httpObjectCallback".
 */
export interface ObjectMethodCallback {
  delay?: ResponseDelay;
  clientId?: string;
  responseCallback?: boolean;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "httpForward".
 */
export interface HostAndPortToForwardTo {
  delay?: ResponseDelay;
  host?: string;
  port?: number;
  scheme?: "HTTP" | "HTTPS";
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "httpOverrideForwardedRequest".
 */
export interface OverrideForwardedRequest {
  delay?: ResponseDelay;
  httpRequest?: RequestMatcher;
  httpResponse?: ResponseToReturn;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "httpError".
 */
export interface ErrorBehaviour {
  delay?: ResponseDelay;
  dropConnection?: boolean;
  responseBytes?: string;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "times".
 */
export interface NumberOfResponses {
  remainingTimes?: number;
  unlimited?: boolean;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "timeToLive".
 */
export interface TimeExpectationIsValidFor {
  timeUnit?: "DAYS" | "HOURS" | "MINUTES" | "SECONDS" | "MILLISECONDS" | "MICROSECONDS" | "NANOSECONDS";
  timeToLive?: number;
  endDate?: number;
  unlimited?: boolean;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "httpRequestAndHttpResponse".
 */
export interface RequestAndResponse {
  httpRequest?: RequestMatcher;
  httpResponse?: ResponseToReturn;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "ports".
 */
export interface ListOfPorts {
  ports?: number[];
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "verification".
 */
export interface Verification {
  httpRequest?: RequestMatcher;
  times?: NumberOfRequestToVerify;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "verificationTimes".
 */
export interface NumberOfRequestToVerify {
  atLeast?: number;
  atMost?: number;
}
/**
 * This interface was referenced by `RequiredSchema`'s JSON-Schema
 * via the `definition` "verificationSequence".
 */
export interface VerificationSequence {
  httpRequests?: RequestMatcher[];
}
