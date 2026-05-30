// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Portal extends APIResource {
  /**
   * Public, shop-authenticated endpoint used by the customer portal to render the
   * skip-reason picker.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.public.portal.listSkipReasons({
   *     shop: 'shop',
   *   });
   * ```
   */
  listSkipReasons(
    query: PortalListSkipReasonsParams,
    options?: RequestOptions,
  ): APIPromise<PortalListSkipReasonsResponse> {
    return this._client.get('/api/public/portal/skip-reasons', { query, ...options });
  }
}

export type PortalListSkipReasonsResponse =
  Array<PortalListSkipReasonsResponse.PortalListSkipReasonsResponseItem>;

export namespace PortalListSkipReasonsResponse {
  export interface PortalListSkipReasonsResponseItem {
    data: PortalListSkipReasonsResponseItem.Data;
  }

  export namespace PortalListSkipReasonsResponseItem {
    export interface Data {
      id: string;

      account_id: string;

      is_active: boolean;

      label: string;

      position: number;

      created_at?: string | null;

      description?: string | null;

      updated_at?: string | null;
    }
  }
}

export interface PortalListSkipReasonsParams {
  /**
   * Shopify shop domain (myshopify.com)
   */
  shop: string;
}

export declare namespace Portal {
  export {
    type PortalListSkipReasonsResponse as PortalListSkipReasonsResponse,
    type PortalListSkipReasonsParams as PortalListSkipReasonsParams,
  };
}
