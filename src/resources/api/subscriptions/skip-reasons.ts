// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SkipReasons extends APIResource {
  /**
   * Creates a new skip reason for the current account. When at least one skip reason
   * is active, customers must pick one when skipping.
   *
   * @example
   * ```ts
   * const skipReason =
   *   await client.api.subscriptions.skipReasons.create({
   *     label: 'x',
   *   });
   * ```
   */
  create(body: SkipReasonCreateParams, options?: RequestOptions): APIPromise<SkipReasonCreateResponse> {
    return this._client.post('/api/subscriptions/skip-reasons', { body, ...options });
  }

  /**
   * Returns a single skip reason by id.
   *
   * @example
   * ```ts
   * const skipReason =
   *   await client.api.subscriptions.skipReasons.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SkipReasonRetrieveResponse> {
    return this._client.get(path`/api/subscriptions/skip-reasons/${id}`, options);
  }

  /**
   * Updates label, description, active state, or position of an existing skip
   * reason.
   *
   * @example
   * ```ts
   * const skipReason =
   *   await client.api.subscriptions.skipReasons.update('id');
   * ```
   */
  update(
    id: string,
    body: SkipReasonUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SkipReasonUpdateResponse> {
    return this._client.put(path`/api/subscriptions/skip-reasons/${id}`, { body, ...options });
  }

  /**
   * Returns all skip reasons configured for the current account, ordered by
   * position.
   *
   * @example
   * ```ts
   * const skipReasons =
   *   await client.api.subscriptions.skipReasons.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SkipReasonListResponse> {
    return this._client.get('/api/subscriptions/skip-reasons', options);
  }

  /**
   * Soft-deletes a skip reason. Already-recorded skips keep their snapshotted label.
   *
   * @example
   * ```ts
   * await client.api.subscriptions.skipReasons.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/subscriptions/skip-reasons/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Reorders the customer-facing list of skip reasons by passing the full ordered
   * list of ids.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.subscriptions.skipReasons.reorder({
   *     ordered_ids: ['string'],
   *   });
   * ```
   */
  reorder(body: SkipReasonReorderParams, options?: RequestOptions): APIPromise<SkipReasonReorderResponse> {
    return this._client.post('/api/subscriptions/skip-reasons/reorder', { body, ...options });
  }
}

export interface SkipReasonCreateResponse {
  data: SkipReasonCreateResponse.Data;
}

export namespace SkipReasonCreateResponse {
  export interface Data {
    id: string;

    account_id: string;

    is_active: boolean;

    label: string;

    position: number;

    created_at?: string | null;

    description?: string | null;

    playbook?: Data.Playbook | null;

    playbook_id?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface Playbook {
      id?: string;

      name?: string;

      status?: 'draft' | 'active' | 'paused' | 'archived';
    }
  }
}

export interface SkipReasonRetrieveResponse {
  data: SkipReasonRetrieveResponse.Data;
}

export namespace SkipReasonRetrieveResponse {
  export interface Data {
    id: string;

    account_id: string;

    is_active: boolean;

    label: string;

    position: number;

    created_at?: string | null;

    description?: string | null;

    playbook?: Data.Playbook | null;

    playbook_id?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface Playbook {
      id?: string;

      name?: string;

      status?: 'draft' | 'active' | 'paused' | 'archived';
    }
  }
}

export interface SkipReasonUpdateResponse {
  data: SkipReasonUpdateResponse.Data;
}

export namespace SkipReasonUpdateResponse {
  export interface Data {
    id: string;

    account_id: string;

    is_active: boolean;

    label: string;

    position: number;

    created_at?: string | null;

    description?: string | null;

    playbook?: Data.Playbook | null;

    playbook_id?: string | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface Playbook {
      id?: string;

      name?: string;

      status?: 'draft' | 'active' | 'paused' | 'archived';
    }
  }
}

export type SkipReasonListResponse = Array<SkipReasonListResponse.SkipReasonListResponseItem>;

export namespace SkipReasonListResponse {
  export interface SkipReasonListResponseItem {
    data: SkipReasonListResponseItem.Data;
  }

  export namespace SkipReasonListResponseItem {
    export interface Data {
      id: string;

      account_id: string;

      is_active: boolean;

      label: string;

      position: number;

      created_at?: string | null;

      description?: string | null;

      playbook?: Data.Playbook | null;

      playbook_id?: string | null;

      updated_at?: string | null;
    }

    export namespace Data {
      export interface Playbook {
        id?: string;

        name?: string;

        status?: 'draft' | 'active' | 'paused' | 'archived';
      }
    }
  }
}

export interface SkipReasonReorderResponse {
  success?: boolean;
}

export interface SkipReasonCreateParams {
  label: string;

  description?: string | null;

  is_active?: boolean;

  playbook_id?: string | null;

  position?: number;
}

export interface SkipReasonUpdateParams {
  description?: string | null;

  is_active?: boolean;

  label?: string;

  playbook_id?: string | null;

  position?: number;
}

export interface SkipReasonReorderParams {
  ordered_ids: Array<string>;
}

export declare namespace SkipReasons {
  export {
    type SkipReasonCreateResponse as SkipReasonCreateResponse,
    type SkipReasonRetrieveResponse as SkipReasonRetrieveResponse,
    type SkipReasonUpdateResponse as SkipReasonUpdateResponse,
    type SkipReasonListResponse as SkipReasonListResponse,
    type SkipReasonReorderResponse as SkipReasonReorderResponse,
    type SkipReasonCreateParams as SkipReasonCreateParams,
    type SkipReasonUpdateParams as SkipReasonUpdateParams,
    type SkipReasonReorderParams as SkipReasonReorderParams,
  };
}
