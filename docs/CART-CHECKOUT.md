# Afghan Market – Global Shopping Cart and Checkout Architecture

## 1. Purpose

The Shopping Cart and Checkout System manages the customer purchasing experience across the Afghan Market global marketplace.

It must provide a simple, secure, reliable, and scalable purchasing process.

The system must support multiple sellers, multiple products, international customers, different currencies, and multiple shipping destinations.

## 2. Shopping Cart Architecture

Every customer must have access to a personal shopping cart.

The system must support:

- Registered customer carts.
- Guest shopping carts.
- Persistent shopping carts.
- Multiple products.
- Products from multiple sellers.
- Product variants.
- Different quantities.
- Multiple currencies.
- Cart synchronization across devices.

Each cart must have a unique identifier.

## 3. Cart Ownership

Every cart must be associated with:

- A registered customer or guest session.
- Cart items.
- Creation timestamp.
- Last updated timestamp.
- Cart status.

Customers must only access their own carts.

Guest carts may be associated with an anonymous secure session identifier.

When a guest registers or logs in, the system should support secure cart merging.

## 4. Cart Items

Each cart item should contain:

- Product ID.
- Seller ID.
- Product variant ID when applicable.
- SKU.
- Quantity.
- Selected options.
- Date added.
- Current product availability.

The system must validate product information and seller ownership.

Cart items must not be treated as confirmed orders.

## 5. Product Availability Validation

The system must check:

- Product publication status.
- Seller account status.
- Product availability.
- Selected variant availability.
- Available inventory.
- Purchase quantity limits.
- Country-specific product restrictions.

Unavailable products must be clearly identified.

The cart must not guarantee stock availability until the appropriate reservation process occurs.

## 6. Price Management

Product prices may change after being added to the cart.

The system must support:

- Current product prices.
- Seller-specific prices.
- Multiple currencies.
- Currency conversion.
- Discounts.
- Promotional prices.
- Tax estimates.
- Price change notifications.

The final price must be recalculated during checkout.

Prices and currency conversion rates used in a confirmed order must be preserved in order records.

## 7. Cart Operations

Customers should be able to:

- Add products.
- Remove products.
- Update quantities.
- Change product variants.
- Save products for later.
- Clear the cart.
- View product details.
- View seller information.
- Review estimated totals.

All cart operations must be validated on the server.

## 8. Multi-Vendor Cart

A single shopping cart may contain products from multiple sellers.

The system must:

- Group products by seller.
- Calculate seller-specific subtotals.
- Calculate shipping costs independently when necessary.
- Support different fulfillment locations.
- Support different delivery estimates.
- Create appropriate seller sub-orders during checkout.

The customer should experience one unified checkout process whenever possible.

## 9. Shopping Cart Persistence

The system should preserve cart contents when customers:

- Navigate between pages.
- Close and reopen the website.
- Log out and log in again.
- Switch between supported devices.

Guest cart expiration policies must be configurable.

Cart data must be stored securely.

## 10. Checkout Architecture

Checkout is the process of validating the cart and preparing a final order.

The checkout process should include:

1. Cart validation.
2. Customer identification.
3. Shipping address selection.
4. Billing address selection.
5. Shipping method selection.
6. Inventory availability verification.
7. Price calculation.
8. Discount validation.
9. Tax and duty calculation.
10. Final order review.
11. Payment method selection.
12. Order creation.
13. Payment processing.
14. Order confirmation.

The checkout process must be reliable and prevent inconsistent transactions.

## 11. Customer Information

Checkout must support:

- Registered customers.
- Guest customers.
- Customer name.
- Email address.
- International phone numbers.
- Billing information.
- Shipping information.

Required customer information must depend on the destination country and applicable regulations.

## 12. Address Management

Customers must be able to:

- Add new addresses.
- Edit existing addresses.
- Delete addresses when permitted.
- Save multiple addresses.
- Select default addresses.
- Use separate billing and shipping addresses.

Address validation must support international formats.

The system should support countries, regions, cities, districts, postal codes, and address-specific requirements.

## 13. Shipping Selection

The checkout system must integrate with the global shipping architecture.

It must support:

- Local delivery.
- Domestic shipping.
- International shipping.
- Multiple shipping providers.
- Different delivery speeds.
- Seller-specific shipments.
- Multiple fulfillment locations.
- Delivery estimates.
- Shipping fees.

Shipping options must depend on product availability, seller location, customer destination, and shipping restrictions.

## 14. Taxes and Customs

The system must support configurable tax and customs calculations.

It should account for:

- Country-specific taxes.
- Regional taxes.
- Product-specific taxes.
- Import duties.
- Customs fees.
- Tax exemptions when applicable.

Customers must be informed about applicable charges before confirming an order whenever the amounts can be determined.

## 15. Discounts and Promotions

The checkout system must support:

- Coupon codes.
- Percentage discounts.
- Fixed amount discounts.
- Seller-specific promotions.
- Marketplace-wide promotions.
- Product-specific discounts.
- Minimum purchase requirements.
- Promotion expiration dates.
- Usage limits.

Discount eligibility must be validated on the server.

The system must prevent unauthorized or repeated coupon usage.

## 16. Inventory Reservation

During checkout, the system must integrate with inventory management.

It must support:

- Final stock verification.
- Temporary stock reservations.
- Reservation expiration.
- Reservation release.
- Concurrent purchase protection.

The reservation process must prevent overselling.

Inventory must be committed according to successful order and payment processing rules.

## 17. Payment Integration

The checkout system must integrate with the global payment architecture.

Supported methods may include:

- Cash on delivery.
- Bank cards.
- Bank transfers.
- Mobile money.
- Digital wallets.
- International payment providers.
- Approved manual payment methods.

Payment options must depend on customer location, seller requirements, currency, and payment provider availability.

Sensitive payment information must be handled securely.

## 18. Order Creation

After successful checkout validation, the system must create:

- A main customer order.
- Seller-specific sub-orders when necessary.
- Order items.
- Payment records.
- Shipping records.
- Inventory reservation records.
- Price and tax snapshots.

Order creation must be transaction-safe.

Repeated checkout requests must not create duplicate orders.

## 19. Checkout Security

The checkout system must implement:

- Server-side validation.
- Secure authentication.
- Authorization checks.
- CSRF protection where applicable.
- Rate limiting.
- Input sanitization.
- Secure payment processing.
- Idempotency protection.
- Fraud prevention.
- Audit logging.

The server must never trust prices, discounts, shipping fees, or totals submitted directly by the client.

## 20. Checkout Error Handling

The system must provide clear error handling for:

- Out-of-stock products.
- Invalid quantities.
- Changed prices.
- Expired promotions.
- Invalid addresses.
- Unsupported shipping destinations.
- Payment failures.
- Expired reservations.
- Network interruptions.
- Duplicate checkout requests.

Customers should be able to recover from errors without losing valid cart information.

## 21. Customer Experience

The checkout experience must be:

- Mobile-friendly.
- Responsive.
- Accessible.
- Fast.
- Easy to understand.
- Available in supported languages.
- Compatible with international addresses.
- Clear about prices and delivery costs.

Customers must review the final order summary before confirmation.

## 22. Marketplace Integration

The Shopping Cart and Checkout System must integrate with:

- User Management.
- Product Management.
- Inventory Management.
- Seller Management.
- Location Management.
- Order Management.
- Payment Management.
- Shipping Management.
- Promotions and Discounts.
- Notifications.
- Financial Management.
- Analytics and Reporting.

## 23. Future Capabilities

Future development may include:

- One-click checkout.
- AI-powered product recommendations.
- Abandoned cart recovery.
- Automatic currency conversion.
- Saved payment methods through compliant providers.
- Subscription checkout.
- Scheduled purchases.
- Advanced fraud detection.
- Personalized checkout experiences.
- Multiple payment allocations.

## 24. Core Principles

The Afghan Market Shopping Cart and Checkout System must be:

- Global.
- Scalable.
- Secure.
- Reliable.
- Multi-vendor.
- Multi-currency.
- Mobile-friendly.
- Transaction-safe.
- Customer-focused.

Afghan Market must provide a smooth and trustworthy shopping experience for customers worldwide.
