# QAVENTRIX – Global Promotions and Discounts Architecture

## 1. Purpose

The QAVENTRIX Promotions and Discounts System manages promotional campaigns, discount rules, coupons, and special offers across the global multi-vendor marketplace.

It must support marketplace-wide promotions, seller-specific campaigns, product discounts, customer-specific offers, and international promotional activities.

The system must be scalable, secure, configurable, auditable, and resistant to discount abuse.

## 2. Promotions Architecture

The system must distinguish between:

- Promotions.
- Promotion Rules.
- Promotion Conditions.
- Coupon Codes.
- Promotion Applications.
- Promotion Usage Records.
- Discount Allocations.
- Promotion Funding Records.

A promotion defines the commercial offer.

Promotion rules define its eligibility and calculation conditions.

Promotion applications record discounts applied to carts, checkout sessions, or confirmed orders.

The architecture must preserve the relationship between every applied discount and its originating promotion.

## 3. Promotion Types

The platform must support:

- Percentage discounts.
- Fixed amount discounts.
- Product-specific discounts.
- Product variant discounts.
- Category-specific discounts.
- Seller-specific promotions.
- Marketplace-wide promotions.
- Seasonal campaigns.
- Holiday promotions.
- Flash sales.
- Bundle discounts.
- Buy-one-get-one offers.
- Free shipping promotions.
- First-order discounts.
- Loyalty-based discounts.
- Customer-specific offers.
- Volume-based discounts.

Each promotion must have clearly defined eligibility, funding, calculation, and usage rules.

## 4. Promotion Ownership

Promotions may be created and managed by:

- Marketplace administrators.
- Authorized marketplace managers.
- Approved sellers.

Each promotion must have an explicit owner.

Ownership must identify whether the promotion belongs to:

- The marketplace.
- A seller organization.
- A specific store.
- Another authorized promotional entity.

Seller-created promotions must only apply to products, listings, and stores that the seller is authorized to manage.

Marketplace administrators may create global campaigns according to their permissions.

The system must prevent unauthorized ownership changes.

## 5. Promotion Information

Each promotion should support:

- Unique promotion ID.
- Promotion name.
- Description.
- Promotion type.
- Owner type.
- Owner ID.
- Applicable products.
- Applicable product variants.
- Applicable categories.
- Applicable sellers.
- Applicable stores.
- Applicable markets.
- Discount configuration.
- Currency when applicable.
- Start date and time.
- End date and time.
- Usage limits.
- Eligibility rules.
- Combination rules.
- Funding responsibility.
- Promotion status.
- Creation timestamp.
- Last updated timestamp.

Promotion information must be validated on the server.

## 6. Promotion Rules and Conditions

The system must support configurable promotion rules.

Conditions may include:

- Minimum purchase amount.
- Minimum product quantity.
- Maximum product quantity.
- Eligible product categories.
- Eligible product variants.
- Eligible sellers.
- Eligible stores.
- Customer location.
- Seller location.
- Customer account status.
- First purchase eligibility.
- Customer membership level.
- Specific payment methods.
- Specific shipping methods.
- Promotion dates.
- Coupon requirements.
- Usage limits.

The system must support multiple conditions combined through explicitly defined logical rules.

Promotion rules must be evaluated on the server.

## 7. Coupon Management

The system must support unique and reusable coupon codes.

Coupon information should include:

- Coupon ID.
- Coupon code or secure code reference.
- Associated promotion.
- Usage limit.
- Usage per customer.
- Minimum purchase amount.
- Maximum discount amount.
- Start date.
- Expiration date.
- Applicable sellers.
- Applicable products.
- Coupon status.
- Creation timestamp.

Coupon codes must be securely generated or validated.

The system should normalize coupon codes consistently and protect them against unauthorized enumeration.

Coupon validation must not expose private customer or campaign information.

## 8. Discount Calculation

The system must calculate discounts accurately and consistently.

It must support:

- Percentage-based calculations.
- Fixed amount calculations.
- Product-level discounts.
- Item-level discounts.
- Cart-level discounts.
- Seller-specific discounts.
- Marketplace-funded discounts.
- Shipping discounts.
- Quantity-based discounts.
- Currency-aware calculations.

All calculations must be performed or verified on the server.

