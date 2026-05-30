// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DeliveryAPI from './delivery';
import {
  Delivery,
  DeliveryGetNextAvailableParams,
  DeliveryGetNextAvailableResponse,
  DeliveryGetOptionsParams,
  DeliveryGetOptionsResponse,
  DeliveryListCountriesResponse,
  DeliveryLookupOptionsParams,
  DeliveryLookupOptionsResponse,
  DeliveryValidateSelectionParams,
  DeliveryValidateSelectionResponse,
} from './delivery';
import * as PortalAPI from './portal';
import { Portal, PortalListSkipReasonsParams, PortalListSkipReasonsResponse } from './portal';

export class Public extends APIResource {
  delivery: DeliveryAPI.Delivery = new DeliveryAPI.Delivery(this._client);
  portal: PortalAPI.Portal = new PortalAPI.Portal(this._client);
}

Public.Delivery = Delivery;
Public.Portal = Portal;

export declare namespace Public {
  export {
    Delivery as Delivery,
    type DeliveryGetNextAvailableResponse as DeliveryGetNextAvailableResponse,
    type DeliveryGetOptionsResponse as DeliveryGetOptionsResponse,
    type DeliveryListCountriesResponse as DeliveryListCountriesResponse,
    type DeliveryLookupOptionsResponse as DeliveryLookupOptionsResponse,
    type DeliveryValidateSelectionResponse as DeliveryValidateSelectionResponse,
    type DeliveryGetNextAvailableParams as DeliveryGetNextAvailableParams,
    type DeliveryGetOptionsParams as DeliveryGetOptionsParams,
    type DeliveryLookupOptionsParams as DeliveryLookupOptionsParams,
    type DeliveryValidateSelectionParams as DeliveryValidateSelectionParams,
  };

  export {
    Portal as Portal,
    type PortalListSkipReasonsResponse as PortalListSkipReasonsResponse,
    type PortalListSkipReasonsParams as PortalListSkipReasonsParams,
  };
}
