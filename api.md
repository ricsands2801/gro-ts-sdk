# API

Types:

- <code><a href="./src/resources/api/api.ts">APIRetrieveResponse</a></code>
- <code><a href="./src/resources/api/api.ts">APILogCustomActionResponse</a></code>

Methods:

- <code title="get /api">client.api.<a href="./src/resources/api/api.ts">retrieve</a>() -> string</code>
- <code title="post /api/activity-logs">client.api.<a href="./src/resources/api/api.ts">logCustomAction</a>({ ...params }) -> APILogCustomActionResponse</code>

## Profiles

Types:

- <code><a href="./src/resources/api/profiles.ts">ProfileCreateResponse</a></code>
- <code><a href="./src/resources/api/profiles.ts">ProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/api/profiles.ts">ProfileUpdateResponse</a></code>
- <code><a href="./src/resources/api/profiles.ts">ProfileListResponse</a></code>
- <code><a href="./src/resources/api/profiles.ts">ProfileBulkUploadResponse</a></code>

Methods:

- <code title="post /api/profiles">client.api.profiles.<a href="./src/resources/api/profiles.ts">create</a>({ ...params }) -> ProfileCreateResponse</code>
- <code title="get /api/profiles/{id}">client.api.profiles.<a href="./src/resources/api/profiles.ts">retrieve</a>(id) -> ProfileRetrieveResponse</code>
- <code title="put /api/profiles/{id}">client.api.profiles.<a href="./src/resources/api/profiles.ts">update</a>(id, { ...params }) -> ProfileUpdateResponse</code>
- <code title="get /api/profiles">client.api.profiles.<a href="./src/resources/api/profiles.ts">list</a>({ ...params }) -> ProfileListResponse</code>
- <code title="delete /api/profiles/{id}">client.api.profiles.<a href="./src/resources/api/profiles.ts">delete</a>(id) -> void</code>
- <code title="get /api/profiles/{id}/activity">client.api.profiles.<a href="./src/resources/api/profiles.ts">activity</a>(id) -> void</code>
- <code title="post /api/profiles/bulk-upload">client.api.profiles.<a href="./src/resources/api/profiles.ts">bulkUpload</a>() -> ProfileBulkUploadResponse</code>

## Subscriptions

Types:

- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionRetrieveResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionCancelResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionGeneratePortalLinkResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionGetRescheduleOptionsResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionPauseResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionReactivateResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionRescheduleResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionResumeResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionRetryPaymentResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionShipNowResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionSkipResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionUpdateBillingDateResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionUpdateDeliveryInstructionsResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/subscriptions.ts">SubscriptionUpdateFrequencyResponse</a></code>

Methods:

- <code title="post /api/subscriptions">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="get /api/subscriptions/{id}">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">retrieve</a>(id) -> SubscriptionRetrieveResponse</code>
- <code title="get /api/subscriptions">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="post /api/subscriptions/{id}/cancel">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">cancel</a>(id, { ...params }) -> SubscriptionCancelResponse</code>
- <code title="post /api/subscriptions/{id}/portal-link">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">generatePortalLink</a>(id) -> SubscriptionGeneratePortalLinkResponse</code>
- <code title="get /api/subscriptions/{id}/reschedule-options">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">getRescheduleOptions</a>(id) -> SubscriptionGetRescheduleOptionsResponse</code>
- <code title="post /api/subscriptions/{id}/pause">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">pause</a>(id, { ...params }) -> SubscriptionPauseResponse</code>
- <code title="post /api/subscriptions/{id}/reactivate">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">reactivate</a>(id) -> SubscriptionReactivateResponse</code>
- <code title="post /api/subscriptions/{id}/reschedule">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">reschedule</a>(id, { ...params }) -> SubscriptionRescheduleResponse</code>
- <code title="post /api/subscriptions/{id}/resume">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">resume</a>(id, { ...params }) -> SubscriptionResumeResponse</code>
- <code title="post /api/subscriptions/{id}/retry-payment">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">retryPayment</a>(id) -> SubscriptionRetryPaymentResponse</code>
- <code title="post /api/subscriptions/{id}/ship-now">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">shipNow</a>(id, { ...params }) -> SubscriptionShipNowResponse</code>
- <code title="post /api/subscriptions/{id}/skip">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">skip</a>(id, { ...params }) -> SubscriptionSkipResponse</code>
- <code title="put /api/subscriptions/{id}/billing-date">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">updateBillingDate</a>(id, { ...params }) -> SubscriptionUpdateBillingDateResponse</code>
- <code title="put /api/subscriptions/{id}/delivery-instructions">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">updateDeliveryInstructions</a>(id, { ...params }) -> SubscriptionUpdateDeliveryInstructionsResponse</code>
- <code title="put /api/subscriptions/{id}/frequency">client.api.subscriptions.<a href="./src/resources/api/subscriptions/subscriptions.ts">updateFrequency</a>(id, { ...params }) -> SubscriptionUpdateFrequencyResponse</code>

### Entities

Types:

- <code><a href="./src/resources/api/subscriptions/entities.ts">EntityCreateResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/entities.ts">EntityRetrieveResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/entities.ts">EntityUpdateResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/entities.ts">EntityListResponse</a></code>

Methods:

- <code title="post /api/subscriptions/entities">client.api.subscriptions.entities.<a href="./src/resources/api/subscriptions/entities.ts">create</a>({ ...params }) -> EntityCreateResponse</code>
- <code title="get /api/subscriptions/entities/{id}">client.api.subscriptions.entities.<a href="./src/resources/api/subscriptions/entities.ts">retrieve</a>(id) -> EntityRetrieveResponse</code>
- <code title="put /api/subscriptions/entities/{id}">client.api.subscriptions.entities.<a href="./src/resources/api/subscriptions/entities.ts">update</a>(id, { ...params }) -> EntityUpdateResponse</code>
- <code title="get /api/subscriptions/entities">client.api.subscriptions.entities.<a href="./src/resources/api/subscriptions/entities.ts">list</a>({ ...params }) -> EntityListResponse</code>
- <code title="delete /api/subscriptions/entities/{id}">client.api.subscriptions.entities.<a href="./src/resources/api/subscriptions/entities.ts">delete</a>(id) -> void</code>

### Orders

Types:

- <code><a href="./src/resources/api/subscriptions/orders.ts">OrderRetrieveResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/orders.ts">OrderListResponse</a></code>

Methods:

- <code title="get /api/subscriptions/orders/{id}">client.api.subscriptions.orders.<a href="./src/resources/api/subscriptions/orders.ts">retrieve</a>(id) -> OrderRetrieveResponse</code>
- <code title="get /api/subscriptions/orders">client.api.subscriptions.orders.<a href="./src/resources/api/subscriptions/orders.ts">list</a>({ ...params }) -> OrderListResponse</code>

### PaymentMethod

Types:

- <code><a href="./src/resources/api/subscriptions/payment-method.ts">PaymentMethodRetrieveResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/payment-method.ts">PaymentMethodUpdateResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/payment-method.ts">PaymentMethodListResponse</a></code>
- <code><a href="./src/resources/api/subscriptions/payment-method.ts">PaymentMethodSendUpdateEmailResponse</a></code>

Methods:

- <code title="get /api/subscriptions/{id}/payment-method">client.api.subscriptions.paymentMethod.<a href="./src/resources/api/subscriptions/payment-method.ts">retrieve</a>(id) -> PaymentMethodRetrieveResponse</code>
- <code title="put /api/subscriptions/{id}/payment-method">client.api.subscriptions.paymentMethod.<a href="./src/resources/api/subscriptions/payment-method.ts">update</a>(id, { ...params }) -> PaymentMethodUpdateResponse</code>
- <code title="get /api/subscriptions/payment-methods/by-profile/{profileId}">client.api.subscriptions.paymentMethod.<a href="./src/resources/api/subscriptions/payment-method.ts">list</a>(profileID) -> PaymentMethodListResponse</code>
- <code title="post /api/subscriptions/{id}/payment-method/send-update-email">client.api.subscriptions.paymentMethod.<a href="./src/resources/api/subscriptions/payment-method.ts">sendUpdateEmail</a>(id) -> PaymentMethodSendUpdateEmailResponse</code>

## Public

### Delivery

Types:

- <code><a href="./src/resources/api/public/delivery.ts">DeliveryGetNextAvailableResponse</a></code>
- <code><a href="./src/resources/api/public/delivery.ts">DeliveryGetOptionsResponse</a></code>
- <code><a href="./src/resources/api/public/delivery.ts">DeliveryListCountriesResponse</a></code>
- <code><a href="./src/resources/api/public/delivery.ts">DeliveryLookupOptionsResponse</a></code>
- <code><a href="./src/resources/api/public/delivery.ts">DeliveryValidateSelectionResponse</a></code>

Methods:

- <code title="get /api/public/delivery/next-available">client.api.public.delivery.<a href="./src/resources/api/public/delivery.ts">getNextAvailable</a>({ ...params }) -> unknown</code>
- <code title="get /api/public/delivery/options">client.api.public.delivery.<a href="./src/resources/api/public/delivery.ts">getOptions</a>({ ...params }) -> DeliveryGetOptionsResponse</code>
- <code title="get /api/public/delivery/countries">client.api.public.delivery.<a href="./src/resources/api/public/delivery.ts">listCountries</a>() -> unknown</code>
- <code title="get /api/public/delivery/lookup">client.api.public.delivery.<a href="./src/resources/api/public/delivery.ts">lookupOptions</a>({ ...params }) -> DeliveryLookupOptionsResponse</code>
- <code title="post /api/public/delivery/validate">client.api.public.delivery.<a href="./src/resources/api/public/delivery.ts">validateSelection</a>({ ...params }) -> unknown</code>

## Json

Types:

- <code><a href="./src/resources/api/json.ts">JsonGetDocumentationResponse</a></code>

Methods:

- <code title="get /api.json">client.api.json.<a href="./src/resources/api/json.ts">getDocumentation</a>() -> string</code>

## Yaml

Types:

- <code><a href="./src/resources/api/yaml.ts">YamlGetDocumentationResponse</a></code>

Methods:

- <code title="get /api.yaml">client.api.yaml.<a href="./src/resources/api/yaml.ts">getDocumentation</a>() -> string</code>

# Mcp

Methods:

- <code title="post /mcp">client.mcp.<a href="./src/resources/mcp.ts">create</a>() -> void</code>
