// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JsonAPI from './json';
import { Json, JsonGetDocumentationResponse } from './json';
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
import * as YamlAPI from './yaml';
import { Yaml, YamlGetDocumentationResponse } from './yaml';
import * as PublicAPI from './public/public';
import { Public } from './public/public';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import {
  SubscriptionCancelParams,
  SubscriptionCancelResponse,
  SubscriptionCreateParams,
  SubscriptionCreateResponse,
  SubscriptionGeneratePortalLinkResponse,
  SubscriptionGetRescheduleOptionsResponse,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionPauseParams,
  SubscriptionPauseResponse,
  SubscriptionReactivateResponse,
  SubscriptionRescheduleParams,
  SubscriptionRescheduleResponse,
  SubscriptionResumeParams,
  SubscriptionResumeResponse,
  SubscriptionRetrieveResponse,
  SubscriptionRetryPaymentResponse,
  SubscriptionShipNowParams,
  SubscriptionShipNowResponse,
  SubscriptionSkipParams,
  SubscriptionSkipResponse,
  SubscriptionUpdateBillingDateParams,
  SubscriptionUpdateBillingDateResponse,
  SubscriptionUpdateDeliveryInstructionsParams,
  SubscriptionUpdateDeliveryInstructionsResponse,
  SubscriptionUpdateFrequencyParams,
  SubscriptionUpdateFrequencyResponse,
  Subscriptions,
} from './subscriptions/subscriptions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class API extends APIResource {
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  public: PublicAPI.Public = new PublicAPI.Public(this._client);
  json: JsonAPI.Json = new JsonAPI.Json(this._client);
  yaml: YamlAPI.Yaml = new YamlAPI.Yaml(this._client);

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

  /**
   * Append a custom activity log entry to a subscription or order. The `loggable_id`
   * must reference a record (subscription or order) owned by the authenticated
   * account. The `action` must be prefixed with `integration_` (e.g.
   * `integration_shipment_dispatched`) so custom entries are distinguishable from
   * system-generated actions.
   *
   * @example
   * ```ts
   * const response = await client.api.logCustomAction({
   *   action: 'x',
   *   loggable_id: 'loggable_id',
   *   loggable_type: 'order',
   * });
   * ```
   */
  logCustomAction(
    body: APILogCustomActionParams,
    options?: RequestOptions,
  ): APIPromise<APILogCustomActionResponse> {
    return this._client.post('/api/activity-logs', { body, ...options });
  }
}

export type APIRetrieveResponse = string;

export interface APILogCustomActionResponse {
  id?: string;

  action?: string;

  actor_name?: string | null;

  actor_type?: string | null;

  created_at?: string;

  description?: string | null;

  loggable_id?: string;

  loggable_type?: 'order' | 'subscription';

  metadata?: { [key: string]: unknown } | null;
}

export interface APILogCustomActionParams {
  action: string;

  loggable_id: string;

  loggable_type: 'order' | 'subscription';

  description?: string;

  metadata?: { [key: string]: unknown };
}

API.Profiles = Profiles;
API.Subscriptions = Subscriptions;
API.Public = Public;
API.Json = Json;
API.Yaml = Yaml;

export declare namespace API {
  export {
    type APIRetrieveResponse as APIRetrieveResponse,
    type APILogCustomActionResponse as APILogCustomActionResponse,
    type APILogCustomActionParams as APILogCustomActionParams,
  };

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

  export {
    Subscriptions as Subscriptions,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionRetrieveResponse as SubscriptionRetrieveResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionCancelResponse as SubscriptionCancelResponse,
    type SubscriptionGeneratePortalLinkResponse as SubscriptionGeneratePortalLinkResponse,
    type SubscriptionGetRescheduleOptionsResponse as SubscriptionGetRescheduleOptionsResponse,
    type SubscriptionPauseResponse as SubscriptionPauseResponse,
    type SubscriptionReactivateResponse as SubscriptionReactivateResponse,
    type SubscriptionRescheduleResponse as SubscriptionRescheduleResponse,
    type SubscriptionResumeResponse as SubscriptionResumeResponse,
    type SubscriptionRetryPaymentResponse as SubscriptionRetryPaymentResponse,
    type SubscriptionShipNowResponse as SubscriptionShipNowResponse,
    type SubscriptionSkipResponse as SubscriptionSkipResponse,
    type SubscriptionUpdateBillingDateResponse as SubscriptionUpdateBillingDateResponse,
    type SubscriptionUpdateDeliveryInstructionsResponse as SubscriptionUpdateDeliveryInstructionsResponse,
    type SubscriptionUpdateFrequencyResponse as SubscriptionUpdateFrequencyResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionCancelParams as SubscriptionCancelParams,
    type SubscriptionPauseParams as SubscriptionPauseParams,
    type SubscriptionRescheduleParams as SubscriptionRescheduleParams,
    type SubscriptionResumeParams as SubscriptionResumeParams,
    type SubscriptionShipNowParams as SubscriptionShipNowParams,
    type SubscriptionSkipParams as SubscriptionSkipParams,
    type SubscriptionUpdateBillingDateParams as SubscriptionUpdateBillingDateParams,
    type SubscriptionUpdateDeliveryInstructionsParams as SubscriptionUpdateDeliveryInstructionsParams,
    type SubscriptionUpdateFrequencyParams as SubscriptionUpdateFrequencyParams,
  };

  export { Public as Public };

  export { Json as Json, type JsonGetDocumentationResponse as JsonGetDocumentationResponse };

  export { Yaml as Yaml, type YamlGetDocumentationResponse as YamlGetDocumentationResponse };
}
