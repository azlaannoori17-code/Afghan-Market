# Afghan Market – Global Order Management Architecture

## 1. Purpose

The Order Management System manages the complete order lifecycle across the Afghan Market global marketplace.

It must support customers, sellers, administrators, domestic orders, and international orders.

The system must be scalable, secure, reliable, and capable of handling orders involving multiple sellers.

## 2. Order Architecture

Afghan Market must support:

- Single-seller orders.
- Multi-seller orders.
- Domestic orders.
- International orders.
- Multiple shipping destinations.
- Multiple payment methods.
- Multiple currencies.
- Partial fulfillment.
- Partial cancellation.
- Partial refunds.
- Order tracking.

A customer may purchase products from multiple sellers in a single checkout.

The platform must create one main customer order and separate seller-specific sub-orders when necessary.

## 3. Order Ownership

Every order must be associated with:

- A customer.
- One or more sellers.
- Ordered products.
- Payment records.
- Shipping records.
- Billing information.
- Delivery addresses.

Each seller must only access and manage their own sub-orders.

Customers must be able to view their complete order.

Administrators must have authorized access to manage marketplace orders.

## 4. Order Information

Each order should include:

- Unique order number.
- Customer ID.
- Order status.
- Order date and time.
- Currency.
- Subtotal.
- Discounts.
- Shipping fees.
- Taxes and duties when applicable.
- Final total.
- Billing address.
- Shipping address.
- Payment status.
- Fulfillment status.
- Customer notes.
- Internal administrative notes.

## 5. Order Items

Each order item must store:

- Product ID.
- Product name snapshot.
- Product SKU.
- Seller ID.
- Selected variant.
- Quantity.
- Unit price.
- Currency.
- Discount.
- Tax information when applicable.
- Item subtotal.

Order item snapshots must preserve the product information and agreed price at the time of purchase.

Changes to a product listing must not modify historical order records.

## 6. Order Lifecycle

The order lifecycle should support the following statuses:

- PENDING
- AWAITING_PAYMENT
- PAYMENT_PROCESSING
- PAID
- CONFIRMED
- PROCESSING
- READY_FOR_SHIPMENT
- SHIPPED
- PARTIALLY_SHIPPED
- IN_TRANSIT
- OUT_FOR_DELIVERY
- DELIVERED
- COMPLETED
- CANCELLATION_REQUESTED
- CANCELLED
- RETURN_REQUESTED
- RETURNED
- PARTIALLY_REFUNDED
- REFUNDED
- FAILED
- ON_HOLD

Status transitions must follow defined business rules.

Every important status change must be recorded in an order history log.

## 7. Multi-Vendor Order Management

When a customer purchases products from multiple sellers:

- Create one main order.
- Create separate seller sub-orders.
- Associate each item with its seller.
- Calculate seller-specific totals.
- Calculate shipping costs separately when necessary.
- Track fulfillment independently.
- Support different delivery times.
- Support partial cancellations and refunds.

The main order must provide a unified view of all seller sub-orders.

## 8. Payment Integration

The order system must integrate with the global payment architecture.

It must support:

- Cash on delivery.
- Bank cards.
- Bank transfers.
- Mobile money.
- Digital wallets.
- International payment providers.
- Manual payment verification.

Payment processing must use secure and reliable transaction handling.

Orders must not be marked as paid until payment confirmation is verified.

Payment operations must support idempotency to prevent duplicate charges.

## 9. Shipping Integration

The order system must integrate with the global shipping architecture.

It must support:

- Domestic delivery.
- International delivery.
- Multiple shipping providers.
- Multiple shipments per order.
- Separate shipments for different sellers.
- Shipment tracking.
- Delivery confirmation.
- Shipping cost calculation.
- Customs and import requirements.

Each shipment must have its own tracking information and status.

## 10. Inventory Reservation

Before confirming an order, the system must verify product availability.

The inventory system must support:

- Stock availability checks.
- Temporary stock reservations.
- Reservation expiration.
- Stock reduction after successful order confirmation.
- Stock restoration after eligible cancellations.
- Prevention of overselling.

Inventory operations must be consistent and protected against concurrent purchases.

## 11. Order Cancellation

