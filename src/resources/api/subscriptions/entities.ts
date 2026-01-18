// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Entities extends APIResource {
  /**
   * Create a new entity
   */
  create(body: EntityCreateParams, options?: RequestOptions): APIPromise<EntityCreateResponse> {
    return this._client.post('/api/subscriptions/entities', { body, ...options });
  }

  /**
   * Get an entity
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EntityRetrieveResponse> {
    return this._client.get(path`/api/subscriptions/entities/${id}`, options);
  }

  /**
   * Update an entity
   */
  update(
    id: string,
    body: EntityUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntityUpdateResponse> {
    return this._client.put(path`/api/subscriptions/entities/${id}`, { body, ...options });
  }

  /**
   * List all entities
   */
  list(
    query: EntityListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntityListResponse> {
    return this._client.get('/api/subscriptions/entities', { query, ...options });
  }

  /**
   * Delete an entity
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/subscriptions/entities/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EntityCreateResponse {
  id: string;

  account_id: string;

  attributes: unknown;

  entity_type: string;

  is_active: boolean;

  name: string;

  profile_id: string;

  created_at?: string | null;

  image_url?: string | null;

  updated_at?: string | null;

  wizard_id?: string | null;
}

export interface EntityRetrieveResponse {
  id: string;

  account_id: string;

  attributes: unknown;

  entity_type: string;

  is_active: boolean;

  name: string;

  profile_id: string;

  created_at?: string | null;

  image_url?: string | null;

  updated_at?: string | null;

  wizard_id?: string | null;
}

export interface EntityUpdateResponse {
  id: string;

  account_id: string;

  attributes: unknown;

  entity_type: string;

  is_active: boolean;

  name: string;

  profile_id: string;

  created_at?: string | null;

  image_url?: string | null;

  updated_at?: string | null;

  wizard_id?: string | null;
}

export interface EntityListResponse {
  data: Array<EntityListResponse.Data>;

  meta: EntityListResponse.Meta;
}

export namespace EntityListResponse {
  export interface Data {
    id: string;

    account_id: string;

    attributes: unknown;

    entity_type: string;

    is_active: boolean;

    name: string;

    profile_id: string;

    created_at?: string | null;

    image_url?: string | null;

    updated_at?: string | null;

    wizard_id?: string | null;
  }

  export interface Meta {
    /**
     * Current page number
     */
    current_page?: number;

    /**
     * First page number
     */
    first_page?: number;

    /**
     * URL for first page
     */
    first_page_url?: string;

    /**
     * Last page number
     */
    last_page?: number;

    /**
     * URL for last page
     */
    last_page_url?: string;

    /**
     * URL for next page
     */
    next_page_url?: string | null;

    /**
     * Items per page
     */
    per_page?: number;

    /**
     * URL for previous page
     */
    previous_page_url?: string | null;

    /**
     * Total number of items
     */
    total?: number;
  }
}

export interface EntityCreateParams {
  entity_type: string;

  name: string;

  profile_id: string;

  attributes?: { [key: string]: unknown };

  image_url?: string;

  is_active?: boolean;
}

export interface EntityUpdateParams {
  attributes?: { [key: string]: unknown };

  image_url?: string | null;

  is_active?: boolean;

  name?: string;
}

export interface EntityListParams {
  entity_type?: string;

  is_active?: boolean;

  limit?: number;

  page?: number;

  profile_id?: string;

  sort_by?: 'created_at' | 'name' | 'entity_type';

  sort_order?: 'asc' | 'desc';
}

export declare namespace Entities {
  export {
    type EntityCreateResponse as EntityCreateResponse,
    type EntityRetrieveResponse as EntityRetrieveResponse,
    type EntityUpdateResponse as EntityUpdateResponse,
    type EntityListResponse as EntityListResponse,
    type EntityCreateParams as EntityCreateParams,
    type EntityUpdateParams as EntityUpdateParams,
    type EntityListParams as EntityListParams,
  };
}
