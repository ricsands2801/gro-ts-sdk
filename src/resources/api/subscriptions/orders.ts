// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Get an order
   *
   * @example
   * ```ts
   * const order =
   *   await client.api.subscriptions.orders.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<OrderRetrieveResponse> {
    return this._client.get(path`/api/subscriptions/orders/${id}`, options);
  }

  /**
   * List orders
   *
   * @example
   * ```ts
   * const orders = await client.api.subscriptions.orders.list();
   * ```
   */
  list(
    query: OrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderListResponse> {
    return this._client.get('/api/subscriptions/orders', { query, ...options });
  }
}

export interface OrderRetrieveResponse {
  data: OrderRetrieveResponse.Data;
}

export namespace OrderRetrieveResponse {
  export interface Data {
    id: string;

    account_id: string;

    currency_code: string;

    discount_amount: number;

    fulfillment_status: 'FULFILLED' | 'UNFULFILLED' | 'PARTIALLY_FULFILLED';

    is_checkout_order: boolean;

    order_type: 'SUBSCRIPTION' | 'ONE_TIME' | 'UPSELL';

    shopify_order_id: string;

    status: 'PENDING' | 'PAID' | 'PARTIALLY_REFUNDED' | 'REFUNDED' | 'CANCELLED';

    subtotal: number;

    total: number;

    billing_date?: string | null;

    created_at?: string | null;

    delivery_date?: string | null;

    delivery_slot?: string | Data.UnionMember1;

    external_order_id?: string | null;

    external_order_number?: string | null;

    external_source?: string | null;

    order_created_at?: string | null;

    production_date?: string | null;

    profile?: string | Data.UnionMember1;

    profile_id?: string | null;

    shopify_order_number?: string | null;

    subscriptions?: string | Array<unknown>;

    tracking_company?: string | null;

    tracking_number?: string | null;

    tracking_url?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
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
}

export interface OrderListResponse {
  data: Array<OrderListResponse.Data>;

  meta: OrderListResponse.Meta;
}

export namespace OrderListResponse {
  export interface Data {
    id: string;

    account_id: string;

    currency_code: string;

    discount_amount: number;

    fulfillment_status: 'FULFILLED' | 'UNFULFILLED' | 'PARTIALLY_FULFILLED';

    is_checkout_order: boolean;

    order_type: 'SUBSCRIPTION' | 'ONE_TIME' | 'UPSELL';

    shopify_order_id: string;

    status: 'PENDING' | 'PAID' | 'PARTIALLY_REFUNDED' | 'REFUNDED' | 'CANCELLED';

    subtotal: number;

    total: number;

    billing_date?: string | null;

    created_at?: string | null;

    delivery_date?: string | null;

    delivery_slot?: string | Data.UnionMember1;

    external_order_id?: string | null;

    external_order_number?: string | null;

    external_source?: string | null;

    order_created_at?: string | null;

    production_date?: string | null;

    profile?: string | Data.UnionMember1;

    profile_id?: string | null;

    shopify_order_number?: string | null;

    subscriptions?: string | Array<unknown>;

    tracking_company?: string | null;

    tracking_number?: string | null;

    tracking_url?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
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

export interface OrderListParams {
  billing_date_from?: string;

  billing_date_to?: string;

  delivery_date_from?: string;

  delivery_date_to?: string;

  entity_id?: string;

  fulfillment_status?: 'UNFULFILLED' | 'PARTIALLY_FULFILLED' | 'FULFILLED';

  has_subscription?: boolean;

  is_checkout_order?: boolean;

  limit?: number;

  page?: number;

  production_date_from?: string;

  production_date_to?: string;

  profile_id?: string;

  search?: string;

  sort_by?: 'created_at' | 'delivery_date' | 'billing_date' | 'total' | 'status';

  sort_order?: 'asc' | 'desc';

  status?: 'PENDING' | 'PAID' | 'PARTIALLY_REFUNDED' | 'REFUNDED' | 'CANCELLED';

  subscription_id?: string;

  tracking_number?: string;
}

export declare namespace Orders {
  export {
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderListResponse as OrderListResponse,
    type OrderListParams as OrderListParams,
  };
}
