// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Profiles extends APIResource {
  /**
   * Create a new profile
   */
  create(body: ProfileCreateParams, options?: RequestOptions): APIPromise<ProfileCreateResponse> {
    return this._client.post('/api/profiles', { body, ...options });
  }

  /**
   * Get a profile
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ProfileRetrieveResponse> {
    return this._client.get(path`/api/profiles/${id}`, options);
  }

  /**
   * Update a profile
   */
  update(
    id: string,
    body: ProfileUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProfileUpdateResponse> {
    return this._client.put(path`/api/profiles/${id}`, { body, ...options });
  }

  /**
   * List all profiles
   */
  list(
    query: ProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProfileListResponse> {
    return this._client.get('/api/profiles', { query, ...options });
  }

  /**
   * Delete a profile
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/profiles/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get profile activity timeline
   */
  activity(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/profiles/${id}/activity`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Bulk upload profiles
   */
  bulkUpload(options?: RequestOptions): APIPromise<ProfileBulkUploadResponse> {
    return this._client.post('/api/profiles/bulk-upload', options);
  }
}

export interface ProfileCreateResponse {
  id: string;

  email: string;

  full_address: string;

  full_name: string;

  address1?: string | null;

  address2?: string | null;

  city?: string | null;

  country?: string | null;

  created_at?: string | null;

  email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

  external_id?: string | null;

  first_name?: string | null;

  last_name?: string | null;

  phone_number?: string | null;

  postal_code?: string | null;

  region?: string | null;

  shopify_customer_id?: string | null;

  sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

  timezone?: string | null;

  updated_at?: string | null;
}

export interface ProfileRetrieveResponse {
  id: string;

  email: string;

  full_address: string;

  full_name: string;

  address1?: string | null;

  address2?: string | null;

  city?: string | null;

  country?: string | null;

  created_at?: string | null;

  email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

  external_id?: string | null;

  first_name?: string | null;

  last_name?: string | null;

  phone_number?: string | null;

  postal_code?: string | null;

  region?: string | null;

  shopify_customer_id?: string | null;

  sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

  timezone?: string | null;

  updated_at?: string | null;
}

export interface ProfileUpdateResponse {
  id: string;

  email: string;

  full_address: string;

  full_name: string;

  address1?: string | null;

  address2?: string | null;

  city?: string | null;

  country?: string | null;

  created_at?: string | null;

  email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

  external_id?: string | null;

  first_name?: string | null;

  last_name?: string | null;

  phone_number?: string | null;

  postal_code?: string | null;

  region?: string | null;

  shopify_customer_id?: string | null;

  sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

  timezone?: string | null;

  updated_at?: string | null;
}

export interface ProfileListResponse {
  data: Array<ProfileListResponse.Data>;

  meta: ProfileListResponse.Meta;
}

export namespace ProfileListResponse {
  export interface Data {
    id: string;

    email: string;

    full_address: string;

    full_name: string;

    address1?: string | null;

    address2?: string | null;

    city?: string | null;

    country?: string | null;

    created_at?: string | null;

    email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

    external_id?: string | null;

    first_name?: string | null;

    last_name?: string | null;

    phone_number?: string | null;

    postal_code?: string | null;

    region?: string | null;

    shopify_customer_id?: string | null;

    sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

    timezone?: string | null;

    updated_at?: string | null;
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

export interface ProfileBulkUploadResponse {
  imported?: number;
}

export interface ProfileCreateParams {
  email: string;

  address1?: string;

  address2?: string;

  city?: string;

  country?: string;

  country_code?: string;

  created_at?: string | null;

  email_status?: 'subscribed' | 'unsubscribed' | 'suppressed';

  external_id?: string;

  first_name?: string;

  ip?: string;

  last_name?: string;

  phone_number?: string;

  postal_code?: string;

  region?: string;

  sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed';

  timezone?: string;

  title?: string;

  updated_at?: string | null;
}

export interface ProfileUpdateParams {
  address1?: string;

  address2?: string;

  city?: string;

  country?: string;

  country_code?: string;

  email?: string;

  email_status?: 'subscribed' | 'unsubscribed' | 'suppressed';

  external_id?: string;

  first_name?: string;

  ip?: string;

  last_name?: string;

  phone_number?: string;

  postal_code?: string;

  region?: string;

  sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed';

  timezone?: string;

  title?: string;
}

export interface ProfileListParams {
  email?: string;

  email_status?: 'subscribed' | 'unsubscribed' | 'suppressed';

  limit?: number;

  page?: number;

  shopify_customer_id?: string;
}

export declare namespace Profiles {
  export {
    type ProfileCreateResponse as ProfileCreateResponse,
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileListResponse as ProfileListResponse,
    type ProfileBulkUploadResponse as ProfileBulkUploadResponse,
    type ProfileCreateParams as ProfileCreateParams,
    type ProfileUpdateParams as ProfileUpdateParams,
    type ProfileListParams as ProfileListParams,
  };
}
