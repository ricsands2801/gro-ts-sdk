// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class APIJson extends APIResource {
  /**
   * Returns the OpenAPI documentation in JSON format.
   */
  retrieve(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/api.json', options);
  }
}

export type APIJsonRetrieveResponse = string;

export declare namespace APIJson {
  export { type APIJsonRetrieveResponse as APIJsonRetrieveResponse };
}
