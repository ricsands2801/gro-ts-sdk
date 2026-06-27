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
  SubscriptionGeneratePortalLinkParams,
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
   * Returns a paginated, account-scoped activity log covering both system-generated
   * events (subscription created/paused, order placed, billing failed, etc.) and
   * custom entries written by integrations via `POST /api/activity-logs`.
   *
   * ### Filtering by loggable type and ID
   *
   * Each row is attached to a "loggable" — the subscription or order the event
   * describes. To narrow the feed to a single resource, pass exactly one of:
   *
   * - `subscription_id` — returns only rows where `loggable_type = "subscription"`
   *   and `loggable_id` matches the given subscription UUID.
   * - `order_id` — returns only rows where `loggable_type = "order"` and
   *   `loggable_id` matches the given order UUID.
   *
   * The two filters are mutually exclusive; if both are supplied, `order_id` takes
   * precedence. When neither is supplied, the response includes both subscription
   * and order rows.
   *
   * The returned `loggable_type` and `loggable_id` fields on each row identify the
   * source entity, and the convenience fields
   * `subscription_id`/`subscription_number` and `order_id`/`order_number` are
   * populated for the corresponding row type so clients can render links without a
   * second lookup.
   *
   * ### Filtering by integration / custom actions
   *
   * Custom entries written by integrations through `POST /api/activity-logs` are
   * stored with `actor_type = "api"` and an action name prefixed `integration_`
   * (e.g. `integration_shipment_dispatched`). To filter the feed to integration
   * activity:
   *
   * - `actor_type=api` — every row written through the public log endpoint.
   * - `action=integration_shipment_dispatched` — a single custom action.
   * - `action=integration_shipment_dispatched,integration_label_printed` —
   *   comma-separated list of action names; matched as `IN (...)`.
   *
   * The set of distinct `integration_*` action names recorded for the account is
   * available via `GET /api/activity-logs/integration-actions` and is suitable for
   * populating a filter dropdown.
   *
   * ### Other filters
   *
   * - `actor_type=customer|admin|api|system` — actor category. `system` also
   *   includes webhook-triggered events and rows with no actor recorded.
   * - `actor_name` — when `actor_type=admin`, restricts to a specific staff member
   *   by name. Distinct names are available via `GET /api/activity-logs/actors`.
   * - `start_date` / `end_date` (required) — `yyyy-MM-dd` date range interpreted in
   *   the account's timezone.
   * - `page` / `limit` — pagination (`limit` capped at 100, default 25).
   *
   * @example
   * ```ts
   * const response = await client.api.listActivityLogs({
   *   end_date: 'end_date',
   *   start_date: 'start_date',
   * });
   * ```
   */
  listActivityLogs(
    query: APIListActivityLogsParams,
    options?: RequestOptions,
  ): APIPromise<APIListActivityLogsResponse> {
    return this._client.get('/api/activity-logs', { query, ...options });
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

export interface APIListActivityLogsResponse {
  data?: Array<APIListActivityLogsResponse.Data>;

  metadata?: APIListActivityLogsResponse.Metadata;
}

export namespace APIListActivityLogsResponse {
  export interface Data {
    id?: string;

    /**
     * Action name. System-generated actions use snake*case domain verbs (e.g.
     * `subscription_paused`); integration entries are prefixed `integration*`.
     */
    action?: string;

    actor_name?: string | null;

    /**
     * Category of the actor that triggered the entry. `api` indicates the entry was
     * written by an integration via POST /api/activity-logs.
     */
    actor_type?: string | null;

    /**
     * Optional field-level diff captured when the entry was written.
     */
    changes?: { [key: string]: unknown } | null;

    created_at?: string;

    customer_email?: string | null;

    customer_name?: string | null;

    description?: string | null;

    /**
     * UUID of the subscription or order the entry is attached to.
     */
    loggable_id?: string;

    /**
     * Type of entity the entry is attached to.
     */
    loggable_type?: 'subscription' | 'order';

    /**
     * Free-form metadata stored alongside the entry.
     */
    metadata?: { [key: string]: unknown } | null;

    order_id?: string | null;

    order_number?: string | null;

    profile_id?: string | null;

    subscription_id?: string | null;

    subscription_number?: string | null;
  }

  export interface Metadata {
    current_page?: number;

    last_page?: number;

    per_page?: number;

    total?: number;
  }
}

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

export interface APIListActivityLogsParams {
  /**
   * Inclusive end of the date range, formatted yyyy-MM-dd. Interpreted in the
   * account timezone.
   */
  end_date: string;

  /**
   * Inclusive start of the date range, formatted yyyy-MM-dd. Interpreted in the
   * account timezone.
   */
  start_date: string;

  /**
   * Filter by action name. Accepts a single action (e.g. `subscription_paused`) or a
   * comma-separated list. Use the `integration_*` prefix to match custom entries
   * logged via POST /api/activity-logs.
   */
  action?: string;

  /**
   * When combined with `actor_type=admin`, restricts to a specific staff member by
   * display name. Ignored for other actor types.
   */
  actor_name?: string;

  /**
   * Filter by actor category. `api` returns every entry written by an integration
   * through POST /api/activity-logs. `system` also includes webhook-triggered events
   * and rows with no actor recorded.
   */
  actor_type?: 'customer' | 'admin' | 'api' | 'system';

  /**
   * Page size (1-100). Defaults to 25.
   */
  limit?: number;

  /**
   * Narrow to a single order. Equivalent to
   * `loggable_type=order AND loggable_id=<uuid>`. Takes precedence over
   * `subscription_id` if both are supplied.
   */
  order_id?: string;

  /**
   * 1-indexed page number. Defaults to 1.
   */
  page?: number;

  /**
   * Narrow to a single subscription. Equivalent to
   * `loggable_type=subscription AND loggable_id=<uuid>`. Mutually exclusive with
   * `order_id`.
   */
  subscription_id?: string;
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
    type APIListActivityLogsResponse as APIListActivityLogsResponse,
    type APILogCustomActionResponse as APILogCustomActionResponse,
    type APIListActivityLogsParams as APIListActivityLogsParams,
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
    type SubscriptionGeneratePortalLinkParams as SubscriptionGeneratePortalLinkParams,
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
