// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PaymentMethod extends APIResource {
  /**
   * Returns the payment method currently attached to the subscription, plus any
   * other payment methods on file for the customer that could be switched to.
   *
   * @example
   * ```ts
   * const paymentMethod =
   *   await client.api.subscriptions.paymentMethod.retrieve(
   *     'id',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PaymentMethodRetrieveResponse> {
    return this._client.get(path`/api/subscriptions/${id}/payment-method`, options);
  }

  /**
   * Switches the subscription's payment method to one of the customer's existing
   * Shopify payment methods. The new payment method must already exist on the
   * customer in Shopify (use the `available` list returned by GET /payment-method).
   *
   * @example
   * ```ts
   * const paymentMethod =
   *   await client.api.subscriptions.paymentMethod.update(
   *     'id',
   *     { payment_method_id: 'payment_method_id' },
   *   );
   * ```
   */
  update(
    id: string,
    body: PaymentMethodUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PaymentMethodUpdateResponse> {
    return this._client.put(path`/api/subscriptions/${id}/payment-method`, { body, ...options });
  }

  /**
   * Sends the customer an email with a Shopify-hosted link to update the payment
   * method on this subscription. Uses Shopify's customerPaymentMethodSendUpdateEmail
   * mutation.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.subscriptions.paymentMethod.sendUpdateEmail(
   *     'id',
   *   );
   * ```
   */
  sendUpdateEmail(id: string, options?: RequestOptions): APIPromise<PaymentMethodSendUpdateEmailResponse> {
    return this._client.post(path`/api/subscriptions/${id}/payment-method/send-update-email`, options);
  }
}

export interface PaymentMethodRetrieveResponse {
  /**
   * Other payment methods on file for the customer
   */
  available: Array<PaymentMethodRetrieveResponse.Available>;

  /**
   * Current payment method on the subscription, or null if none is attached
   */
  current: PaymentMethodRetrieveResponse.Current | null;
}

export namespace PaymentMethodRetrieveResponse {
  export interface Available {
    id: string;

    brand: string;

    expiry_month: number;

    expiry_year: number;

    last_digits: string;
  }

  /**
   * Current payment method on the subscription, or null if none is attached
   */
  export interface Current {
    id: string;

    brand: string;

    expiry_month: number;

    expiry_year: number;

    last_digits: string;
  }
}

export interface PaymentMethodUpdateResponse {
  success: boolean;
}

export interface PaymentMethodSendUpdateEmailResponse {
  success: boolean;
}

export interface PaymentMethodUpdateParams {
  /**
   * ID of the customer's Shopify payment method to switch to
   */
  payment_method_id: string;
}

export declare namespace PaymentMethod {
  export {
    type PaymentMethodRetrieveResponse as PaymentMethodRetrieveResponse,
    type PaymentMethodUpdateResponse as PaymentMethodUpdateResponse,
    type PaymentMethodSendUpdateEmailResponse as PaymentMethodSendUpdateEmailResponse,
    type PaymentMethodUpdateParams as PaymentMethodUpdateParams,
  };
}
