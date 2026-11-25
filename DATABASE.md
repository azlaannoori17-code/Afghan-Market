QAVENTRIX is a global-ready, multi-vendor e-commerce marketplace.
Its database architecture must support:
- Multiple countries and markets.
- Multiple sellers and stores.
- Millions of products and product listings.
- Multiple currencies and languages.
- Customers, sellers, administrators, and support teams.
- Orders containing products from multiple sellers.
- Inventory across multiple warehouses.
- Domestic and international shipping.
- Secure payments, refunds, commissions, and settlements.
- Tax and regional compliance requirements.
- Long-term scalability and reliable financial records.

The database must protect data integrity, prevent unauthorized access, and support future growth without introducing unnecessary complexity during the initial development phase.

This document defines the database architecture and persistence principles. Detailed business workflows are documented in the corresponding domain documents.

---

## 2. Database Technology

### Primary Database

PostgreSQL is the primary relational database.

It is responsible for persistent transactional business data, including:

- Users and permissions.
- Sellers and stores.
- Products and listings.
- Inventory.
- Carts and orders.
- Payments and financial records.
- Shipping and taxes.
- Reviews and promotions.
- Audit records.

### ORM

Prisma ORM will be used for database access and schema management in the NestJS backend.

Prisma schema definitions and database migrations must remain synchronized.

### Cache and Temporary Data

Redis may be used for:

- Caching.
- Temporary sessions where appropriate.
- Rate limiting.
- Distributed locks where justified.
- Background job coordination.
- Short-lived reservation coordination.
- Frequently accessed data.

Redis must not become the authoritative source of financial, order, or inventory records.

PostgreSQL remains the source of truth.

### Object Storage

An S3-compatible object storage service will store:

- Product images.
- Seller documents.
- User-uploaded media.
- Shipping documents.
- Other permitted files.

The database stores file metadata and storage references, not large binary files.

---

## 3. Database Access Architecture

All applications must access business data through the centralized backend.

Architecture:

- Next.js Web Application
- React Native Mobile Application
- Other authorized clients
- NestJS REST API
- PostgreSQL
- Redis
- Object Storage

Rules:

1. Client applications must never connect directly to PostgreSQL.
2. Database credentials must never be exposed to browsers or mobile applications.
3. All business operations must pass through authorized backend services.
4. Backend services must validate inputs and permissions.
5. Database access must follow least-privilege principles.
6. Sensitive operations must be logged and monitored.

The backend is responsible for enforcing business rules and access control.

---

## 4. Database Design Principles

The database must follow these principles:

- Relational integrity.
- Clear domain boundaries.
- Consistent naming conventions.
- Explicit foreign-key relationships.
- Appropriate normalization.
- Controlled denormalization when performance requires it.
- Transactional consistency.
- Secure tenant isolation.
- Reliable financial records.
- Concurrency-safe inventory operations.
- Backward-compatible schema evolution.
- Efficient indexing.
- Verified backup and recovery procedures.

Avoid unnecessary duplication of business data.

Historical snapshots are permitted when required to preserve the original state of a transaction.

---

## 5. User Identity and Access Management

The user system must support multiple roles and permissions.

### Main Entities

- users
- user_profiles
- roles
- permissions
- user_role_assignments
- role_permissions
- user_sessions
- authentication_methods
- email_verifications
- phone_verifications
- password_reset_tokens
- security_events
- notification_preferences
- user_addresses

### Supported Roles

Initial platform roles include:

- SUPER_ADMIN
- ADMIN
- SELLER
- CUSTOMER
- SUPPORT_AGENT

Additional roles may be introduced when required.

### Role Architecture

A user must not be restricted to a single permanent role.

The system must support multiple role assignments and scoped permissions.

For example:

- A user may be both a customer and a seller.
- A seller employee may manage one store but not another.
- A support agent may access only authorized support operations.
- An administrator may have permissions limited to a specific operational scope.

### Security Rules

- Never trust role information supplied by the client.
- Verify permissions on the backend.
- Enforce authorization for every protected operation.
- Store passwords using secure password hashing.
- Protect authentication and recovery processes.
- Support international email addresses and phone numbers.

---

## 6. Seller and Store Management

A seller organization may own multiple stores.

