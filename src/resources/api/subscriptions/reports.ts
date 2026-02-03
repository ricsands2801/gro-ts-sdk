// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Reports extends APIResource {
  /**
   * @example
   * ```ts
   * await client.api.subscriptions.reports.retrieveCancellationReasons();
   * ```
   */
  retrieveCancellationReasons(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/subscriptions/reports/cancellation-reasons', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.subscriptions.reports.retrieveGrowth();
   * ```
   */
  retrieveGrowth(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/subscriptions/reports/growth', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.subscriptions.reports.retrieveProductRevenue();
   * ```
   */
  retrieveProductRevenue(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/subscriptions/reports/product-revenue', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.subscriptions.reports.retrieveStats();
   * ```
   */
  retrieveStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/subscriptions/reports/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
