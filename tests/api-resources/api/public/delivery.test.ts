// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gro from 'gro-typescript';

const client = new Gro({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource delivery', () => {
  // Mock server tests are disabled
  test.skip('getOptions: only required params', async () => {
    const responsePromise = client.api.public.delivery.getOptions({ shop: 'shop' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getOptions: required and optional params', async () => {
    const response = await client.api.public.delivery.getOptions({ shop: 'shop' });
  });

  // Mock server tests are disabled
  test.skip('listCountries', async () => {
    const responsePromise = client.api.public.delivery.listCountries();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('lookupOptions: only required params', async () => {
    const responsePromise = client.api.public.delivery.lookupOptions({
      country_code: 'country_code',
      shop: 'shop',
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
  test.skip('lookupOptions: required and optional params', async () => {
    const response = await client.api.public.delivery.lookupOptions({
      country_code: 'country_code',
      shop: 'shop',
      postcode: 'postcode',
      state_code: 'state_code',
      timezone: 'timezone',
    });
  });

  // Mock server tests are disabled
  test.skip('validateSelection: only required params', async () => {
    const responsePromise = client.api.public.delivery.validateSelection({
      country_code: 'country_code',
      delivery_date: 'delivery_date',
      shop: 'shop',
      slot_id: 'slot_id',
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
  test.skip('validateSelection: required and optional params', async () => {
    const response = await client.api.public.delivery.validateSelection({
      country_code: 'country_code',
      delivery_date: 'delivery_date',
      shop: 'shop',
      slot_id: 'slot_id',
      postcode: 'postcode',
      state_code: 'state_code',
    });
  });
});
