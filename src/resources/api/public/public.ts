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

export class Public extends APIResource {
  delivery: DeliveryAPI.Delivery = new DeliveryAPI.Delivery(this._client);
}

Public.Delivery = Delivery;

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
}