### Main Entities

- seller_profiles
- seller_verification_records
- seller_documents
- seller_members
- seller_memberships
- stores
- store_settings
- store_locations
- store_categories
- store_status_history
- seller_financial_accounts

### Seller Architecture

Seller organization and store must be separate entities.

A seller may operate multiple stores.

A store belongs to a seller organization.

Seller employees must receive explicit permissions for the stores and operations they are authorized to manage.

### Seller Data Protection

Every seller-owned business record must have an appropriate ownership relationship.

Depending on the entity, this may include:

- seller_id
- store_id

The backend must enforce seller ownership in every relevant query and mutation.

A seller must never be able to access another seller's private:

- Orders.
- Customers' personal information.
- Listings.
- Inventory.
- Financial records.
- Documents.
- Internal reports.

---

## 7. Multi-Tenant Data Isolation

QAVENTRIX is a multi-vendor platform.

Seller data isolation is a fundamental security requirement.

### Backend Enforcement

The backend must:

1. Identify the authenticated user.
2. Verify the user's seller membership.
3. Verify the requested seller and store scope.
4. Apply ownership filters to database queries.
5. Reject unauthorized operations.
6. Record sensitive administrative actions.

Seller identifiers supplied by clients must never be trusted without authorization checks.

### PostgreSQL Row-Level Security

PostgreSQL Row-Level Security (RLS) may be implemented as an additional defense-in-depth layer.

When enabled:

- Tenant context must be set safely for each database transaction.
- Transaction-local settings should be used with connection pooling.
- Application database roles must not have BYPASSRLS privileges.
- Policies must be tested for reads, updates, deletes, and inserts.
- Administrative access must use controlled and audited paths.

RLS does not replace backend authorization.

Both layers must work together.

---

## 8. Global Product Catalog

The product catalog must distinguish between a global product and an individual seller's offer.

This distinction is essential for a multi-vendor marketplace.

### Main Entities

- products
- product_translations
- product_variants
- product_attributes
- product_attribute_values
- product_media
- categories
- category_translations
- brands
- brand_translations
- product_category_assignments
- product_tags
- product_moderation_records

### Global Product

A product represents the common catalog identity.

It may contain:

- Product name.
- Description.
- Brand.
- Category.
- Specifications.
- Attributes.
- Media references.
- Translation records.
- Moderation status.

### Product Variants

Variants represent specific product configurations.

Examples:

- Size.
- Color.
- Storage capacity.
- Model.
- Other selectable attributes.

Each variant must have an appropriate identity and SKU strategy.

### Seller Listings

Seller-specific offers must be stored separately from global products.

Main entity:

- seller_listings

A seller listing connects a seller's offer to a product or product variant.

It may contain:

- seller_id
- store_id
- product_id
- variant_id
- seller_sku
- price_amount
- currency_code
- condition
- listing_status
- market_id
- availability information

A single product may have listings from many sellers.

Each seller controls their own listing, price, and availability.

### Catalog Matching

Sellers may submit products that do not yet exist in the global catalog.

Such submissions must follow a controlled matching or moderation process.

The system must avoid creating duplicate global products unnecessarily.

---

## 9. Inventory Management

Inventory must be tracked at the appropriate seller, listing, warehouse, and location level.

### Main Entities

- warehouses
- warehouse_locations
- inventory_balances
- inventory_movements
- inventory_reservations
- inventory_adjustments
- inventory_transfers
- inventory_audit_records

### Inventory Requirements

The system must support:

- Multiple sellers.
- Multiple stores.
- Multiple warehouses.
- Multiple warehouse locations.
- Multiple product variants.
- Stock adjustments.
- Stock transfers.
- Reserved stock.
- Available stock.
- Damaged and unavailable stock.
- Inventory history.

### Inventory Consistency

Inventory changes must be transactional.

The system must prevent overselling when multiple customers attempt to purchase the same stock simultaneously.

Use concurrency-safe database operations, including conditional updates and appropriate transaction isolation.

A reservation must have:

- A unique identifier.
- A related order or checkout reference.
- A reserved quantity.
- A creation timestamp.
- An expiration timestamp.
- A status.

Expired reservations must be released safely.

Inventory movements should be preserved as historical records rather than silently overwritten.

