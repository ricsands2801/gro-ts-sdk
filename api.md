# API

Types:

- <code><a href="./src/resources/api/api.ts">APIRetrieveResponse</a></code>

Methods:

- <code title="get /api">client.api.<a href="./src/resources/api/api.ts">retrieve</a>() -> string</code>

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

### Reports

Methods:

- <code title="get /api/subscriptions/reports/cancellation-reasons">client.api.subscriptions.reports.<a href="./src/resources/api/subscriptions/reports.ts">retrieveCancellationReasons</a>() -> void</code>
- <code title="get /api/subscriptions/reports/growth">client.api.subscriptions.reports.<a href="./src/resources/api/subscriptions/reports.ts">retrieveGrowth</a>() -> void</code>
- <code title="get /api/subscriptions/reports/product-revenue">client.api.subscriptions.reports.<a href="./src/resources/api/subscriptions/reports.ts">retrieveProductRevenue</a>() -> void</code>
- <code title="get /api/subscriptions/reports/stats">client.api.subscriptions.reports.<a href="./src/resources/api/subscriptions/reports.ts">retrieveStats</a>() -> void</code>

## Public

### Delivery

Types:

- <code><a href="./src/resources/api/public/delivery.ts">DeliveryGetOptionsResponse</a></code>
- <code><a href="./src/resources/api/public/delivery.ts">DeliveryListCountriesResponse</a></code>
- <code><a href="./src/resources/api/public/delivery.ts">DeliveryLookupOptionsResponse</a></code>
- <code><a href="./src/resources/api/public/delivery.ts">DeliveryValidateSelectionResponse</a></code>

Methods:

- <code title="get /api/public/delivery/options">client.api.public.delivery.<a href="./src/resources/api/public/delivery.ts">getOptions</a>({ ...params }) -> DeliveryGetOptionsResponse</code>
- <code title="get /api/public/delivery/countries">client.api.public.delivery.<a href="./src/resources/api/public/delivery.ts">listCountries</a>() -> unknown</code>
- <code title="get /api/public/delivery/lookup">client.api.public.delivery.<a href="./src/resources/api/public/delivery.ts">lookupOptions</a>({ ...params }) -> DeliveryLookupOptionsResponse</code>
- <code title="post /api/public/delivery/validate">client.api.public.delivery.<a href="./src/resources/api/public/delivery.ts">validateSelection</a>({ ...params }) -> unknown</code>