Customers may request cancellation according to marketplace policies.

The system must support:

- Full order cancellation.
- Partial order cancellation.
- Seller cancellation requests.
- Administrative cancellation.
- Cancellation reasons.
- Automatic inventory restoration when appropriate.
- Payment reversal or refund processing when applicable.

Cancellation rules must depend on the current order and fulfillment status.

## 12. Returns and Refunds

The system must support:

- Return requests.
- Return reasons.
- Return approval or rejection.
- Return shipment tracking.
- Product inspection.
- Full refunds.
- Partial refunds.
- Refund status tracking.
- Refund history.

Refunds must be connected to the original payment transaction.

All financial changes must be recorded.

## 13. Taxes and Duties

The order system must support configurable tax rules.

It should account for:

- Country-specific taxes.
- Regional taxes.
- Product-specific tax rules.
- Import duties.
- Customs fees.
- Tax exemptions when applicable.

Tax calculations must follow applicable local laws and regulations.

## 14. International Order Support

Afghan Market must support international commerce.

The system must handle:

- Customer and seller countries.
- International addresses.
- Country-specific phone formats.
- Multiple currencies.
- Time zones.
- International shipping methods.
- Customs documentation.
- Import and export restrictions.
- Regional order requirements.

Country-specific rules must be configurable.

## 15. Order Notifications

Customers and sellers should receive notifications for important events.

Examples include:

- Order placed.
- Payment received.
- Order confirmed.
- Order processing.
- Shipment dispatched.
- Shipment delayed.
- Out for delivery.
- Order delivered.
- Cancellation requested.
- Order cancelled.
- Return approved.
- Refund processed.

Notifications may use email, SMS, push notifications, and in-platform messages.

## 16. Seller Order Dashboard

Sellers must have access to a dedicated order management dashboard.

Sellers should be able to:

- View their orders.
- Confirm eligible orders.
- Prepare products.
- Update fulfillment status.
- Create shipment records.
- Add tracking information.
- Request cancellation.
- Manage eligible returns.
- View order history.
- Review seller-specific sales totals.

Sellers must never access another seller's private order information.

## 17. Customer Order Dashboard

Customers should be able to:

- View all orders.
- View order details.
- Track shipments.
- Download invoices.
- Request cancellation.
- Request returns.
- View refund status.
- Contact sellers through approved marketplace channels.
- Review delivered products.

## 18. Administrative Order Management

Administrators must be able to:

- View marketplace orders.
- Search and filter orders.
- Review payment issues.
- Monitor fulfillment.
- Resolve order disputes.
- Manage cancellations.
- Review returns and refunds.
- Investigate suspicious activity.
- Generate order reports.
- Manage order policies.

Administrative actions must be permission-controlled and audited.

## 19. Security and Reliability

The order system must implement:

- Server-side authorization.
- Secure customer and seller data access.
- Transaction-safe order creation.
- Idempotent payment operations.
- Inventory consistency.
- Audit logs.
- Fraud prevention controls.
- Input validation.
- Rate limiting.
- Reliable error handling.
- Data backups.

Sensitive payment information must not be stored directly unless the platform meets the required security and compliance standards.

## 20. Marketplace Integration

The Order Management System must integrate with:

- User Management.
- Product Management.
- Inventory Management.
- Shopping Cart.
- Checkout.
- Payment Management.
- Shipping Management.
- Location Management.
- Seller Management.
- Notifications.
- Reviews and Ratings.
- Promotions and Discounts.
- Financial Management.
- Analytics and Reporting.

## 21. Future Capabilities

Future development may include:

- Automated order routing.
- Intelligent fulfillment.
- AI-powered fraud detection.
- Delivery time predictions.
- Advanced order analytics.
- Automated invoice generation.
- Subscription orders.
- Scheduled deliveries.
- International marketplace expansion.
- Advanced dispute management.

## 22. Core Principles

The Afghan Market Order Management System must be:

- Global.
- Scalable.
- Secure.
- Reliable.
- Multi-vendor.
- Multi-currency.
- Transaction-safe.
- Auditable.
- Customer-focused.
- Seller-friendly.

Afghan Market must provide a unified and trustworthy order management experience for customers and sellers worldwide.
