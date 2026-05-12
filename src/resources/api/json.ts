// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Json extends APIResource {
  /**
   * Returns the OpenAPI documentation in JSON format.
   *
   * @example
   * ```ts
   * const response = await client.api.json.getDocumentation();
   * ```
   */
  getDocumentation(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/api.json', options);
  }
}

export type JsonGetDocumentationResponse = string;

export declare namespace Json {
  export { type JsonGetDocumentationResponse as JsonGetDocumentationResponse };
}