### Idempotency

Repeated inventory events must not apply the same stock change multiple times.

Use unique event identifiers or idempotency keys where appropriate.

---

## 10. Cart and Checkout Data

### Main Entities

- carts
- cart_items
- cart_item_options
- checkout_sessions
- checkout_items
- checkout_addresses
- checkout_shipping_selections
- checkout_price_snapshots

### Requirements

The system must support:

- Guest carts.
- Registered customer carts.
- Cart merging after authentication.
- Multiple sellers in one cart.
- Multiple currencies where permitted.
- Product variants.
- Seller-specific listings.
- Shipping selections.
- Promotions and discounts.

Cart items must reference the appropriate seller listing and variant.

Prices stored in a cart are not guaranteed final prices.

At checkout, the backend must revalidate:

- Listing availability.
- Current price.
- Stock availability.
- Seller status.
- Shipping eligibility.
- Promotion eligibility.
- Applicable taxes.

The final order must preserve the confirmed checkout values.

---

## 11. Order Management

### Main Entities

- orders
- order_items
- seller_orders
- seller_order_items
- order_addresses
- order_status_history
- order_notes
- order_cancellations
- order_returns
- order_refunds

### Order Structure

A customer order may contain products from multiple sellers.

The system must support a parent customer order and separate seller-level suborders.

This allows each seller to manage their own fulfillment while the customer sees a unified order.

### Order Item Snapshots

Each order item must preserve relevant historical information, including:

- Product name.
- Product identifier.
- Variant information.
- SKU.
- Seller identity.
- Store identity.
- Listing reference.
- Unit price.
- Currency.
- Quantity.
- Discount.
- Tax.
- Shipping allocation.
- Final item amount.

Historical order information must not change when a seller later edits a product listing.

### Address Snapshots

Shipping and billing addresses must be preserved as transaction snapshots.

Changing a customer's saved address must not change an existing order.

### Order Creation

Order creation must use appropriate database transactions.

The process must safely coordinate:

- Stock reservation or deduction.
- Order creation.
- Seller suborder creation.
- Order item creation.
- Payment initialization records.
- Transactional event records.

Order creation must be idempotent to prevent duplicate orders from repeated requests.

Order status and payment status must be modeled separately.

---

## 12. Money and Currency Architecture

Financial accuracy is a critical requirement.

### Currency Standards

Use ISO 4217 currency codes.

Examples:

- AFN
- USD
- EUR
- TRY

The system must support currencies with different minor-unit precision.

Not every currency uses two decimal places.

### Money Storage

Never use floating-point values for financial amounts.

The recommended storage strategy is:

- Integer minor-unit amounts.
- Explicit ISO currency code.
- Currency exponent metadata.

For example, a monetary value must be interpreted using its currency's defined minor-unit exponent.

Use PostgreSQL BIGINT for integer minor-unit amounts where the supported range is sufficient.

In TypeScript and JavaScript, use BigInt or safe string-based conversions for values that may exceed Number's safe integer range.

Never perform financial calculations using ordinary floating-point arithmetic.

### Exchange Rates

Main entities:

- exchange_rates
- exchange_rate_sources
- exchange_rate_snapshots

Each conversion must preserve:

- Original amount.
- Original currency.
- Converted amount.
- Target currency.
- Exchange rate.
- Rate source.
- Rate timestamp.

Historical financial transactions must never be recalculated using a new exchange rate.

---

## 13. Financial Ledger and Accounting

The platform must use a reliable financial ledger architecture.

### Main Entities

- ledger_accounts
- journal_entries
- journal_entry_lines
- financial_transactions
- seller_balances
- seller_payouts
- payout_items
- commission_rules
- commission_records
- settlement_batches
- reconciliation_records
- financial_adjustments

### Double-Entry Accounting

Financial transactions must be represented using balanced journal entries.

For each journal entry:

- Total debits must equal total credits.
- Entries must belong to the appropriate currency.
- Financial records must have clear references.
- Transactions must be committed atomically.

### Ledger Immutability

Posted financial entries must not be silently edited or deleted.

Corrections must use reversal or adjustment entries.

Account balances may be maintained as cached or derived values, but they must remain reconcilable against the underlying ledger.

### Seller Settlements

