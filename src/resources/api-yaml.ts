// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class APIYaml extends APIResource {
  /**
   * Returns the OpenAPI documentation in YAML format.
   */
  retrieve(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/api.yaml', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/yaml' }, options?.headers]),
    });
  }
}

export type APIYamlRetrieveResponse = string;

export declare namespace APIYaml {
  export { type APIYamlRetrieveResponse as APIYamlRetrieveResponse };
}
