// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gro from 'gro-typescript';

const client = new Gro({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource portal', () => {
  // Mock server tests are disabled
  test.skip('listSkipReasons: only required params', async () => {
    const responsePromise = client.api.public.portal.listSkipReasons({ shop: 'shop' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listSkipReasons: required and optional params', async () => {
    const response = await client.api.public.portal.listSkipReasons({ shop: 'shop' });
  });
});
