// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gro from 'gro-typescript';

const client = new Gro({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.subscriptions.create({
      lines: [
        {
          price: 0,
          product_title: 'product_title',
          quantity: 1,
          selling_plan_id: 'selling_plan_id',
          shopify_product_id: 'shopify_product_id',
          shopify_variant_id: 'shopify_variant_id',
        },
      ],
      next_delivery_date: 'next_delivery_date',
      profile_id: 'profile_id',
      shopify_payment_method_id: 'shopify_payment_method_id',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.api.subscriptions.create({
      lines: [
        {
          price: 0,
          product_title: 'product_title',
          quantity: 1,
          selling_plan_id: 'selling_plan_id',
          shopify_product_id: 'shopify_product_id',
          shopify_variant_id: 'shopify_variant_id',
          selection_items: [
            {
              price: 0,
              product_title: 'product_title',
              quantity: 1,
              shopify_product_id: 'shopify_product_id',
              shopify_variant_id: 'shopify_variant_id',
              slot_id: 'slot_id',
              variant_title: 'variant_title',
            },
          ],
          sku: 'sku',
          subscription_variant_id: 'subscription_variant_id',
          variant_title: 'variant_title',
        },
      ],
      next_delivery_date: 'next_delivery_date',
      profile_id: 'profile_id',
      shopify_payment_method_id: 'shopify_payment_method_id',
      delivery_address_id: 'delivery_address_id',
      delivery_slot_id: 'delivery_slot_id',
      note: 'note',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.subscriptions.retrieve('id');
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
    const responsePromise = client.api.subscriptions.list();
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
      client.api.subscriptions.list(
        {
          cancellation_reason_id: 'cancellation_reason_id',
          created_after: 'created_after',
          created_before: 'created_before',
          entity_id: 'entity_id',
          failed_payment: true,
          limit: 0,
          next_billing_after: 'next_billing_after',
          next_billing_before: 'next_billing_before',
          next_delivery_after: 'next_delivery_after',
          next_delivery_before: 'next_delivery_before',
          next_production_after: 'next_production_after',
          next_production_before: 'next_production_before',
          page: 0,
          profile_id: 'profile_id',
          search: 'search',
          shopify_contract_id: 'shopify_contract_id',
          sort_by: 'created_at',
          sort_order: 'asc',
          status: 'status',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gro.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.api.subscriptions.cancel('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cancel: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.subscriptions.cancel(
        'id',
        { cancel_immediately: true, reason: 'reason' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gro.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('generatePortalLink', async () => {
    const responsePromise = client.api.subscriptions.generatePortalLink('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getRescheduleOptions', async () => {
    const responsePromise = client.api.subscriptions.getRescheduleOptions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('pause', async () => {
    const responsePromise = client.api.subscriptions.pause('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('pause: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.subscriptions.pause('id', { reason: 'reason' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gro.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('reactivate', async () => {
    const responsePromise = client.api.subscriptions.reactivate('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('reschedule', async () => {
    const responsePromise = client.api.subscriptions.reschedule('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('reschedule: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.subscriptions.reschedule(
        'id',
        {
          billing_date: 'billing_date',
          delivery_date: 'delivery_date',
          slot_id: 'slot_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gro.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('resume', async () => {
    const responsePromise = client.api.subscriptions.resume('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resume: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.subscriptions.resume(
        'id',
        {
          next_billing_date: 'next_billing_date',
          next_delivery_date: 'next_delivery_date',
          slot_id: 'slot_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gro.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retryPayment', async () => {
    const responsePromise = client.api.subscriptions.retryPayment('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('shipNow', async () => {
    const responsePromise = client.api.subscriptions.shipNow('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('shipNow: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.subscriptions.shipNow(
        'id',
        {
          delivery_date: 'delivery_date',
          production_date: 'production_date',
          slot_id: 'slot_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gro.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('skip: only required params', async () => {
    const responsePromise = client.api.subscriptions.skip('id', { skip_weeks: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('skip: required and optional params', async () => {
    const response = await client.api.subscriptions.skip('id', { skip_weeks: 0, reason: 'reason' });
  });

  // Mock server tests are disabled
  test.skip('updateBillingDate: only required params', async () => {
    const responsePromise = client.api.subscriptions.updateBillingDate('id', {
      next_billing_date: 'next_billing_date',
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
  test.skip('updateBillingDate: required and optional params', async () => {
    const response = await client.api.subscriptions.updateBillingDate('id', {
      next_billing_date: 'next_billing_date',
    });
  });

  // Mock server tests are disabled
  test.skip('updateDeliveryInstructions: only required params', async () => {
    const responsePromise = client.api.subscriptions.updateDeliveryInstructions('id', {
      delivery_instructions: 'delivery_instructions',
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
  test.skip('updateDeliveryInstructions: required and optional params', async () => {
    const response = await client.api.subscriptions.updateDeliveryInstructions('id', {
      delivery_instructions: 'delivery_instructions',
      update_all_active: true,
    });
  });

  // Mock server tests are disabled
  test.skip('updateFrequency: only required params', async () => {
    const responsePromise = client.api.subscriptions.updateFrequency('id', {
      interval: 'DAY',
      interval_count: 20,
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
  test.skip('updateFrequency: required and optional params', async () => {
    const response = await client.api.subscriptions.updateFrequency('id', {
      interval: 'DAY',
      interval_count: 20,
    });
  });
});
