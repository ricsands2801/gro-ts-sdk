// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PaymentMethods extends APIResource {
  /**
   * Returns the payment methods on file in Shopify for the given profile,
   * independent of any subscription. Used by the create-subscription flow to show
   * payment methods for a customer who does not yet have a subscription.
   *
   * @example
   * ```ts
   * const paymentMethods =
   *   await client.api.subscriptions.paymentMethods.list(
   *     'profileId',
   *   );
   * ```
   */
  list(profileID: string, options?: RequestOptions): APIPromise<PaymentMethodListResponse> {
    return this._client.get(path`/api/subscriptions/payment-methods/by-profile/${profileID}`, options);
  }
}

export interface PaymentMethodListResponse {
  available: Array<PaymentMethodListResponse.Available>;

  /**
   * False when the profile has no linked Shopify customer (available will be empty)
   */
  has_shopify_customer: boolean;
}

export namespace PaymentMethodListResponse {
  export interface Available {
    id: string;

    brand: string;

    expiry_month: number;

    expiry_year: number;

    last_digits: string;
  }
}

export declare namespace PaymentMethods {
  export { type PaymentMethodListResponse as PaymentMethodListResponse };
}