The system must use precise monetary representations and avoid floating-point errors.

Rounding rules must be deterministic and documented.

A discount must never exceed the eligible amount.

## 9. Discount Allocation

The system must define how discounts are allocated across eligible order items.

Requirements:

- Product discounts must be associated with eligible items.
- Cart-level discounts must be allocated according to a defined allocation method.
- Fixed discounts must not exceed eligible subtotals.
- Multi-vendor discounts must be allocated to the appropriate seller sub-orders.
- Rounding differences must be handled consistently.
- Every allocation must preserve its promotion reference.

The allocation method must be deterministic and auditable.

The sum of item-level discount allocations must reconcile with the applied discount total.

Discount allocations must be preserved in confirmed order records.

## 10. Promotion Funding and Financial Responsibility

The system must distinguish between:

- Marketplace-funded discounts.
- Seller-funded discounts.
- Shared promotional costs.
- Other explicitly authorized funding arrangements.

Every applied discount must identify its financial responsibility.

Funding records should include:

- Promotion ID.
- Funding owner.
- Related seller when applicable.
- Funded amount.
- Currency.
- Related order or order item.
- Allocation reference.
- Creation timestamp.

Seller-funded discounts must not be incorrectly charged to the marketplace.

Marketplace-funded discounts must be recorded separately from seller earnings and platform commissions.

The financial treatment of every discount must be consistent with the payment and accounting architecture.

## 11. Promotion Eligibility

Promotions may depend on:

- Customer location.
- Seller location.
- Product category.
- Product variant.
- Product price.
- Purchase quantity.
- Minimum cart value.
- Customer account status.
- First purchase eligibility.
- Membership level.
- Payment method.
- Shipping method.
- Promotion dates.
- Available usage limits.

Eligibility rules must be configurable.

The system must revalidate eligibility during checkout.

A promotion shown in the customer interface must not be considered guaranteed until the server confirms its eligibility.

## 12. Promotion Scheduling

The system must support scheduled campaigns.

Each promotion may have:

- Start date and time.
- End date and time.
- Time zone.
- Campaign duration.
- Automatic activation.
- Automatic expiration.
- Scheduled pause where permitted.

All stored timestamps must follow the platform's UTC timestamp policy.

Local time zones may be used for campaign configuration and customer display.

The system must handle daylight-saving changes where applicable.

## 13. Flash Sales

The platform should support limited-time promotional events.

Flash sales must include:

- Start and end times.
- Discount configuration.
- Eligible products.
- Eligible sellers.
- Available promotional quantities where applicable.
- Purchase limits.
- Campaign status.
- Usage tracking.

Flash sale inventory must integrate with the authoritative inventory system.

The promotions system must not independently create or modify authoritative inventory balances.

Concurrent purchases must not exceed configured promotional quantity limits.

## 14. Multi-Vendor Promotions

The system must support promotions across multiple sellers.

It must distinguish between:

- Marketplace-wide campaigns.
- Seller-specific campaigns.
- Shared promotional campaigns.
- Product-specific seller offers.

Each seller must only manage their authorized promotional campaigns.

A marketplace-wide campaign may apply to eligible products from multiple sellers.

The system must allocate discounts to the appropriate seller sub-orders and order items.

A seller must never modify another seller's promotion rules or funding records.

## 15. Promotion Combination Rules

The platform must define whether multiple promotions can be combined.

Rules may include:

- One coupon per order.
- Multiple eligible product discounts.
- Seller discount plus marketplace discount.
- Shipping discount combinations.
- Exclusive promotions.
- Promotion priority.
- Maximum combined discount.
- Category-specific combination rules.

The system must prevent unintended discount stacking.

Combination rules must be evaluated consistently during checkout.

The final applied promotions must be recorded in the order snapshot.

## 16. Currency and International Support

The promotion system must support multiple currencies.

It must handle:

- Currency-specific fixed discounts.
- Percentage discounts.
- Country-specific campaigns.
- Regional promotional rules.
- International time zones.
- Market-specific eligibility.
- Currency precision and rounding.

Currency conversion must follow the platform's currency and financial architecture.

The original promotion currency and the currency used for the transaction must be preserved where applicable.

The system must not silently change a fixed discount amount through an undocumented currency conversion.

## 17. Promotion Statuses

