// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gro from 'gro-typescript';

const client = new Gro({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.subscriptions.orders.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.api.subscriptions.orders.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.subscriptions.orders.list(
        {
          billing_date_from: 'billing_date_from',
          billing_date_to: 'billing_date_to',
          delivery_date_from: 'delivery_date_from',
          delivery_date_to: 'delivery_date_to',
          entity_id: 'entity_id',
          fulfillment_status: 'UNFULFILLED',
          has_subscription: true,
          is_checkout_order: true,
          limit: 0,
          page: 0,
          production_date_from: 'production_date_from',
          production_date_to: 'production_date_to',
          profile_id: 'profile_id',
          search: 'search',
          sort_by: 'created_at',
          sort_order: 'asc',
          status: 'PENDING',
          subscription_id: 'subscription_id',
          tracking_number: 'tracking_number',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gro.NotFoundError);
  });
});
