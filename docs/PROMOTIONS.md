# Afghan Market – Global Promotions and Discounts Architecture

## 1. Purpose

The Promotions and Discounts System manages promotional campaigns, discount rules, coupons, and special offers across the Afghan Market global marketplace.

It must support marketplace-wide promotions, seller-specific campaigns, product discounts, and international promotional activities.

The system must be scalable, secure, configurable, and resistant to discount abuse.

## 2. Promotion Types

The platform must support:

- Percentage discounts.
- Fixed amount discounts.
- Product-specific discounts.
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

Each promotion must have clearly defined eligibility rules.

## 3. Promotion Ownership

Promotions may be created and managed by:

- Marketplace administrators.
- Authorized marketplace managers.
- Approved sellers.

Each promotion must have an owner.

Seller-created promotions must only apply to products and stores that the seller is authorized to manage.

Marketplace administrators may create global campaigns according to their permissions.

## 4. Promotion Information

Each promotion should include:

- Unique promotion ID.
- Promotion name.
- Description.
- Promotion type.
- Owner ID.
- Applicable products.
- Applicable categories.
- Applicable sellers.
- Discount value.
- Currency when applicable.
- Start date and time.
- End date and time.
- Usage limits.
- Eligibility rules.
- Promotion status.
- Creation timestamp.
- Last updated timestamp.

Promotion information must be validated on the server.

## 5. Coupon Management

The system must support unique and reusable coupon codes.

Coupon information should include:

- Coupon ID.
- Coupon code.
- Associated promotion.
- Discount configuration.
- Usage limit.
- Usage per customer.
- Minimum purchase amount.
- Maximum discount amount.
- Start date.
- Expiration date.
- Applicable sellers.
- Applicable products.
- Coupon status.

Coupon codes must be securely generated or validated.

## 6. Discount Calculation

The system must calculate discounts accurately.

It must support:

- Percentage-based calculations.
- Fixed amount calculations.
- Product-level discounts.
- Cart-level discounts.
- Seller-specific discounts.
- Shipping discounts.
- Currency-aware calculations.

All calculations must be performed or verified on the server.

The system must use precise monetary representations and avoid floating-point errors.

## 7. Promotion Eligibility

Promotions may depend on:

- Customer location.
- Seller location.
- Product category.
- Product price.
- Purchase quantity.
- Minimum cart value.
- Customer account status.
- First purchase eligibility.
- Membership level.
- Promotion dates.
- Available usage limits.

Eligibility rules must be configurable.

## 8. Promotion Scheduling

The system must support scheduled campaigns.

Each promotion may have:

- Start date and time.
- End date and time.
- Time zone.
- Campaign duration.
- Automatic activation.
- Automatic expiration.

Time calculations must account for international time zones.

## 9. Flash Sales

The platform should support limited-time promotional events.

Flash sales must include:

- Start and end times.
- Discount configuration.
- Eligible products.
- Eligible sellers.
- Available promotional quantities.
- Purchase limits.
- Campaign status.

Flash sale inventory must be protected against overselling and concurrent purchases.

## 10. Multi-Vendor Promotions

The system must support promotions across multiple sellers.

It must distinguish between:

- Marketplace-funded discounts.
- Seller-funded discounts.
- Shared promotional costs.

The financial responsibility for each discount must be recorded.

Promotions must not allow sellers to modify another seller's discount rules.

## 11. Promotion Combination Rules

The platform must define whether multiple promotions can be combined.

Rules may include:

- One coupon per order.
- Multiple eligible product discounts.
- Seller discount plus marketplace discount.
- Shipping discount combinations.
- Exclusive promotions.
- Promotion priority.

The system must prevent unintended discount stacking.

## 12. Currency and International Support

The promotion system must support multiple currencies.

It must handle:

- Currency-specific fixed discounts.
- Percentage discounts.
- Currency conversion.
- Country-specific campaigns.
- Regional promotional rules.
- International time zones.

Currency calculations must follow the platform's financial and payment architecture.

## 13. Promotion Statuses

Promotion statuses may include:

- DRAFT
- PENDING_APPROVAL
- SCHEDULED
- ACTIVE
- PAUSED
- EXPIRED
- CANCELLED
- REJECTED

Status transitions must follow defined business rules.

## 14. Promotion Usage Tracking

The system must track:

- Total coupon usage.
- Usage per customer.
- Usage per seller.
- Usage per promotion.
- Discount amounts.
- Campaign performance.
- Remaining usage limits.

Usage records must be reliable and auditable.

## 15. Fraud and Abuse Prevention

The system must protect against:

- Repeated coupon abuse.
- Unauthorized coupon sharing.
- Automated coupon attempts.
- Fake customer accounts.
- Duplicate promotional claims.
- Manipulated cart values.
- Concurrent usage limit violations.

Security measures must include server-side validation, rate limiting, transaction-safe usage tracking, and suspicious activity detection.

## 16. Seller Promotion Dashboard

Sellers should be able to:

- Create eligible promotions.
- Manage coupon codes.
- Schedule discounts.
- View campaign performance.
- Monitor coupon usage.
- Pause eligible campaigns.
- Review promotional costs.

Seller permissions must be restricted to their own promotions.

## 17. Customer Experience

Customers should be able to:

- View active promotions.
- Discover discounted products.
- Enter coupon codes.
- View discount details.
- See promotion expiration times.
- Understand eligibility requirements.
- Review applied discounts before checkout.

Promotion terms must be clearly displayed.

## 18. Administrative Management

Authorized administrators should be able to:

- Create marketplace campaigns.
- Approve seller promotions.
- Manage global coupon policies.
- Review promotional activity.
- Suspend abusive campaigns.
- Monitor discount expenses.
- Generate promotional reports.
- Investigate suspicious usage.

All administrative actions must be permission-controlled and audited.

## 19. Notifications

The system may send notifications for:

- New promotions.
- Upcoming campaigns.
- Flash sales.
- Coupon expiration.
- Promotion approval.
- Promotion rejection.
- Campaign completion.

Notifications may use email, SMS, push notifications, and in-platform messages.

## 20. Analytics and Reporting

The platform should measure:

- Promotion usage.
- Coupon redemption rates.
- Sales generated.
- Revenue impact.
- Average order value.
- Customer acquisition.
- Campaign conversion rates.
- Seller campaign performance.
- Discount expenses.

Reports must distinguish between gross sales, discounts, and net revenue.

## 21. Marketplace Integration

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
- Notifications.
- Financial Management.
- Analytics and Reporting.

## 22. Future Capabilities

Future development may include:

- AI-powered promotional recommendations.
- Personalized discounts.
- Dynamic pricing integrations.
- Automated campaign optimization.
- Loyalty rewards.
- Referral campaigns.
- Advanced customer segmentation.
- Predictive promotion analytics.

## 23. Core Principles

The Afghan Market Promotions and Discounts System must be:

- Global.
- Scalable.
- Secure.
- Transparent.
- Multi-vendor.
- Multi-currency.
- Configurable.
- Auditable.
- Resistant to abuse.

Afghan Market must provide fair and effective promotional experiences for customers and sellers worldwide.
