// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EntitiesAPI from './entities';
import {
  Entities,
  EntityCreateParams,
  EntityCreateResponse,
  EntityListParams,
  EntityListResponse,
  EntityRetrieveResponse,
  EntityUpdateParams,
  EntityUpdateResponse,
} from './entities';
import * as OrdersAPI from './orders';
import { OrderListParams, OrderListResponse, OrderRetrieveResponse, Orders } from './orders';
import * as PaymentMethodAPI from './payment-method';
import {
  PaymentMethod,
  PaymentMethodListResponse,
  PaymentMethodRetrieveResponse,
  PaymentMethodSendUpdateEmailResponse,
  PaymentMethodUpdateParams,
  PaymentMethodUpdateResponse,
} from './payment-method';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subscriptions extends APIResource {
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
  paymentMethod: PaymentMethodAPI.PaymentMethod = new PaymentMethodAPI.PaymentMethod(this._client);

  /**
   * Creates new subscriptions for a profile. Lines split across entities will
   * produce multiple subscription records; the response returns the IDs of every
   * subscription created.
   *
   * @example
   * ```ts
   * const subscription = await client.api.subscriptions.create({
   *   lines: [
   *     {
   *       price: 0,
   *       product_title: 'product_title',
   *       quantity: 1,
   *       selling_plan_id: 'selling_plan_id',
   *       shopify_product_id: 'shopify_product_id',
   *       shopify_variant_id: 'shopify_variant_id',
   *     },
   *   ],
   *   next_delivery_date: 'next_delivery_date',
   *   profile_id: 'profile_id',
   *   shopify_payment_method_id: 'shopify_payment_method_id',
   * });
   * ```
   */
  create(body: SubscriptionCreateParams, options?: RequestOptions): APIPromise<SubscriptionCreateResponse> {
    return this._client.post('/api/subscriptions', { body, ...options });
  }

  /**
   * Get a subscription
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.api.subscriptions.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SubscriptionRetrieveResponse> {
    return this._client.get(path`/api/subscriptions/${id}`, options);
  }

  /**
   * List all subscriptions
   *
   * @example
   * ```ts
   * const subscriptions = await client.api.subscriptions.list();
   * ```
   */
  list(
    query: SubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListResponse> {
    return this._client.get('/api/subscriptions', { query, ...options });
  }

  /**
   * Cancel a subscription
   *
   * @example
   * ```ts
   * const response = await client.api.subscriptions.cancel(
   *   'id',
   * );
   * ```
   */
  cancel(
    id: string,
    body: SubscriptionCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionCancelResponse> {
    return this._client.post(path`/api/subscriptions/${id}/cancel`, { body, ...options });
  }

  /**
   * Generates a one-time magic login link that authenticates the subscription owner
   * directly into the customer portal for the given subscription. Returns a
   * customer-facing link and an admin-impersonation link, both expiring after 7
   * days.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.subscriptions.generatePortalLink('id');
   * ```
   */
  generatePortalLink(
    id: string,
    options?: RequestOptions,
  ): APIPromise<SubscriptionGeneratePortalLinkResponse> {
    return this._client.post(path`/api/subscriptions/${id}/portal-link`, options);
  }

  /**
   * Returns the dates (and delivery slots, when delivery is enabled) that can be
   * used to reschedule a subscription. When the account has delivery enabled, the
   * response includes per-date delivery slots. When delivery is disabled, the
   * response returns billing-only dates — note that billing-only mode is currently
   * not consumed by any client.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.subscriptions.getRescheduleOptions('id');
   * ```
   */
  getRescheduleOptions(
    id: string,
    options?: RequestOptions,
  ): APIPromise<SubscriptionGetRescheduleOptionsResponse> {
    return this._client.get(path`/api/subscriptions/${id}/reschedule-options`, options);
  }

  /**
   * Pause a subscription
   *
   * @example
   * ```ts
   * const response = await client.api.subscriptions.pause('id');
   * ```
   */
  pause(
    id: string,
    body: SubscriptionPauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionPauseResponse> {
    return this._client.post(path`/api/subscriptions/${id}/pause`, { body, ...options });
  }

  /**
   * Reactivate a cancelled subscription
   *
   * @example
   * ```ts
   * const response = await client.api.subscriptions.reactivate(
   *   'id',
   * );
   * ```
   */
  reactivate(id: string, options?: RequestOptions): APIPromise<SubscriptionReactivateResponse> {
    return this._client.post(path`/api/subscriptions/${id}/reactivate`, options);
  }

  /**
   * Reschedules a subscription to a new billing or delivery date. If the account has
   * delivery enabled and a slot_id and delivery_date are provided, the delivery is
   * moved; otherwise the billing date is updated.
   *
   * @example
   * ```ts
   * const response = await client.api.subscriptions.reschedule(
   *   'id',
   * );
   * ```
   */
  reschedule(
    id: string,
    body: SubscriptionRescheduleParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionRescheduleResponse> {
    return this._client.post(path`/api/subscriptions/${id}/reschedule`, { body, ...options });
  }

  /**
   * Resume a paused subscription
   *
   * @example
   * ```ts
   * const response = await client.api.subscriptions.resume(
   *   'id',
   * );
   * ```
   */
  resume(
    id: string,
    body: SubscriptionResumeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionResumeResponse> {
    return this._client.post(path`/api/subscriptions/${id}/resume`, { body, ...options });
  }

  /**
   * Initiates a manual payment retry for a subscription that is in dunning or has a
   * failed payment. The retry runs asynchronously; the response confirms the job has
   * been dispatched.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.subscriptions.retryPayment('id');
   * ```
   */
  retryPayment(id: string, options?: RequestOptions): APIPromise<SubscriptionRetryPaymentResponse> {
    return this._client.post(path`/api/subscriptions/${id}/retry-payment`, options);
  }

  /**
   * Triggers immediate billing and shipment of a subscription. The job runs
   * asynchronously; the response confirms the billing attempt has been initiated.
   *
   * @example
   * ```ts
   * const response = await client.api.subscriptions.shipNow(
   *   'id',
   * );
   * ```
   */
  shipNow(
    id: string,
    body: SubscriptionShipNowParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionShipNowResponse> {
    return this._client.post(path`/api/subscriptions/${id}/ship-now`, { body, ...options });
  }

  /**
   * Skip the next billing cycle for a subscription
   *
   * @example
   * ```ts
   * const response = await client.api.subscriptions.skip('id', {
   *   skip_weeks: 0,
   * });
   * ```
   */
  skip(
    id: string,
    body: SubscriptionSkipParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionSkipResponse> {
    return this._client.post(path`/api/subscriptions/${id}/skip`, { body, ...options });
  }

  /**
   * Update the next billing date for a subscription
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.subscriptions.updateBillingDate('id', {
   *     next_billing_date: 'next_billing_date',
   *   });
   * ```
   */
  updateBillingDate(
    id: string,
    body: SubscriptionUpdateBillingDateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionUpdateBillingDateResponse> {
    return this._client.put(path`/api/subscriptions/${id}/billing-date`, { body, ...options });
  }

  /**
   * Updates the delivery_instructions on the subscription. When `update_all_active`
   * is true, the same instructions are applied to every active subscription on the
   * same profile and the response is the bulk-update result instead of the single
   * subscription.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.subscriptions.updateDeliveryInstructions(
   *     'id',
   *     { delivery_instructions: 'delivery_instructions' },
   *   );
   * ```
   */
  updateDeliveryInstructions(
    id: string,
    body: SubscriptionUpdateDeliveryInstructionsParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionUpdateDeliveryInstructionsResponse> {
    return this._client.put(path`/api/subscriptions/${id}/delivery-instructions`, { body, ...options });
  }

  /**
   * Change the billing frequency of a subscription
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.subscriptions.updateFrequency('id', {
   *     interval: 'DAY',
   *     interval_count: 20,
   *   });
   * ```
   */
  updateFrequency(
    id: string,
    body: SubscriptionUpdateFrequencyParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionUpdateFrequencyResponse> {
    return this._client.put(path`/api/subscriptions/${id}/frequency`, { body, ...options });
  }
}

export interface SubscriptionCreateResponse {
  /**
   * IDs of the created subscriptions
   */
  ids: Array<string>;
}

export interface SubscriptionRetrieveResponse {
  data: SubscriptionRetrieveResponse.Data;
}

export namespace SubscriptionRetrieveResponse {
  export interface Data {
    id: string;

    account_id: string;

    billing_interval: string;

    billing_interval_count: number;

    can_cancel: boolean;

    can_pause: boolean;

    can_reactivate: boolean;

    can_resume: boolean;

    can_retry_payment: boolean;

    currency_code: string;

    current_billing_cycle: number;

    delivery_interval: string;

    delivery_interval_count: number;

    delivery_slot_valid: boolean;

    discount_amount: number;

    frequency_label: string;

    has_shipping_discount: boolean;

    is_active: boolean;

    is_in_dunning: boolean;

    lines: Array<unknown>;

    number: string;

    profile_id: string;

    shipping_amount: number;

    status: 'ACTIVE' | 'PAUSED' | 'CANCELLED' | 'EXPIRED' | 'PAYMENT_FAILED';

    subtotal: number;

    tax_amount: number;

    total: number;

    total_revenue: number;

    cancellation_reason?: string | null;

    cancellation_reason_id?: string | null;

    cancelled_at?: string | null;

    created_at?: string | null;

    current_dunning_episode?: string | null;

    custom_attributes?: unknown | null;

    delivery_address?: Data.DeliveryAddress | null;

    delivery_day?: string | Data.UnionMember1;

    delivery_instructions?: string | null;

    delivery_slot?: string | Data.UnionMember1;

    delivery_slot_id?: string | null;

    discounts?: Array<Data.Discount>;

    entities?: string | Array<Data.UnionMember1>;

    entity_label?: string | null;

    last_order?: string | null;

    migration_source_ref?: string | null;

    next_billing_date?: string | null;

    next_delivery_date?: string | null;

    next_production_date?: string | null;

    note?: string | null;

    pause_reason?: string | null;

    paused_at?: string | null;

    payment_method_brand?: string | null;

    payment_method_last4?: string | null;

    profile?: string | Data.UnionMember1;

    shopify_contract_id?: number | null;

    shopify_origin_order_id?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface DeliveryAddress {
      address1?: string;

      address2?: string;

      city?: string;

      company?: string;

      country?: string;

      country_code?: string;

      first_name?: string;

      last_name?: string;

      phone?: string;

      province?: string;

      province_code?: string;

      zip?: string;
    }

    export interface UnionMember1 {
      id?: string;

      billing_day_name?: string | null;

      billing_day_of_week?: number | null;

      courier_lead_time_days?: number | null;

      created_at?: string | null;

      day_name?: string;

      day_of_week?: number;

      delivery_configuration_id?: string;

      is_active?: boolean;

      packing_day_name?: string | null;

      packing_day_of_week?: number | null;

      updated_at?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      created_at?: string | null;

      delivery_day_id?: string;

      end_time?: string;

      is_active?: boolean;

      is_all_day?: boolean;

      label?: string;

      position?: number;

      start_time?: string;

      updated_at?: string | null;
    }

    export interface Discount {
      id?: string;

      applied_at?: string | null;

      created_at?: string | null;

      currency_code?: string | null;

      discount_code?: string | null;

      discount_label?: string;

      exhausted_at?: string | null;

      is_active?: boolean;

      is_shipping_discount?: boolean;

      recurring_cycle_limit?: number | null;

      removed_at?: string | null;

      shopify_discount_id?: string;

      status?: 'ACTIVE' | 'EXHAUSTED' | 'REMOVED';

      target_type?: 'ORDER' | 'SHIPPING_LINE' | 'LINE_ITEM';

      title?: string;

      updated_at?: string | null;

      value?: number | null;

      value_type?: 'PERCENTAGE' | 'FIXED_AMOUNT' | (string & {});
    }

    export interface UnionMember1 {
      id?: string;

      account_id?: string;

      attributes?: string;

      created_at?: string | null;

      entity_type?: string;

      image_url?: string | null;

      is_active?: boolean;

      name?: string;

      profile_id?: string;

      updated_at?: string | null;

      wizard_id?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      address1?: string | null;

      address2?: string | null;

      city?: string | null;

      country?: string | null;

      created_at?: string | null;

      email?: string;

      email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      external_id?: string | null;

      first_name?: string | null;

      full_address?: string;

      full_name?: string;

      last_name?: string | null;

      phone_number?: string | null;

      postal_code?: string | null;

      region?: string | null;

      shopify_customer_id?: string | null;

      sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      timezone?: string | null;

      updated_at?: string | null;
    }
  }
}

export interface SubscriptionListResponse {
  data: Array<SubscriptionListResponse.Data>;

  meta: SubscriptionListResponse.Meta;
}

export namespace SubscriptionListResponse {
  export interface Data {
    id: string;

    account_id: string;

    billing_interval: string;

    billing_interval_count: number;

    can_cancel: boolean;

    can_pause: boolean;

    can_reactivate: boolean;

    can_resume: boolean;

    can_retry_payment: boolean;

    currency_code: string;

    current_billing_cycle: number;

    delivery_slot_valid: boolean;

    discount_amount: number;

    frequency_label: string;

    is_active: boolean;

    is_in_dunning: boolean;

    number: string;

    profile_id: string;

    status: 'ACTIVE' | 'PAUSED' | 'CANCELLED' | 'EXPIRED' | 'PAYMENT_FAILED';

    subtotal: number;

    total: number;

    cancellation_reason?: string | null;

    cancellation_reason_id?: string | null;

    cancelled_at?: string | null;

    created_at?: string | null;

    current_dunning_episode?: string | null;

    entities?: string | Array<Data.UnionMember1>;

    entity?: string | Data.UnionMember1;

    last_order?: Data.LastOrder | null;

    next_billing_date?: string | null;

    next_delivery_date?: string | null;

    next_production_date?: string | null;

    paused_at?: string | null;

    payment_method_brand?: string | null;

    payment_method_last4?: string | null;

    profile?: string | Data.UnionMember1;

    shopify_contract_id?: number | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface UnionMember1 {
      id?: string;

      account_id?: string;

      attributes?: string;

      created_at?: string | null;

      entity_type?: string;

      image_url?: string | null;

      is_active?: boolean;

      name?: string;

      profile_id?: string;

      updated_at?: string | null;

      wizard_id?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      account_id?: string;

      attributes?: string;

      created_at?: string | null;

      entity_type?: string;

      image_url?: string | null;

      is_active?: boolean;

      name?: string;

      profile_id?: string;

      updated_at?: string | null;

      wizard_id?: string | null;
    }

    export interface LastOrder {
      id?: string;

      account_id?: string;

      billing_date?: string | null;

      created_at?: string | null;

      currency_code?: string;

      delivery_date?: string | null;

      delivery_slot?: string | LastOrder.UnionMember1;

      discount_amount?: number;

      external_order_id?: string | null;

      external_order_number?: string | null;

      external_source?: string | null;

      fulfillment_status?: 'FULFILLED' | 'UNFULFILLED' | 'PARTIALLY_FULFILLED';

      is_checkout_order?: boolean;

      order_created_at?: string | null;

      order_type?: 'SUBSCRIPTION' | 'ONE_TIME' | 'UPSELL';

      production_date?: string | null;

      profile?: string | LastOrder.UnionMember1;

      profile_id?: string | null;

      shopify_order_id?: string;

      shopify_order_number?: string | null;

      status?: 'PENDING' | 'PAID' | 'PARTIALLY_REFUNDED' | 'REFUNDED' | 'CANCELLED';

      subscriptions?: string | Array<unknown>;

      subtotal?: number;

      total?: number;

      tracking_company?: string | null;

      tracking_number?: string | null;

      tracking_url?: string | null;

      updated_at?: string | null;
    }

    export namespace LastOrder {
      export interface UnionMember1 {
        id?: string;

        created_at?: string | null;

        delivery_day_id?: string;

        end_time?: string;

        is_active?: boolean;

        is_all_day?: boolean;

        label?: string;

        position?: number;

        start_time?: string;

        updated_at?: string | null;
      }

      export interface UnionMember1 {
        id?: string;

        address1?: string | null;

        address2?: string | null;

        city?: string | null;

        country?: string | null;

        created_at?: string | null;

        email?: string;

        email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

        external_id?: string | null;

        first_name?: string | null;

        full_address?: string;

        full_name?: string;

        last_name?: string | null;

        phone_number?: string | null;

        postal_code?: string | null;

        region?: string | null;

        shopify_customer_id?: string | null;

        sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

        timezone?: string | null;

        updated_at?: string | null;
      }
    }

    export interface UnionMember1 {
      id?: string;

      address1?: string | null;

      address2?: string | null;

      city?: string | null;

      country?: string | null;

      created_at?: string | null;

      email?: string;

      email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      external_id?: string | null;

      first_name?: string | null;

      full_address?: string;

      full_name?: string;

      last_name?: string | null;

      phone_number?: string | null;

      postal_code?: string | null;

      region?: string | null;

      shopify_customer_id?: string | null;

      sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      timezone?: string | null;

      updated_at?: string | null;
    }
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

export interface SubscriptionCancelResponse {
  data: SubscriptionCancelResponse.Data;
}

export namespace SubscriptionCancelResponse {
  export interface Data {
    id: string;

    account_id: string;

    billing_interval: string;

    billing_interval_count: number;

    can_cancel: boolean;

    can_pause: boolean;

    can_reactivate: boolean;

    can_resume: boolean;

    can_retry_payment: boolean;

    currency_code: string;

    current_billing_cycle: number;

    delivery_interval: string;

    delivery_interval_count: number;

    delivery_slot_valid: boolean;

    discount_amount: number;

    frequency_label: string;

    has_shipping_discount: boolean;

    is_active: boolean;

    is_in_dunning: boolean;

    lines: Array<unknown>;

    number: string;

    profile_id: string;

    shipping_amount: number;

    status: 'ACTIVE' | 'PAUSED' | 'CANCELLED' | 'EXPIRED' | 'PAYMENT_FAILED';

    subtotal: number;

    tax_amount: number;

    total: number;

    total_revenue: number;

    cancellation_reason?: string | null;

    cancellation_reason_id?: string | null;

    cancelled_at?: string | null;

    created_at?: string | null;

    current_dunning_episode?: string | null;

    custom_attributes?: unknown | null;

    delivery_address?: Data.DeliveryAddress | null;

    delivery_day?: string | Data.UnionMember1;

    delivery_instructions?: string | null;

    delivery_slot?: string | Data.UnionMember1;

    delivery_slot_id?: string | null;

    discounts?: Array<Data.Discount>;

    entities?: string | Array<Data.UnionMember1>;

    entity_label?: string | null;

    last_order?: string | null;

    migration_source_ref?: string | null;

    next_billing_date?: string | null;

    next_delivery_date?: string | null;

    next_production_date?: string | null;

    note?: string | null;

    pause_reason?: string | null;

    paused_at?: string | null;

    payment_method_brand?: string | null;

    payment_method_last4?: string | null;

    profile?: string | Data.UnionMember1;

    shopify_contract_id?: number | null;

    shopify_origin_order_id?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface DeliveryAddress {
      address1?: string;

      address2?: string;

      city?: string;

      company?: string;

      country?: string;

      country_code?: string;

      first_name?: string;

      last_name?: string;

      phone?: string;

      province?: string;

      province_code?: string;

      zip?: string;
    }

    export interface UnionMember1 {
      id?: string;

      billing_day_name?: string | null;

      billing_day_of_week?: number | null;

      courier_lead_time_days?: number | null;

      created_at?: string | null;

      day_name?: string;

      day_of_week?: number;

      delivery_configuration_id?: string;

      is_active?: boolean;

      packing_day_name?: string | null;

      packing_day_of_week?: number | null;

      updated_at?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      created_at?: string | null;

      delivery_day_id?: string;

      end_time?: string;

      is_active?: boolean;

      is_all_day?: boolean;

      label?: string;

      position?: number;

      start_time?: string;

      updated_at?: string | null;
    }

    export interface Discount {
      id?: string;

      applied_at?: string | null;

      created_at?: string | null;

      currency_code?: string | null;

      discount_code?: string | null;

      discount_label?: string;

      exhausted_at?: string | null;

      is_active?: boolean;

      is_shipping_discount?: boolean;

      recurring_cycle_limit?: number | null;

      removed_at?: string | null;

      shopify_discount_id?: string;

      status?: 'ACTIVE' | 'EXHAUSTED' | 'REMOVED';

      target_type?: 'ORDER' | 'SHIPPING_LINE' | 'LINE_ITEM';

      title?: string;

      updated_at?: string | null;

      value?: number | null;

      value_type?: 'PERCENTAGE' | 'FIXED_AMOUNT' | (string & {});
    }

    export interface UnionMember1 {
      id?: string;

      account_id?: string;

      attributes?: string;

      created_at?: string | null;

      entity_type?: string;

      image_url?: string | null;

      is_active?: boolean;

      name?: string;

      profile_id?: string;

      updated_at?: string | null;

      wizard_id?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      address1?: string | null;

      address2?: string | null;

      city?: string | null;

      country?: string | null;

      created_at?: string | null;

      email?: string;

      email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      external_id?: string | null;

      first_name?: string | null;

      full_address?: string;

      full_name?: string;

      last_name?: string | null;

      phone_number?: string | null;

      postal_code?: string | null;

      region?: string | null;

      shopify_customer_id?: string | null;

      sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      timezone?: string | null;

      updated_at?: string | null;
    }
  }
}

export interface SubscriptionGeneratePortalLinkResponse {
  /**
   * Admin-impersonation magic login link (records the dashboard user as the actor in
   * portal activity)
   */
  admin_portal_link: string;

  /**
   * ISO 8601 timestamp at which the generated links expire
   */
  expires_at: string;

  /**
   * Customer-facing magic login link to the subscription portal
   */
  portal_link: string;
}

export interface SubscriptionGetRescheduleOptionsResponse {
  dates: Array<SubscriptionGetRescheduleOptionsResponse.Date>;

  /**
   * "delivery" when the account has delivery enabled (use date + slot_id when
   * calling reschedule); "billing" when delivery is disabled (use billing_date
   * alone).
   */
  mode: 'delivery' | 'billing';
}

export namespace SubscriptionGetRescheduleOptionsResponse {
  export interface Date {
    /**
     * Delivery date (YYYY-MM-DD)
     */
    date: string;

    billing_date?: string;

    day_name?: string;

    formatted_date?: string;

    production_date?: string;

    slots?: Array<Date.Slot>;
  }

  export namespace Date {
    export interface Slot {
      id: string;

      is_all_day: boolean;

      label: string;
    }
  }
}

export interface SubscriptionPauseResponse {
  data: SubscriptionPauseResponse.Data;
}

export namespace SubscriptionPauseResponse {
  export interface Data {
    id: string;

    account_id: string;

    billing_interval: string;

    billing_interval_count: number;

    can_cancel: boolean;

    can_pause: boolean;

    can_reactivate: boolean;

    can_resume: boolean;

    can_retry_payment: boolean;

    currency_code: string;

    current_billing_cycle: number;

    delivery_interval: string;

    delivery_interval_count: number;

    delivery_slot_valid: boolean;

    discount_amount: number;

    frequency_label: string;

    has_shipping_discount: boolean;

    is_active: boolean;

    is_in_dunning: boolean;

    lines: Array<unknown>;

    number: string;

    profile_id: string;

    shipping_amount: number;

    status: 'ACTIVE' | 'PAUSED' | 'CANCELLED' | 'EXPIRED' | 'PAYMENT_FAILED';

    subtotal: number;

    tax_amount: number;

    total: number;

    total_revenue: number;

    cancellation_reason?: string | null;

    cancellation_reason_id?: string | null;

    cancelled_at?: string | null;

    created_at?: string | null;

    current_dunning_episode?: string | null;

    custom_attributes?: unknown | null;

    delivery_address?: Data.DeliveryAddress | null;

    delivery_day?: string | Data.UnionMember1;

    delivery_instructions?: string | null;

    delivery_slot?: string | Data.UnionMember1;

    delivery_slot_id?: string | null;

    discounts?: Array<Data.Discount>;

    entities?: string | Array<Data.UnionMember1>;

    entity_label?: string | null;

    last_order?: string | null;

    migration_source_ref?: string | null;

    next_billing_date?: string | null;

    next_delivery_date?: string | null;

    next_production_date?: string | null;

    note?: string | null;

    pause_reason?: string | null;

    paused_at?: string | null;

    payment_method_brand?: string | null;

    payment_method_last4?: string | null;

    profile?: string | Data.UnionMember1;

    shopify_contract_id?: number | null;

    shopify_origin_order_id?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface DeliveryAddress {
      address1?: string;

      address2?: string;

      city?: string;

      company?: string;

      country?: string;

      country_code?: string;

      first_name?: string;

      last_name?: string;

      phone?: string;

      province?: string;

      province_code?: string;

      zip?: string;
    }

    export interface UnionMember1 {
      id?: string;

      billing_day_name?: string | null;

      billing_day_of_week?: number | null;

      courier_lead_time_days?: number | null;

      created_at?: string | null;

      day_name?: string;

      day_of_week?: number;

      delivery_configuration_id?: string;

      is_active?: boolean;

      packing_day_name?: string | null;

      packing_day_of_week?: number | null;

      updated_at?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      created_at?: string | null;

      delivery_day_id?: string;

      end_time?: string;

      is_active?: boolean;

      is_all_day?: boolean;

      label?: string;

      position?: number;

      start_time?: string;

      updated_at?: string | null;
    }

    export interface Discount {
      id?: string;

      applied_at?: string | null;

      created_at?: string | null;

      currency_code?: string | null;

      discount_code?: string | null;

      discount_label?: string;

      exhausted_at?: string | null;

      is_active?: boolean;

      is_shipping_discount?: boolean;

      recurring_cycle_limit?: number | null;

      removed_at?: string | null;

      shopify_discount_id?: string;

      status?: 'ACTIVE' | 'EXHAUSTED' | 'REMOVED';

      target_type?: 'ORDER' | 'SHIPPING_LINE' | 'LINE_ITEM';

      title?: string;

      updated_at?: string | null;

      value?: number | null;

      value_type?: 'PERCENTAGE' | 'FIXED_AMOUNT' | (string & {});
    }

    export interface UnionMember1 {
      id?: string;

      account_id?: string;

      attributes?: string;

      created_at?: string | null;

      entity_type?: string;

      image_url?: string | null;

      is_active?: boolean;

      name?: string;

      profile_id?: string;

      updated_at?: string | null;

      wizard_id?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      address1?: string | null;

      address2?: string | null;

      city?: string | null;

      country?: string | null;

      created_at?: string | null;

      email?: string;

      email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      external_id?: string | null;

      first_name?: string | null;

      full_address?: string;

      full_name?: string;

      last_name?: string | null;

      phone_number?: string | null;

      postal_code?: string | null;

      region?: string | null;

      shopify_customer_id?: string | null;

      sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      timezone?: string | null;

      updated_at?: string | null;
    }
  }
}

export interface SubscriptionReactivateResponse {
  data: SubscriptionReactivateResponse.Data;
}

export namespace SubscriptionReactivateResponse {
  export interface Data {
    id: string;

    account_id: string;

    billing_interval: string;

    billing_interval_count: number;

    can_cancel: boolean;

    can_pause: boolean;

    can_reactivate: boolean;

    can_resume: boolean;

    can_retry_payment: boolean;

    currency_code: string;

    current_billing_cycle: number;

    delivery_interval: string;

    delivery_interval_count: number;

    delivery_slot_valid: boolean;

    discount_amount: number;

    frequency_label: string;

    has_shipping_discount: boolean;

    is_active: boolean;

    is_in_dunning: boolean;

    lines: Array<unknown>;

    number: string;

    profile_id: string;

    shipping_amount: number;

    status: 'ACTIVE' | 'PAUSED' | 'CANCELLED' | 'EXPIRED' | 'PAYMENT_FAILED';

    subtotal: number;

    tax_amount: number;

    total: number;

    total_revenue: number;

    cancellation_reason?: string | null;

    cancellation_reason_id?: string | null;

    cancelled_at?: string | null;

    created_at?: string | null;

    current_dunning_episode?: string | null;

    custom_attributes?: unknown | null;

    delivery_address?: Data.DeliveryAddress | null;

    delivery_day?: string | Data.UnionMember1;

    delivery_instructions?: string | null;

    delivery_slot?: string | Data.UnionMember1;

    delivery_slot_id?: string | null;

    discounts?: Array<Data.Discount>;

    entities?: string | Array<Data.UnionMember1>;

    entity_label?: string | null;

    last_order?: string | null;

    migration_source_ref?: string | null;

    next_billing_date?: string | null;

    next_delivery_date?: string | null;

    next_production_date?: string | null;

    note?: string | null;

    pause_reason?: string | null;

    paused_at?: string | null;

    payment_method_brand?: string | null;

    payment_method_last4?: string | null;

    profile?: string | Data.UnionMember1;

    shopify_contract_id?: number | null;

    shopify_origin_order_id?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface DeliveryAddress {
      address1?: string;

      address2?: string;

      city?: string;

      company?: string;

      country?: string;

      country_code?: string;

      first_name?: string;

      last_name?: string;

      phone?: string;

      province?: string;

      province_code?: string;

      zip?: string;
    }

    export interface UnionMember1 {
      id?: string;

      billing_day_name?: string | null;

      billing_day_of_week?: number | null;

      courier_lead_time_days?: number | null;

      created_at?: string | null;

      day_name?: string;

      day_of_week?: number;

      delivery_configuration_id?: string;

      is_active?: boolean;

      packing_day_name?: string | null;

      packing_day_of_week?: number | null;

      updated_at?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      created_at?: string | null;

      delivery_day_id?: string;

      end_time?: string;

      is_active?: boolean;

      is_all_day?: boolean;

      label?: string;

      position?: number;

      start_time?: string;

      updated_at?: string | null;
    }

    export interface Discount {
      id?: string;

      applied_at?: string | null;

      created_at?: string | null;

      currency_code?: string | null;

      discount_code?: string | null;

      discount_label?: string;

      exhausted_at?: string | null;

      is_active?: boolean;

      is_shipping_discount?: boolean;

      recurring_cycle_limit?: number | null;

      removed_at?: string | null;

      shopify_discount_id?: string;

      status?: 'ACTIVE' | 'EXHAUSTED' | 'REMOVED';

      target_type?: 'ORDER' | 'SHIPPING_LINE' | 'LINE_ITEM';

      title?: string;

      updated_at?: string | null;

      value?: number | null;

      value_type?: 'PERCENTAGE' | 'FIXED_AMOUNT' | (string & {});
    }

    export interface UnionMember1 {
      id?: string;

      account_id?: string;

      attributes?: string;

      created_at?: string | null;

      entity_type?: string;

      image_url?: string | null;

      is_active?: boolean;

      name?: string;

      profile_id?: string;

      updated_at?: string | null;

      wizard_id?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      address1?: string | null;

      address2?: string | null;

      city?: string | null;

      country?: string | null;

      created_at?: string | null;

      email?: string;

      email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      external_id?: string | null;

      first_name?: string | null;

      full_address?: string;

      full_name?: string;

      last_name?: string | null;

      phone_number?: string | null;

      postal_code?: string | null;

      region?: string | null;

      shopify_customer_id?: string | null;

      sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      timezone?: string | null;

      updated_at?: string | null;
    }
  }
}

export interface SubscriptionRescheduleResponse {
  data: SubscriptionRescheduleResponse.Data;
}

export namespace SubscriptionRescheduleResponse {
  export interface Data {
    id: string;

    account_id: string;

    billing_interval: string;

    billing_interval_count: number;

    can_cancel: boolean;

    can_pause: boolean;

    can_reactivate: boolean;

    can_resume: boolean;

    can_retry_payment: boolean;

    currency_code: string;

    current_billing_cycle: number;

    delivery_interval: string;

    delivery_interval_count: number;

    delivery_slot_valid: boolean;

    discount_amount: number;

    frequency_label: string;

    has_shipping_discount: boolean;

    is_active: boolean;

    is_in_dunning: boolean;

    lines: Array<unknown>;

    number: string;

    profile_id: string;

    shipping_amount: number;

    status: 'ACTIVE' | 'PAUSED' | 'CANCELLED' | 'EXPIRED' | 'PAYMENT_FAILED';

    subtotal: number;

    tax_amount: number;

    total: number;

    total_revenue: number;

    cancellation_reason?: string | null;

    cancellation_reason_id?: string | null;

    cancelled_at?: string | null;

    created_at?: string | null;

    current_dunning_episode?: string | null;

    custom_attributes?: unknown | null;

    delivery_address?: Data.DeliveryAddress | null;

    delivery_day?: string | Data.UnionMember1;

    delivery_instructions?: string | null;

    delivery_slot?: string | Data.UnionMember1;

    delivery_slot_id?: string | null;

    discounts?: Array<Data.Discount>;

    entities?: string | Array<Data.UnionMember1>;

    entity_label?: string | null;

    last_order?: string | null;

    migration_source_ref?: string | null;

    next_billing_date?: string | null;

    next_delivery_date?: string | null;

    next_production_date?: string | null;

    note?: string | null;

    pause_reason?: string | null;

    paused_at?: string | null;

    payment_method_brand?: string | null;

    payment_method_last4?: string | null;

    profile?: string | Data.UnionMember1;

    shopify_contract_id?: number | null;

    shopify_origin_order_id?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface DeliveryAddress {
      address1?: string;

      address2?: string;

      city?: string;

      company?: string;

      country?: string;

      country_code?: string;

      first_name?: string;

      last_name?: string;

      phone?: string;

      province?: string;

      province_code?: string;

      zip?: string;
    }

    export interface UnionMember1 {
      id?: string;

      billing_day_name?: string | null;

      billing_day_of_week?: number | null;

      courier_lead_time_days?: number | null;

      created_at?: string | null;

      day_name?: string;

      day_of_week?: number;

      delivery_configuration_id?: string;

      is_active?: boolean;

      packing_day_name?: string | null;

      packing_day_of_week?: number | null;

      updated_at?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      created_at?: string | null;

      delivery_day_id?: string;

      end_time?: string;

      is_active?: boolean;

      is_all_day?: boolean;

      label?: string;

      position?: number;

      start_time?: string;

      updated_at?: string | null;
    }

    export interface Discount {
      id?: string;

      applied_at?: string | null;

      created_at?: string | null;

      currency_code?: string | null;

      discount_code?: string | null;

      discount_label?: string;

      exhausted_at?: string | null;

      is_active?: boolean;

      is_shipping_discount?: boolean;

      recurring_cycle_limit?: number | null;

      removed_at?: string | null;

      shopify_discount_id?: string;

      status?: 'ACTIVE' | 'EXHAUSTED' | 'REMOVED';

      target_type?: 'ORDER' | 'SHIPPING_LINE' | 'LINE_ITEM';

      title?: string;

      updated_at?: string | null;

      value?: number | null;

      value_type?: 'PERCENTAGE' | 'FIXED_AMOUNT' | (string & {});
    }

    export interface UnionMember1 {
      id?: string;

      account_id?: string;

      attributes?: string;

      created_at?: string | null;

      entity_type?: string;

      image_url?: string | null;

      is_active?: boolean;

      name?: string;

      profile_id?: string;

      updated_at?: string | null;

      wizard_id?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      address1?: string | null;

      address2?: string | null;

      city?: string | null;

      country?: string | null;

      created_at?: string | null;

      email?: string;

      email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      external_id?: string | null;

      first_name?: string | null;

      full_address?: string;

      full_name?: string;

      last_name?: string | null;

      phone_number?: string | null;

      postal_code?: string | null;

      region?: string | null;

      shopify_customer_id?: string | null;

      sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      timezone?: string | null;

      updated_at?: string | null;
    }
  }
}

export interface SubscriptionResumeResponse {
  data: SubscriptionResumeResponse.Data;
}

export namespace SubscriptionResumeResponse {
  export interface Data {
    id: string;

    account_id: string;

    billing_interval: string;

    billing_interval_count: number;

    can_cancel: boolean;

    can_pause: boolean;

    can_reactivate: boolean;

    can_resume: boolean;

    can_retry_payment: boolean;

    currency_code: string;

    current_billing_cycle: number;

    delivery_interval: string;

    delivery_interval_count: number;

    delivery_slot_valid: boolean;

    discount_amount: number;

    frequency_label: string;

    has_shipping_discount: boolean;

    is_active: boolean;

    is_in_dunning: boolean;

    lines: Array<unknown>;

    number: string;

    profile_id: string;

    shipping_amount: number;

    status: 'ACTIVE' | 'PAUSED' | 'CANCELLED' | 'EXPIRED' | 'PAYMENT_FAILED';

    subtotal: number;

    tax_amount: number;

    total: number;

    total_revenue: number;

    cancellation_reason?: string | null;

    cancellation_reason_id?: string | null;

    cancelled_at?: string | null;

    created_at?: string | null;

    current_dunning_episode?: string | null;

    custom_attributes?: unknown | null;

    delivery_address?: Data.DeliveryAddress | null;

    delivery_day?: string | Data.UnionMember1;

    delivery_instructions?: string | null;

    delivery_slot?: string | Data.UnionMember1;

    delivery_slot_id?: string | null;

    discounts?: Array<Data.Discount>;

    entities?: string | Array<Data.UnionMember1>;

    entity_label?: string | null;

    last_order?: string | null;

    migration_source_ref?: string | null;

    next_billing_date?: string | null;

    next_delivery_date?: string | null;

    next_production_date?: string | null;

    note?: string | null;

    pause_reason?: string | null;

    paused_at?: string | null;

    payment_method_brand?: string | null;

    payment_method_last4?: string | null;

    profile?: string | Data.UnionMember1;

    shopify_contract_id?: number | null;

    shopify_origin_order_id?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface DeliveryAddress {
      address1?: string;

      address2?: string;

      city?: string;

      company?: string;

      country?: string;

      country_code?: string;

      first_name?: string;

      last_name?: string;

      phone?: string;

      province?: string;

      province_code?: string;

      zip?: string;
    }

    export interface UnionMember1 {
      id?: string;

      billing_day_name?: string | null;

      billing_day_of_week?: number | null;

      courier_lead_time_days?: number | null;

      created_at?: string | null;

      day_name?: string;

      day_of_week?: number;

      delivery_configuration_id?: string;

      is_active?: boolean;

      packing_day_name?: string | null;

      packing_day_of_week?: number | null;

      updated_at?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      created_at?: string | null;

      delivery_day_id?: string;

      end_time?: string;

      is_active?: boolean;

      is_all_day?: boolean;

      label?: string;

      position?: number;

      start_time?: string;

      updated_at?: string | null;
    }

    export interface Discount {
      id?: string;

      applied_at?: string | null;

      created_at?: string | null;

      currency_code?: string | null;

      discount_code?: string | null;

      discount_label?: string;

      exhausted_at?: string | null;

      is_active?: boolean;

      is_shipping_discount?: boolean;

      recurring_cycle_limit?: number | null;

      removed_at?: string | null;

      shopify_discount_id?: string;

      status?: 'ACTIVE' | 'EXHAUSTED' | 'REMOVED';

      target_type?: 'ORDER' | 'SHIPPING_LINE' | 'LINE_ITEM';

      title?: string;

      updated_at?: string | null;

      value?: number | null;

      value_type?: 'PERCENTAGE' | 'FIXED_AMOUNT' | (string & {});
    }

    export interface UnionMember1 {
      id?: string;

      account_id?: string;

      attributes?: string;

      created_at?: string | null;

      entity_type?: string;

      image_url?: string | null;

      is_active?: boolean;

      name?: string;

      profile_id?: string;

      updated_at?: string | null;

      wizard_id?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      address1?: string | null;

      address2?: string | null;

      city?: string | null;

      country?: string | null;

      created_at?: string | null;

      email?: string;

      email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      external_id?: string | null;

      first_name?: string | null;

      full_address?: string;

      full_name?: string;

      last_name?: string | null;

      phone_number?: string | null;

      postal_code?: string | null;

      region?: string | null;

      shopify_customer_id?: string | null;

      sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      timezone?: string | null;

      updated_at?: string | null;
    }
  }
}

export interface SubscriptionRetryPaymentResponse {
  message: string;

  success: boolean;
}

export interface SubscriptionShipNowResponse {
  message: string;

  success: boolean;
}

export interface SubscriptionSkipResponse {
  data: SubscriptionSkipResponse.Data;
}

export namespace SubscriptionSkipResponse {
  export interface Data {
    id: string;

    account_id: string;

    billing_interval: string;

    billing_interval_count: number;

    can_cancel: boolean;

    can_pause: boolean;

    can_reactivate: boolean;

    can_resume: boolean;

    can_retry_payment: boolean;

    currency_code: string;

    current_billing_cycle: number;

    delivery_interval: string;

    delivery_interval_count: number;

    delivery_slot_valid: boolean;

    discount_amount: number;

    frequency_label: string;

    has_shipping_discount: boolean;

    is_active: boolean;

    is_in_dunning: boolean;

    lines: Array<unknown>;

    number: string;

    profile_id: string;

    shipping_amount: number;

    status: 'ACTIVE' | 'PAUSED' | 'CANCELLED' | 'EXPIRED' | 'PAYMENT_FAILED';

    subtotal: number;

    tax_amount: number;

    total: number;

    total_revenue: number;

    cancellation_reason?: string | null;

    cancellation_reason_id?: string | null;

    cancelled_at?: string | null;

    created_at?: string | null;

    current_dunning_episode?: string | null;

    custom_attributes?: unknown | null;

    delivery_address?: Data.DeliveryAddress | null;

    delivery_day?: string | Data.UnionMember1;

    delivery_instructions?: string | null;

    delivery_slot?: string | Data.UnionMember1;

    delivery_slot_id?: string | null;

    discounts?: Array<Data.Discount>;

    entities?: string | Array<Data.UnionMember1>;

    entity_label?: string | null;

    last_order?: string | null;

    migration_source_ref?: string | null;

    next_billing_date?: string | null;

    next_delivery_date?: string | null;

    next_production_date?: string | null;

    note?: string | null;

    pause_reason?: string | null;

    paused_at?: string | null;

    payment_method_brand?: string | null;

    payment_method_last4?: string | null;

    profile?: string | Data.UnionMember1;

    shopify_contract_id?: number | null;

    shopify_origin_order_id?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface DeliveryAddress {
      address1?: string;

      address2?: string;

      city?: string;

      company?: string;

      country?: string;

      country_code?: string;

      first_name?: string;

      last_name?: string;

      phone?: string;

      province?: string;

      province_code?: string;

      zip?: string;
    }

    export interface UnionMember1 {
      id?: string;

      billing_day_name?: string | null;

      billing_day_of_week?: number | null;

      courier_lead_time_days?: number | null;

      created_at?: string | null;

      day_name?: string;

      day_of_week?: number;

      delivery_configuration_id?: string;

      is_active?: boolean;

      packing_day_name?: string | null;

      packing_day_of_week?: number | null;

      updated_at?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      created_at?: string | null;

      delivery_day_id?: string;

      end_time?: string;

      is_active?: boolean;

      is_all_day?: boolean;

      label?: string;

      position?: number;

      start_time?: string;

      updated_at?: string | null;
    }

    export interface Discount {
      id?: string;

      applied_at?: string | null;

      created_at?: string | null;

      currency_code?: string | null;

      discount_code?: string | null;

      discount_label?: string;

      exhausted_at?: string | null;

      is_active?: boolean;

      is_shipping_discount?: boolean;

      recurring_cycle_limit?: number | null;

      removed_at?: string | null;

      shopify_discount_id?: string;

      status?: 'ACTIVE' | 'EXHAUSTED' | 'REMOVED';

      target_type?: 'ORDER' | 'SHIPPING_LINE' | 'LINE_ITEM';

      title?: string;

      updated_at?: string | null;

      value?: number | null;

      value_type?: 'PERCENTAGE' | 'FIXED_AMOUNT' | (string & {});
    }

    export interface UnionMember1 {
      id?: string;

      account_id?: string;

      attributes?: string;

      created_at?: string | null;

      entity_type?: string;

      image_url?: string | null;

      is_active?: boolean;

      name?: string;

      profile_id?: string;

      updated_at?: string | null;

      wizard_id?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      address1?: string | null;

      address2?: string | null;

      city?: string | null;

      country?: string | null;

      created_at?: string | null;

      email?: string;

      email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      external_id?: string | null;

      first_name?: string | null;

      full_address?: string;

      full_name?: string;

      last_name?: string | null;

      phone_number?: string | null;

      postal_code?: string | null;

      region?: string | null;

      shopify_customer_id?: string | null;

      sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      timezone?: string | null;

      updated_at?: string | null;
    }
  }
}

export interface SubscriptionUpdateBillingDateResponse {
  data: SubscriptionUpdateBillingDateResponse.Data;
}

export namespace SubscriptionUpdateBillingDateResponse {
  export interface Data {
    id: string;

    account_id: string;

    billing_interval: string;

    billing_interval_count: number;

    can_cancel: boolean;

    can_pause: boolean;

    can_reactivate: boolean;

    can_resume: boolean;

    can_retry_payment: boolean;

    currency_code: string;

    current_billing_cycle: number;

    delivery_interval: string;

    delivery_interval_count: number;

    delivery_slot_valid: boolean;

    discount_amount: number;

    frequency_label: string;

    has_shipping_discount: boolean;

    is_active: boolean;

    is_in_dunning: boolean;

    lines: Array<unknown>;

    number: string;

    profile_id: string;

    shipping_amount: number;

    status: 'ACTIVE' | 'PAUSED' | 'CANCELLED' | 'EXPIRED' | 'PAYMENT_FAILED';

    subtotal: number;

    tax_amount: number;

    total: number;

    total_revenue: number;

    cancellation_reason?: string | null;

    cancellation_reason_id?: string | null;

    cancelled_at?: string | null;

    created_at?: string | null;

    current_dunning_episode?: string | null;

    custom_attributes?: unknown | null;

    delivery_address?: Data.DeliveryAddress | null;

    delivery_day?: string | Data.UnionMember1;

    delivery_instructions?: string | null;

    delivery_slot?: string | Data.UnionMember1;

    delivery_slot_id?: string | null;

    discounts?: Array<Data.Discount>;

    entities?: string | Array<Data.UnionMember1>;

    entity_label?: string | null;

    last_order?: string | null;

    migration_source_ref?: string | null;

    next_billing_date?: string | null;

    next_delivery_date?: string | null;

    next_production_date?: string | null;

    note?: string | null;

    pause_reason?: string | null;

    paused_at?: string | null;

    payment_method_brand?: string | null;

    payment_method_last4?: string | null;

    profile?: string | Data.UnionMember1;

    shopify_contract_id?: number | null;

    shopify_origin_order_id?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface DeliveryAddress {
      address1?: string;

      address2?: string;

      city?: string;

      company?: string;

      country?: string;

      country_code?: string;

      first_name?: string;

      last_name?: string;

      phone?: string;

      province?: string;

      province_code?: string;

      zip?: string;
    }

    export interface UnionMember1 {
      id?: string;

      billing_day_name?: string | null;

      billing_day_of_week?: number | null;

      courier_lead_time_days?: number | null;

      created_at?: string | null;

      day_name?: string;

      day_of_week?: number;

      delivery_configuration_id?: string;

      is_active?: boolean;

      packing_day_name?: string | null;

      packing_day_of_week?: number | null;

      updated_at?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      created_at?: string | null;

      delivery_day_id?: string;

      end_time?: string;

      is_active?: boolean;

      is_all_day?: boolean;

      label?: string;

      position?: number;

      start_time?: string;

      updated_at?: string | null;
    }

    export interface Discount {
      id?: string;

      applied_at?: string | null;

      created_at?: string | null;

      currency_code?: string | null;

      discount_code?: string | null;

      discount_label?: string;

      exhausted_at?: string | null;

      is_active?: boolean;

      is_shipping_discount?: boolean;

      recurring_cycle_limit?: number | null;

      removed_at?: string | null;

      shopify_discount_id?: string;

      status?: 'ACTIVE' | 'EXHAUSTED' | 'REMOVED';

      target_type?: 'ORDER' | 'SHIPPING_LINE' | 'LINE_ITEM';

      title?: string;

      updated_at?: string | null;

      value?: number | null;

      value_type?: 'PERCENTAGE' | 'FIXED_AMOUNT' | (string & {});
    }

    export interface UnionMember1 {
      id?: string;

      account_id?: string;

      attributes?: string;

      created_at?: string | null;

      entity_type?: string;

      image_url?: string | null;

      is_active?: boolean;

      name?: string;

      profile_id?: string;

      updated_at?: string | null;

      wizard_id?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      address1?: string | null;

      address2?: string | null;

      city?: string | null;

      country?: string | null;

      created_at?: string | null;

      email?: string;

      email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      external_id?: string | null;

      first_name?: string | null;

      full_address?: string;

      full_name?: string;

      last_name?: string | null;

      phone_number?: string | null;

      postal_code?: string | null;

      region?: string | null;

      shopify_customer_id?: string | null;

      sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      timezone?: string | null;

      updated_at?: string | null;
    }
  }
}

export interface SubscriptionUpdateDeliveryInstructionsResponse {
  data: SubscriptionUpdateDeliveryInstructionsResponse.Data;
}

export namespace SubscriptionUpdateDeliveryInstructionsResponse {
  export interface Data {
    id: string;

    account_id: string;

    billing_interval: string;

    billing_interval_count: number;

    can_cancel: boolean;

    can_pause: boolean;

    can_reactivate: boolean;

    can_resume: boolean;

    can_retry_payment: boolean;

    currency_code: string;

    current_billing_cycle: number;

    delivery_interval: string;

    delivery_interval_count: number;

    delivery_slot_valid: boolean;

    discount_amount: number;

    frequency_label: string;

    has_shipping_discount: boolean;

    is_active: boolean;

    is_in_dunning: boolean;

    lines: Array<unknown>;

    number: string;

    profile_id: string;

    shipping_amount: number;

    status: 'ACTIVE' | 'PAUSED' | 'CANCELLED' | 'EXPIRED' | 'PAYMENT_FAILED';

    subtotal: number;

    tax_amount: number;

    total: number;

    total_revenue: number;

    cancellation_reason?: string | null;

    cancellation_reason_id?: string | null;

    cancelled_at?: string | null;

    created_at?: string | null;

    current_dunning_episode?: string | null;

    custom_attributes?: unknown | null;

    delivery_address?: Data.DeliveryAddress | null;

    delivery_day?: string | Data.UnionMember1;

    delivery_instructions?: string | null;

    delivery_slot?: string | Data.UnionMember1;

    delivery_slot_id?: string | null;

    discounts?: Array<Data.Discount>;

    entities?: string | Array<Data.UnionMember1>;

    entity_label?: string | null;

    last_order?: string | null;

    migration_source_ref?: string | null;

    next_billing_date?: string | null;

    next_delivery_date?: string | null;

    next_production_date?: string | null;

    note?: string | null;

    pause_reason?: string | null;

    paused_at?: string | null;

    payment_method_brand?: string | null;

    payment_method_last4?: string | null;

    profile?: string | Data.UnionMember1;

    shopify_contract_id?: number | null;

    shopify_origin_order_id?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface DeliveryAddress {
      address1?: string;

      address2?: string;

      city?: string;

      company?: string;

      country?: string;

      country_code?: string;

      first_name?: string;

      last_name?: string;

      phone?: string;

      province?: string;

      province_code?: string;

      zip?: string;
    }

    export interface UnionMember1 {
      id?: string;

      billing_day_name?: string | null;

      billing_day_of_week?: number | null;

      courier_lead_time_days?: number | null;

      created_at?: string | null;

      day_name?: string;

      day_of_week?: number;

      delivery_configuration_id?: string;

      is_active?: boolean;

      packing_day_name?: string | null;

      packing_day_of_week?: number | null;

      updated_at?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      created_at?: string | null;

      delivery_day_id?: string;

      end_time?: string;

      is_active?: boolean;

      is_all_day?: boolean;

      label?: string;

      position?: number;

      start_time?: string;

      updated_at?: string | null;
    }

    export interface Discount {
      id?: string;

      applied_at?: string | null;

      created_at?: string | null;

      currency_code?: string | null;

      discount_code?: string | null;

      discount_label?: string;

      exhausted_at?: string | null;

      is_active?: boolean;

      is_shipping_discount?: boolean;

      recurring_cycle_limit?: number | null;

      removed_at?: string | null;

      shopify_discount_id?: string;

      status?: 'ACTIVE' | 'EXHAUSTED' | 'REMOVED';

      target_type?: 'ORDER' | 'SHIPPING_LINE' | 'LINE_ITEM';

      title?: string;

      updated_at?: string | null;

      value?: number | null;

      value_type?: 'PERCENTAGE' | 'FIXED_AMOUNT' | (string & {});
    }

    export interface UnionMember1 {
      id?: string;

      account_id?: string;

      attributes?: string;

      created_at?: string | null;

      entity_type?: string;

      image_url?: string | null;

      is_active?: boolean;

      name?: string;

      profile_id?: string;

      updated_at?: string | null;

      wizard_id?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      address1?: string | null;

      address2?: string | null;

      city?: string | null;

      country?: string | null;

      created_at?: string | null;

      email?: string;

      email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      external_id?: string | null;

      first_name?: string | null;

      full_address?: string;

      full_name?: string;

      last_name?: string | null;

      phone_number?: string | null;

      postal_code?: string | null;

      region?: string | null;

      shopify_customer_id?: string | null;

      sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      timezone?: string | null;

      updated_at?: string | null;
    }
  }
}

export interface SubscriptionUpdateFrequencyResponse {
  data: SubscriptionUpdateFrequencyResponse.Data;
}

export namespace SubscriptionUpdateFrequencyResponse {
  export interface Data {
    id: string;

    account_id: string;

    billing_interval: string;

    billing_interval_count: number;

    can_cancel: boolean;

    can_pause: boolean;

    can_reactivate: boolean;

    can_resume: boolean;

    can_retry_payment: boolean;

    currency_code: string;

    current_billing_cycle: number;

    delivery_interval: string;

    delivery_interval_count: number;

    delivery_slot_valid: boolean;

    discount_amount: number;

    frequency_label: string;

    has_shipping_discount: boolean;

    is_active: boolean;

    is_in_dunning: boolean;

    lines: Array<unknown>;

    number: string;

    profile_id: string;

    shipping_amount: number;

    status: 'ACTIVE' | 'PAUSED' | 'CANCELLED' | 'EXPIRED' | 'PAYMENT_FAILED';

    subtotal: number;

    tax_amount: number;

    total: number;

    total_revenue: number;

    cancellation_reason?: string | null;

    cancellation_reason_id?: string | null;

    cancelled_at?: string | null;

    created_at?: string | null;

    current_dunning_episode?: string | null;

    custom_attributes?: unknown | null;

    delivery_address?: Data.DeliveryAddress | null;

    delivery_day?: string | Data.UnionMember1;

    delivery_instructions?: string | null;

    delivery_slot?: string | Data.UnionMember1;

    delivery_slot_id?: string | null;

    discounts?: Array<Data.Discount>;

    entities?: string | Array<Data.UnionMember1>;

    entity_label?: string | null;

    last_order?: string | null;

    migration_source_ref?: string | null;

    next_billing_date?: string | null;

    next_delivery_date?: string | null;

    next_production_date?: string | null;

    note?: string | null;

    pause_reason?: string | null;

    paused_at?: string | null;

    payment_method_brand?: string | null;

    payment_method_last4?: string | null;

    profile?: string | Data.UnionMember1;

    shopify_contract_id?: number | null;

    shopify_origin_order_id?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface DeliveryAddress {
      address1?: string;

      address2?: string;

      city?: string;

      company?: string;

      country?: string;

      country_code?: string;

      first_name?: string;

      last_name?: string;

      phone?: string;

      province?: string;

      province_code?: string;

      zip?: string;
    }

    export interface UnionMember1 {
      id?: string;

      billing_day_name?: string | null;

      billing_day_of_week?: number | null;

      courier_lead_time_days?: number | null;

      created_at?: string | null;

      day_name?: string;

      day_of_week?: number;

      delivery_configuration_id?: string;

      is_active?: boolean;

      packing_day_name?: string | null;

      packing_day_of_week?: number | null;

      updated_at?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      created_at?: string | null;

      delivery_day_id?: string;

      end_time?: string;

      is_active?: boolean;

      is_all_day?: boolean;

      label?: string;

      position?: number;

      start_time?: string;

      updated_at?: string | null;
    }

    export interface Discount {
      id?: string;

      applied_at?: string | null;

      created_at?: string | null;

      currency_code?: string | null;

      discount_code?: string | null;

      discount_label?: string;

      exhausted_at?: string | null;

      is_active?: boolean;

      is_shipping_discount?: boolean;

      recurring_cycle_limit?: number | null;

      removed_at?: string | null;

      shopify_discount_id?: string;

      status?: 'ACTIVE' | 'EXHAUSTED' | 'REMOVED';

      target_type?: 'ORDER' | 'SHIPPING_LINE' | 'LINE_ITEM';

      title?: string;

      updated_at?: string | null;

      value?: number | null;

      value_type?: 'PERCENTAGE' | 'FIXED_AMOUNT' | (string & {});
    }

    export interface UnionMember1 {
      id?: string;

      account_id?: string;

      attributes?: string;

      created_at?: string | null;

      entity_type?: string;

      image_url?: string | null;

      is_active?: boolean;

      name?: string;

      profile_id?: string;

      updated_at?: string | null;

      wizard_id?: string | null;
    }

    export interface UnionMember1 {
      id?: string;

      address1?: string | null;

      address2?: string | null;

      city?: string | null;

      country?: string | null;

      created_at?: string | null;

      email?: string;

      email_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      external_id?: string | null;

      first_name?: string | null;

      full_address?: string;

      full_name?: string;

      last_name?: string | null;

      phone_number?: string | null;

      postal_code?: string | null;

      region?: string | null;

      shopify_customer_id?: string | null;

      sms_status?: 'subscribed' | 'unsubscribed' | 'suppressed' | (string & {});

      timezone?: string | null;

      updated_at?: string | null;
    }
  }
}

export interface SubscriptionCreateParams {
  lines: Array<SubscriptionCreateParams.Line>;

  next_delivery_date: string;

  profile_id: string;

  shopify_payment_method_id: string;

  delivery_address_id?: string | null;

  delivery_slot_id?: string | null;

  note?: string | null;
}

export namespace SubscriptionCreateParams {
  export interface Line {
    price: number;

    product_title: string;

    quantity: number;

    selling_plan_id: string;

    shopify_product_id: string;

    shopify_variant_id: string;

    selection_items?: Array<Line.SelectionItem> | null;

    sku?: string | null;

    subscription_variant_id?: string | null;

    variant_title?: string | null;
  }

  export namespace Line {
    export interface SelectionItem {
      price: number;

      product_title: string;

      quantity: number;

      shopify_product_id: string;

      shopify_variant_id: string;

      slot_id: string;

      variant_title?: string | null;
    }
  }
}

export interface SubscriptionListParams {
  cancellation_reason_id?: string;

  created_after?: string;

  created_before?: string;

  entity_id?: string;

  failed_payment?: boolean;

  limit?: number;

  next_billing_after?: string;

  next_billing_before?: string;

  next_delivery_after?: string;

  next_delivery_before?: string;

  next_production_after?: string;

  next_production_before?: string;

  page?: number;

  profile_id?: string;

  search?: string;

  shopify_contract_id?: string;

  sort_by?:
    | 'created_at'
    | 'next_billing_date'
    | 'next_delivery_date'
    | 'next_production_date'
    | 'total'
    | 'status';

  sort_order?: 'asc' | 'desc';

  status?: string;
}

export interface SubscriptionCancelParams {
  cancel_immediately?: boolean;

  reason?: string;
}

export interface SubscriptionPauseParams {
  reason?: string;
}

export interface SubscriptionRescheduleParams {
  billing_date?: string;

  delivery_date?: string;

  slot_id?: string;
}

export interface SubscriptionResumeParams {
  next_billing_date?: string;

  next_delivery_date?: string;

  slot_id?: string;
}

export interface SubscriptionShipNowParams {
  delivery_date?: string;

  production_date?: string;

  slot_id?: string;
}

export interface SubscriptionSkipParams {
  skip_weeks: number;

  reason?: string;
}

export interface SubscriptionUpdateBillingDateParams {
  next_billing_date: string;
}

export interface SubscriptionUpdateDeliveryInstructionsParams {
  delivery_instructions: string | null;

  update_all_active?: boolean;
}

export interface SubscriptionUpdateFrequencyParams {
  interval: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';

  interval_count: number;
}

Subscriptions.Entities = Entities;
Subscriptions.Orders = Orders;
Subscriptions.PaymentMethod = PaymentMethod;

export declare namespace Subscriptions {
  export {
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

  export {
    Entities as Entities,
    type EntityCreateResponse as EntityCreateResponse,
    type EntityRetrieveResponse as EntityRetrieveResponse,
    type EntityUpdateResponse as EntityUpdateResponse,
    type EntityListResponse as EntityListResponse,
    type EntityCreateParams as EntityCreateParams,
    type EntityUpdateParams as EntityUpdateParams,
    type EntityListParams as EntityListParams,
  };

  export {
    Orders as Orders,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderListResponse as OrderListResponse,
    type OrderListParams as OrderListParams,
  };

  export {
    PaymentMethod as PaymentMethod,
    type PaymentMethodRetrieveResponse as PaymentMethodRetrieveResponse,
    type PaymentMethodUpdateResponse as PaymentMethodUpdateResponse,
    type PaymentMethodListResponse as PaymentMethodListResponse,
    type PaymentMethodSendUpdateEmailResponse as PaymentMethodSendUpdateEmailResponse,
    type PaymentMethodUpdateParams as PaymentMethodUpdateParams,
  };
}
