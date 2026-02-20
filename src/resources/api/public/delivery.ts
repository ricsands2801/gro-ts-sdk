// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Delivery extends APIResource {
  /**
   * Get delivery options for an account
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.public.delivery.getOptions({
   *     shop: 'shop',
   *   });
   * ```
   */
  getOptions(
    query: DeliveryGetOptionsParams,
    options?: RequestOptions,
  ): APIPromise<DeliveryGetOptionsResponse> {
    return this._client.get('/api/public/delivery/options', { query, ...options });
  }

  /**
   * List delivery countries
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.public.delivery.listCountries();
   * ```
   */
  listCountries(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/api/public/delivery/countries', options);
  }

  /**
   * Lookup delivery options for a location
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.public.delivery.lookupOptions({
   *     country_code: 'country_code',
   *     shop: 'shop',
   *   });
   * ```
   */
  lookupOptions(
    query: DeliveryLookupOptionsParams,
    options?: RequestOptions,
  ): APIPromise<DeliveryLookupOptionsResponse> {
    return this._client.get('/api/public/delivery/lookup', { query, ...options });
  }

  /**
   * Validate a delivery selection
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.public.delivery.validateSelection({
   *     country_code: 'country_code',
   *     delivery_date: 'delivery_date',
   *     shop: 'shop',
   *     slot_id: 'slot_id',
   *   });
   * ```
   */
  validateSelection(params: DeliveryValidateSelectionParams, options?: RequestOptions): APIPromise<unknown> {
    const { country_code, delivery_date, shop, slot_id, postcode, state_code } = params;
    return this._client.post('/api/public/delivery/validate', {
      query: { country_code, delivery_date, shop, slot_id, postcode, state_code },
      ...options,
    });
  }
}

export interface DeliveryGetOptionsResponse {
  available: boolean;

  countries: Array<DeliveryGetOptionsResponse.Country>;

  delivery_enabled: boolean;

  uses_postcodes: boolean;

  uses_states: boolean;
}

export namespace DeliveryGetOptionsResponse {
  export interface Country {
    code?: string;

    name?: string;

    states?: Array<Country.State>;
  }

  export namespace Country {
    export interface State {
      code?: string;

      name?: string;
    }
  }
}

export type DeliveryListCountriesResponse = unknown;

export interface DeliveryLookupOptionsResponse {
  available: boolean;

  configuration_id?: string;

  courier_lead_time_days?: number;

  dates?: Array<DeliveryLookupOptionsResponse.Date>;

  location_label?: string;

  /**
   * Message when delivery is not available
   */
  message?: string;

  /**
   * Whether postcode is required
   */
  requires_postcode?: boolean;
}

export namespace DeliveryLookupOptionsResponse {
  export interface Date {
    date: string;

    day_name: string;

    day_of_week: number;

    formatted_date: string;

    slots: Array<Date.Slot>;
  }

  export namespace Date {
    export interface Slot {
      id: string;

      available: boolean;

      end_time: string;

      is_all_day: boolean;

      label: string;

      start_time: string;
    }
  }
}

export type DeliveryValidateSelectionResponse = unknown;

export interface DeliveryGetOptionsParams {
  /**
   * Shopify shop domain
   */
  shop: string;
}

export interface DeliveryLookupOptionsParams {
  country_code: string;

  shop: string;

  postcode?: string;

  state_code?: string;

  timezone?: string;
}

export interface DeliveryValidateSelectionParams {
  country_code: string;

  delivery_date: string;

  shop: string;

  slot_id: string;

  postcode?: string;

  state_code?: string;
}

export declare namespace Delivery {
  export {
    type DeliveryGetOptionsResponse as DeliveryGetOptionsResponse,
    type DeliveryListCountriesResponse as DeliveryListCountriesResponse,
    type DeliveryLookupOptionsResponse as DeliveryLookupOptionsResponse,
    type DeliveryValidateSelectionResponse as DeliveryValidateSelectionResponse,
    type DeliveryGetOptionsParams as DeliveryGetOptionsParams,
    type DeliveryLookupOptionsParams as DeliveryLookupOptionsParams,
    type DeliveryValidateSelectionParams as DeliveryValidateSelectionParams,
  };
}