Promotion statuses may include:

- DRAFT.
- PENDING_APPROVAL.
- SCHEDULED.
- ACTIVE.
- PAUSED.
- EXPIRED.
- CANCELLED.
- REJECTED.
- SUSPENDED.

Coupon codes may have their own statuses, including:

- ACTIVE.
- INACTIVE.
- EXPIRED.
- REVOKED.
- EXHAUSTED.

Status transitions must follow defined business rules.

A suspended or expired promotion must not be applied to new transactions.

Existing confirmed orders must preserve their historical promotion records.

## 18. Promotion Usage Tracking

The system must track:

- Total promotion usage.
- Usage per coupon.
- Usage per customer.
- Usage per seller.
- Usage per promotion.
- Discount amounts.
- Remaining usage limits.
- Failed redemption attempts.
- Campaign performance.

Usage records must be reliable and auditable.

The system must distinguish between:

- Validated promotion attempts.
- Reserved usage.
- Confirmed redemptions.
- Released usage.
- Reversed or refunded promotional applications.

Usage limits must be enforced transactionally to prevent concurrent requests from exceeding configured limits.

## 19. Checkout and Order Integration

The promotions system must integrate with shopping cart and checkout workflows.

During checkout, the backend must:

1. Identify eligible promotions.
2. Validate coupon codes.
3. Evaluate promotion conditions.
4. Check usage limits.
5. Apply combination rules.
6. Calculate discounts.
7. Allocate discounts to eligible order items.
8. Identify funding responsibility.
9. Return the final discount summary.
10. Preserve the confirmed promotion data in order records.

Promotion eligibility and calculations must be revalidated before order confirmation.

Repeated checkout requests must not create duplicate promotion redemptions.

The system must support safe release of reserved promotion usage when checkout or order creation fails.

## 20. Order Snapshots and Historical Records

Confirmed orders must preserve the promotional information used at purchase time.

Snapshots should include:

- Promotion identifier.
- Promotion name.
- Coupon reference when applicable.
- Discount type.
- Discount value.
- Applied discount amount.
- Currency.
- Eligible order items.
- Item-level discount allocations.
- Funding responsibility.
- Applicable calculation rules.
- Application timestamp.

Later promotion changes must not modify historical order discounts.

Historical order records must remain available for refunds, disputes, reporting, and financial reconciliation.

## 21. Fraud and Abuse Prevention

The system must protect against:

- Repeated coupon abuse.
- Unauthorized coupon sharing.
- Automated coupon attempts.
- Fake customer accounts.
- Duplicate promotional claims.
- Manipulated cart values.
- Concurrent usage limit violations.
- Unauthorized seller discounts.
- Repeated first-order claims.
- Promotion stacking abuse.

Security measures must include:

- Server-side validation.
- Rate limiting.
- Transaction-safe usage tracking.
- Idempotency protection.
- Suspicious activity detection.
- Access control.
- Audit logging.

Fraud prevention must not rely only on client-side checks.

## 22. Seller Promotion Dashboard

Sellers should be able to:

- Create eligible promotions.
- Manage coupon codes.
- Schedule discounts.
- View campaign performance.
- Monitor coupon usage.
- Pause eligible campaigns.
- Review promotional costs.
- View promotion history.

Seller permissions must be restricted to their own promotions and authorized stores.

Sellers must not access marketplace-private campaigns or other sellers' promotional information unless explicitly permitted.

## 23. Customer Experience

Customers should be able to:

- View active promotions.
- Discover discounted products.
- Enter coupon codes.
- View discount details.
- See promotion expiration times.
- Understand eligibility requirements.
- Review applied discounts before checkout.
- See why a coupon was rejected.
- View discounts in order history.

Promotion terms must be clearly displayed.

The customer interface must not display a discount as confirmed until validated by the server.

## 24. Administrative Management

Authorized administrators should be able to:

- Create marketplace campaigns.
- Approve seller promotions.
- Manage global coupon policies.
- Review promotional activity.
- Suspend abusive campaigns.
- Monitor discount expenses.
- Review funding allocations.
- Generate promotional reports.
- Investigate suspicious usage.
- Manage promotion configuration.

Administrative permissions must follow role-based access control.

All sensitive administrative actions must be audited.

## 25. Notifications