The system must track:

- Seller payable amounts.
- Platform commissions.
- Payment processing fees.
- Refunds.
- Adjustments.
- Payout requests.
- Completed payouts.
- Failed payouts.

Commission rules must preserve historical values.

Changing a commission rate must not alter previously completed transactions.

### Reconciliation

The system must support reconciliation between:

- Internal financial records.
- Payment provider transactions.
- Refund records.
- Seller payouts.
- Settlement statements.

Financial discrepancies must be detectable and reviewable.

---

## 14. Payment Architecture

### Main Entities

- payment_intents
- payments
- payment_attempts
- payment_transactions
- payment_methods
- payment_provider_accounts
- payment_webhook_events
- payment_refunds
- payment_reconciliation_records

### Requirements

The system must support multiple payment providers and methods.

Payment processing must preserve:

- Provider reference.
- Order reference.
- Payment amount.
- Currency.
- Payment status.
- Attempt history.
- Timestamps.
- Failure information where appropriate.

### Idempotency

Payment creation and processing must use idempotency keys.

A unique constraint must prevent duplicate processing of the same logical request.

### Webhooks

Payment webhooks must:

1. Verify provider signatures.
2. Validate event authenticity.
3. Store unique provider event identifiers.
4. Prevent duplicate event processing.
5. Process state changes transactionally.
6. Preserve relevant event history.

Never trust a browser redirect or client-side success message as proof of payment.

### Sensitive Information

Never store raw card numbers, CVV values, or other prohibited payment credentials.

Use payment provider tokens and references.

Refunds must support authorization checks and partial refund tracking.

---

## 15. Tax Management

### Main Entities

- tax_jurisdictions
- tax_rules
- tax_rates
- tax_exemptions
- tax_calculation_snapshots
- tax_registration_records

### Requirements

The tax architecture must support:

- Country-specific tax rules.
- Regional tax jurisdictions.
- Tax-inclusive pricing.
- Tax-exclusive pricing.
- Product-specific tax treatment.
- Seller-specific tax obligations.
- Tax exemptions where legally permitted.
- Historical tax calculations.

Tax calculation results must be preserved with the related order.

Changing a tax rule must not modify historical order records.

External tax calculation providers may be integrated when required.

---

## 16. Global Locations and Addresses

### Main Entities

- countries
- regions
- states
- provinces
- cities
- districts
- postal_codes
- geographic_locations
- addresses
- country_settings
- supported_currencies
- supported_languages
- time_zones

### Requirements

The location model must support different administrative hierarchies.

Not every country uses the same address structure.

The system must support:

- International addresses.
- Optional postal codes.
- Regional subdivisions.
- International phone numbers.
- Time zones.
- Country-specific settings.
- Multiple delivery locations.

Country and currency identifiers should use standardized codes where applicable.

---

## 17. Shipping and Fulfillment

### Main Entities

- shipping_methods
- shipping_providers
- shipping_services
- shipping_rates
- shipments
- shipment_items
- shipment_addresses
- tracking_events
- delivery_attempts
- customs_declarations
- shipping_rate_snapshots

### Requirements

The system must support:

- Domestic shipping.
- International shipping.
- Multiple sellers.
- Multiple packages.
- Partial fulfillment.
- Multiple shipments per order.
- Tracking history.
- Delivery attempts.
- Customs information.
- Shipping cost snapshots.

A shipment must be associated with the appropriate seller order or fulfillment operation.

Shipping charges and selected services must be preserved historically.

---

## 18. Reviews and Ratings

### Main Entities

- product_reviews
- seller_reviews
- review_media
- review_responses
- review_reports
- review_votes
- review_moderation_records

### Requirements

The system must support:

- Product ratings.
- Seller ratings.
- Written reviews.
- Image attachments.
- Seller responses.
- Moderation.
- Reporting.
- Helpful votes.

Verified purchase status must be validated by the backend against eligible completed purchases.

A customer must not be able to create duplicate reviews for the same eligible purchase item unless the business rules explicitly permit it.

---

## 19. Promotions and Discounts

### Main Entities

- promotions
- promotion_rules
- coupons
- coupon_redemptions
- promotion_products
- promotion_categories
- promotion_sellers
- promotion_usage_limits
- promotion_reservations

