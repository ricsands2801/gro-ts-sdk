// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProfilesAPI from './profiles';
import {
  ProfileBulkUploadResponse,
  ProfileCreateParams,
  ProfileCreateResponse,
  ProfileListParams,
  ProfileListResponse,
  ProfileRetrieveResponse,
  ProfileUpdateParams,
  ProfileUpdateResponse,
  Profiles,
} from './profiles';
import * as PublicAPI from './public/public';
import { Public } from './public/public';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import { Subscriptions } from './subscriptions/subscriptions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class API extends APIResource {
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  public: PublicAPI.Public = new PublicAPI.Public(this._client);

  /**
   * Displays the OpenAPI documentation UI.
   *
   * @example
   * ```ts
   * const api = await client.api.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/api', {
      ...options,
      headers: buildHeaders([{ Accept: 'text/html' }, options?.headers]),
    });
  }
}

export type APIRetrieveResponse = string;

API.Profiles = Profiles;
API.Subscriptions = Subscriptions;
API.Public = Public;

export declare namespace API {
  export { type APIRetrieveResponse as APIRetrieveResponse };

  export {
    Profiles as Profiles,
    type ProfileCreateResponse as ProfileCreateResponse,
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileListResponse as ProfileListResponse,
    type ProfileBulkUploadResponse as ProfileBulkUploadResponse,
    type ProfileCreateParams as ProfileCreateParams,
    type ProfileUpdateParams as ProfileUpdateParams,
    type ProfileListParams as ProfileListParams,
  };

  export { Subscriptions as Subscriptions };

  export { Public as Public };
}