The system may send notifications for:

- New promotions.
- Upcoming campaigns.
- Flash sales.
- Coupon expiration.
- Promotion approval.
- Promotion rejection.
- Campaign completion.
- Promotion suspension.

Notifications may use:

- Email.
- SMS.
- Push notifications.
- In-platform messages.

Notification delivery must integrate with the central notification system.

Failed notification delivery must not change the financial or redemption status of a promotion.

## 26. Analytics and Reporting

The platform should measure:

- Promotion usage.
- Coupon redemption rates.
- Sales generated.
- Gross sales.
- Applied discounts.
- Net revenue.
- Average order value.
- Customer acquisition.
- Campaign conversion rates.
- Seller campaign performance.
- Marketplace promotional expenses.
- Seller-funded promotional expenses.
- Refunds associated with promotions.

Reports must distinguish between gross sales, discounts, refunds, and net revenue.

Analytics must use reliable order and financial records.

## 27. Data Model

The promotions architecture should support the following core entities:

- promotions
- promotion_rules
- promotion_conditions
- promotion_products
- promotion_categories
- promotion_sellers
- promotion_stores
- promotion_markets
- coupon_codes
- promotion_applications
- promotion_usage_records
- promotion_usage_reservations
- discount_allocations
- promotion_funding_records
- promotion_status_history
- promotion_audit_records

The final database schema must define appropriate relationships, constraints, indexes, and ownership rules.

The schema must support seller isolation, usage limits, historical records, and reliable financial reconciliation.

## 28. API Integration

The promotions system should expose versioned API endpoints for authorized operations.

Example endpoints:

- GET /api/v1/promotions
- GET /api/v1/promotions/{promotionId}
- POST /api/v1/promotions
- PATCH /api/v1/promotions/{promotionId}
- POST /api/v1/promotions/{promotionId}/pause
- POST /api/v1/promotions/{promotionId}/submit
- POST /api/v1/coupons/validate
- POST /api/v1/promotions/apply
- GET /api/v1/seller/promotions
- POST /api/v1/seller/promotions
- GET /api/v1/seller/promotions/{promotionId}
- GET /api/v1/admin/promotions/pending
- POST /api/v1/admin/promotions/{promotionId}/approve
- POST /api/v1/admin/promotions/{promotionId}/reject

All endpoints must enforce authentication, authorization, validation, rate limiting, and appropriate seller data isolation.

Critical redemption operations must support idempotency.

## 29. Security and Access Control

The promotions system must enforce:

- Authentication.
- Role-based access control.
- Seller organization isolation.
- Store ownership validation.
- Server-side eligibility checks.
- Secure coupon handling.
- Transaction-safe usage limits.
- Idempotency protection.
- Audit logging.
- Rate limiting.

Client applications must never be trusted to calculate or authorize discounts.

All financial discount values must be verified by the backend.

## 30. Reliability and Performance

The promotions system must support increasing campaign activity and marketplace traffic.

It should use:

- Appropriate database indexes.
- Efficient eligibility evaluation.
- Reliable background processing.
- Transaction-safe redemption.
- Controlled caching.
- Monitoring and error reporting.
- Safe retry mechanisms.

Cached promotion data must not override authoritative eligibility, usage limits, or financial calculations.

PostgreSQL must remain the authoritative source for promotion and redemption records.

Redis may support caching, rate limiting, and background processing but must not become the authoritative promotion database.

## 31. Marketplace Integration

The Promotions and Discounts System must integrate with:

- User Management.
- Seller Management.
- Product Management.
- Category Management.
- Shopping Cart.
- Checkout.
- Order Management.
- Payment Management.
- Inventory Management.
- Shipping Management.
- Tax Management.
- Financial Management.
- Notifications.
- Analytics and Reporting.
- Administration.

Integrations must preserve ownership boundaries and financial consistency.

The promotions system must not independently modify authoritative inventory, payment, or order records.

## 32. Core Principles

The QAVENTRIX Promotions and Discounts System must be:

- Global.
- Scalable.
- Secure.
- Transparent.
- Multi-vendor.
- Multi-currency.
- Configurable.
- Auditable.
- Financially consistent.
- Resistant to abuse.

QAVENTRIX must provide fair and reliable promotional experiences for customers and sellers worldwide.