### Requirements

The system must support:

- Platform-wide promotions.
- Seller-specific promotions.
- Product discounts.
- Category discounts.
- Coupon codes.
- Usage limits.
- Customer eligibility.
- Country and market restrictions.
- Currency-specific conditions.

Promotion usage limits must be concurrency-safe.

The system must preserve the actual discount applied to each order.

The financial responsibility for a discount must be identifiable, including whether it is funded by the platform or seller.

---

## 20. Notifications

### Main Entities

- notifications
- notification_templates
- notification_preferences
- notification_deliveries
- notification_events

### Supported Channels

- In-app.
- Email.
- SMS.
- Push notifications.

### Requirements

The system must support multilingual templates, delivery status tracking, retry handling, and user preferences.

Sensitive personal information should not be unnecessarily copied into notification records.

---

## 21. Search and Discovery Data

The initial search implementation may use PostgreSQL full-text search and appropriate indexes.

Main entities may include:

- search_documents
- search_synonyms
- search_logs
- search_preferences

A dedicated search engine may be introduced later when scale and search requirements justify it.

Search indexes are derived data and must not replace PostgreSQL as the source of truth for products and listings.

---

## 22. Audit Logs and Historical Records

### Main Entities

- audit_logs
- security_events
- status_history_records
- administrative_action_records

Important operations must be auditable, including:

- Authentication and permission changes.
- Seller verification.
- Product moderation.
- Inventory adjustments.
- Order status changes.
- Payment operations.
- Refunds.
- Commission changes.
- Financial adjustments.
- Administrative actions.

Audit records must identify:

- Actor.
- Action.
- Target entity.
- Timestamp.
- Relevant context.
- Request or correlation identifier where appropriate.

Audit records must be protected against unauthorized modification.

Sensitive credentials and unnecessary personal data must never be recorded in logs.

---

## 23. Transactional Outbox and Event Reliability

The platform must avoid unreliable dual writes between PostgreSQL and external systems.

A transactional outbox pattern should be used for important events.

### Main Entities

- outbox_events
- processed_events

### Requirements

When a critical database transaction creates an event:

1. Business data and the outbox record must be committed in the same transaction.
2. A background worker publishes the event.
3. Failed publishing must be retried safely.
4. Consumers must process events idempotently.
5. Processed events must not be applied repeatedly.

This architecture supports reliable communication between backend modules and external integrations.

---

## 24. Data Integrity and Constraints

The database must enforce integrity wherever practical.

Use:

- Foreign keys.
- Unique constraints.
- Check constraints.
- Appropriate not-null constraints.
- Composite indexes.
- Transaction boundaries.
- Unique idempotency keys.

Important examples include:

- Unique user email where applicable.
- Unique provider event identifiers.
- Unique payment idempotency keys.
- Valid currency codes.
- Non-negative quantities where required.
- Valid monetary values.
- Balanced journal entries.
- Valid seller and store relationships.

Critical business rules must be validated by the backend as well as by database constraints when appropriate.

---

## 25. Database Naming and Data Types

### Naming

Use consistent snake_case naming for database tables and columns.

Examples:

- created_at
- updated_at
- seller_id
- store_id
- currency_code

### Identifiers

UUID identifiers are recommended for major business entities.

Identifiers must be generated and managed consistently.

### Timestamps

Store timestamps using PostgreSQL TIMESTAMPTZ.

Store timestamps in UTC.

Convert to local time zones only when displaying information or applying explicitly regional business rules.

### Status Fields

Statuses must use controlled values.

Use Prisma enums or reference tables according to the complexity and expected evolution of the domain.

Status changes that require historical tracking must have corresponding history records.

### Soft Deletes

Soft deletion must be used only when justified.

Do not use soft deletion as a replacement for financial retention, audit history, or proper data lifecycle management.

---

## 26. Indexing and Query Performance

Indexes must be designed around actual query patterns.

Important indexing areas include:

- Foreign keys.
- Seller and store ownership.
- Product and listing identifiers.
- Order identifiers and statuses.
- Payment references.
- Inventory lookup keys.
- Time-based queries.
- Unique business identifiers.

Composite indexes should be used where queries frequently filter by multiple columns.

Avoid creating unnecessary indexes because they increase storage and write costs.

