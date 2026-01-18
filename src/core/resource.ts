// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Gro } from '../client';

export abstract class APIResource {
  protected _client: Gro;

  constructor(client: Gro) {
    this._client = client;
  }
}
