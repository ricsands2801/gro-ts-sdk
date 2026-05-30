// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gro from 'gro-typescript';

const client = new Gro({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource api', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listActivityLogs: only required params', async () => {
    const responsePromise = client.api.listActivityLogs({ end_date: 'end_date', start_date: 'start_date' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listActivityLogs: required and optional params', async () => {
    const response = await client.api.listActivityLogs({
      end_date: 'end_date',
      start_date: 'start_date',
      action: 'action',
      actor_name: 'actor_name',
      actor_type: 'customer',
      limit: 0,
      order_id: 'order_id',
      page: 0,
      subscription_id: 'subscription_id',
    });
  });

  // Mock server tests are disabled
  test.skip('logCustomAction: only required params', async () => {
    const responsePromise = client.api.logCustomAction({
      action: 'x',
      loggable_id: 'loggable_id',
      loggable_type: 'order',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('logCustomAction: required and optional params', async () => {
    const response = await client.api.logCustomAction({
      action: 'x',
      loggable_id: 'loggable_id',
      loggable_type: 'order',
      description: 'description',
      metadata: { foo: 'bar' },
    });
  });
});