Use pagination for large result sets.

Monitor slow queries and database performance.

---

## 27. Database Transactions and Concurrency

Transactions are required for critical multi-step operations.

Examples:

- Order creation.
- Inventory reservation.
- Payment state changes.
- Refund processing.
- Ledger posting.
- Seller settlement.
- Coupon redemption.

The implementation must define clear transaction boundaries.

Use appropriate isolation levels and concurrency-safe updates.

Do not assume that checking a value before a transaction guarantees that it remains unchanged.

Critical operations must be safe under simultaneous requests.

Deadlocks and transaction failures must be handled with controlled retry logic where appropriate.

---

## 28. Prisma Schema and Migration Management

Prisma schema files and database migrations must be version-controlled.

### Migration Rules

- Every schema change must have a migration.
- Migrations must be reviewed.
- Migrations must be tested in development and staging.
- Production migrations must be carefully deployed.
- Destructive changes require explicit planning.
- Data migrations must preserve existing records.
- Database and application versions must remain compatible.

### Expand-and-Contract Strategy

For risky changes:

1. Add the new schema structure.
2. Deploy compatible application code.
3. Migrate existing data.
4. Verify the new structure.
5. Remove obsolete fields only after safe adoption.

Never assume that every production migration can be automatically rolled back.

Backups and recovery procedures must be available before risky migrations.

---

## 29. Security and Privacy

Database security must include:

- Restricted database access.
- Encrypted connections.
- Secure secret management.
- Least-privilege database roles.
- Backend authorization.
- Seller data isolation.
- Protection of sensitive records.
- Secure backup storage.
- Audit logging.
- Controlled administrative access.

Sensitive data must be encrypted at rest or application-encrypted where appropriate.

Personal information must be collected and retained only as required.

The platform must support applicable privacy, data protection, and regional compliance requirements.

---

## 30. Data Retention and Deletion

The system must define retention policies for:

- User accounts.
- Seller records.
- Orders.
- Payments.
- Financial ledgers.
- Audit logs.
- Identity verification documents.
- Notifications.
- Temporary records.

Retention periods must follow applicable legal and operational requirements.

Where deletion is required, the platform must distinguish between:

- Data that can be deleted.
- Data that must be retained for legal or financial reasons.
- Data that can be anonymized.
- Data subject to legal holds.

Deleting a user account must not silently destroy legally required financial or transaction records.

Data export and account privacy requests must be supported where required.

---

## 31. Backups and Disaster Recovery

The database must have automated backup procedures.

Requirements:

- Scheduled backups.
- Encrypted backup storage.
- Appropriate backup retention.
- Point-in-time recovery where supported.
- Backup integrity verification.
- Periodic restoration tests.
- Documented disaster recovery procedures.

Define:

- Recovery Point Objective (RPO).
- Recovery Time Objective (RTO).

Backups are not considered reliable until restoration has been tested.

---

## 32. Scalability Strategy

The initial architecture should prioritize correctness and maintainability.

Start with a well-structured PostgreSQL deployment.

Introduce advanced scaling techniques only when justified by actual workload and operational requirements.

Possible future improvements:

- Read replicas.
- Connection pooling.
- Table partitioning.
- Database workload separation.
- Dedicated search infrastructure.
- Analytics databases.
- Regional data infrastructure.
- Distributed processing.

Do not introduce sharding or multi-region writes prematurely.

Any future scaling strategy must preserve transaction integrity and data ownership rules.

---

## 33. Redis and Cache Consistency

Redis is an auxiliary system.

Cached data must be treated as temporary and recoverable.

Requirements:

- Define cache expiration.
- Invalidate or refresh affected records after updates.
- Avoid using stale cache values for critical financial decisions.
- Never rely solely on cached inventory for final stock confirmation.
- Never treat cache state as authoritative payment or order status.

Critical operations must verify their state against PostgreSQL.

---

## 34. Database Module Boundaries

Database design should follow the platform's business domains.

Major domains include:

- Identity and Access.
- Seller Management.
- Store Management.
- Product Catalog.
- Seller Listings.
- Inventory.
- Cart and Checkout.
- Orders.
- Payments.
- Financial Ledger.
- Taxes.
- Shipping.
- Promotions.
- Reviews.
- Notifications.
- Search.
- Analytics.
- Audit and Compliance.

