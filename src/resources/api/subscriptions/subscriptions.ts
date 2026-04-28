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

export class Subscriptions extends APIResource {
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
}

Subscriptions.Entities = Entities;

export declare namespace Subscriptions {
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
}