Each domain must have clear ownership of its data and business rules.

Avoid uncontrolled direct database access across unrelated modules.

Cross-domain operations must use clearly defined application services and transaction boundaries.

---

## 35. Analytics and Reporting

Operational transactions should remain separate from heavy analytical workloads as the platform grows.

Initial reports may use optimized PostgreSQL queries.

Future analytics may use:

- Read replicas.
- Data warehouses.
- Reporting databases.
- Event pipelines.
- Business intelligence tools.

Analytical workloads must not compromise critical transactional performance.

---

## 36. Testing and Data Quality

Database-related testing must include:

- Schema validation.
- Migration testing.
- Foreign-key integrity.
- Unique constraint testing.
- Permission testing.
- Seller isolation testing.
- Concurrent inventory testing.
- Duplicate payment prevention.
- Order transaction testing.
- Ledger balance verification.
- Backup restoration testing.

Test data must not expose real customer or financial information.

Critical financial and inventory operations require automated integration tests.

---

## 37. Initial Implementation Priorities

The database should be implemented in controlled phases.

### Phase 1: Foundation

- PostgreSQL configuration.
- Prisma setup.
- Initial migrations.
- User identity.
- Roles and permissions.
- Seller and store relationships.

### Phase 2: Catalog

- Categories.
- Brands.
- Products.
- Product variants.
- Product translations.
- Seller listings.
- Product moderation.

### Phase 3: Inventory

- Warehouses.
- Inventory balances.
- Inventory movements.
- Reservations.
- Stock concurrency protection.

### Phase 4: Commerce

- Carts.
- Checkout.
- Orders.
- Seller suborders.
- Order history.
- Returns and refunds.

### Phase 5: Financial Systems

- Payments.
- Payment webhooks.
- Idempotency.
- Ledger.
- Commissions.
- Seller settlements.
- Reconciliation.

### Phase 6: Global Operations

- Countries and regions.
- Currencies.
- Exchange rates.
- Shipping.
- Taxes.
- International addresses.
- Regional compliance.

### Phase 7: Platform Expansion

- Reviews.
- Promotions.
- Notifications.
- Search.
- Analytics.
- Advanced reporting.

These phases describe implementation priorities, not completed functionality.

---

## 38. Related Architecture Documents

This document defines database and persistence architecture.

Detailed business requirements are maintained in:

- `ARCHITECTURE.md`
- `API.md`
- `SECURITY.md`
- `ANALYTICS.md`
- `NOTIFICATIONS.md`
- `RETURNS.md`
- `docs/PRODUCTS.md`
- `docs/INVENTORY.md`
- `docs/CART-CHECKOUT.md`
- `docs/ORDERS.md`
- `docs/PAYMENTS.md`
- `docs/SELLER-MANAGEMENT.md`
- `docs/USER-MANAGEMENT.md`
- `docs/LOCATIONS.md`
- `docs/SHIPPING.md`
- `docs/TAXES.md`
- `docs/COMPLIANCE.md`
- `docs/PROMOTIONS.md`
- `docs/REVIEWS.md`
- `docs/DEPLOYMENT.md`

All documents must remain consistent with the central architecture.

If a conflict is discovered, it must be resolved explicitly rather than allowing contradictory technical requirements.

---

## 39. Implementation Status

This document describes the intended database architecture.

It does not mean that all listed database tables, constraints, security controls, or integrations have already been implemented.

Implementation must be verified through:

- Prisma schema review.
- Database migrations.
- Automated tests.
- Security testing.
- Integration testing.
- Deployment verification.

Features must not be described as operational until they have been implemented and tested.

---

## 40. Final Architecture Goal

The QAVENTRIX database must provide a secure, consistent, reliable, and globally extensible foundation for a multi-vendor marketplace.

Its most important priorities are:

1. Correct financial records.
2. Secure seller data isolation.
3. Reliable inventory management.
4. Consistent order and payment processing.
5. International compatibility.
6. Strong data integrity.
7. Recoverability and operational reliability.
8. Maintainable long-term architecture.

The system must be designed for growth while keeping the initial implementation understandable, testable, and manageable.
