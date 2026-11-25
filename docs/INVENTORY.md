# QAVENTRIX — Global Inventory Management Architecture

## 1. Purpose

The QAVENTRIX Inventory Management System manages product availability, stock quantities, reservations, warehouse operations, and inventory movements across the global marketplace.

It must support:

- Independent sellers.
- Multiple stores.
- Multiple warehouses.
- Multiple warehouse locations.
- Marketplace-owned inventory.
- Domestic and international operations.
- Multiple product variants.
- Multiple units of measurement.
- Global fulfillment operations.

The system must be scalable, accurate, secure, auditable, and transaction-safe.

## 2. Inventory Ownership

Every inventory balance must be associated with:

- An inventory owner.
- A seller organization when applicable.
- A store when applicable.
- A seller listing.
- A product.
- A product variant when applicable.
- A warehouse.
- A warehouse storage location.

QAVENTRIX must support two inventory ownership models:

1. Marketplace-owned inventory.
2. Seller-owned inventory.

The official QAVENTRIX store must operate using marketplace-owned inventory.

Independent sellers must manage only inventory belonging to their authorized seller organization and stores.

Administrators may access inventory according to their assigned permissions.

Inventory ownership must be enforced by the backend.

## 3. Product and Listing Relationship

Inventory must be associated with the seller listing rather than relying exclusively on the global product catalog.

The system must distinguish between:

- Global Product.
- Product Variant.
- Seller Listing.
- Seller-specific SKU.
- Inventory Balance.

A global product represents a shared catalog identity.

A seller listing represents an individual seller's offer for a product or variant.

Multiple sellers may offer the same global product while maintaining completely independent:

- Prices.
- SKUs.
- Inventory balances.
- Warehouse locations.
- Availability.
- Fulfillment policies.

A shared product catalog must never cause inventory records to be shared between sellers.

Inventory must not be responsible for managing seller pricing.

Pricing belongs to the Seller Listing and pricing architecture.

## 4. Inventory Data Structure

The inventory architecture should support the following database entities:

- warehouses
- warehouse_locations
- inventory_balances
- inventory_movements
- inventory_reservations
- inventory_reservation_items
- inventory_adjustments
- inventory_transfers
- inventory_transfer_items
- inventory_audit_records
- inventory_cost_records
- inventory_batches
- inventory_serial_numbers

These entities represent the planned logical data model.

Their final database definitions must remain consistent with DATABASE.md.

## 5. Inventory Balance Information

An inventory balance should contain:

- Inventory ID.
- Seller ID when applicable.
- Store ID when applicable.
- Seller Listing ID.
- Product ID.
- Product Variant ID when applicable.
- Warehouse ID.
- Warehouse Location ID.
- SKU reference.
- On-hand quantity.
- Reserved quantity.
- Damaged quantity.
- Quarantined quantity.
- Reorder threshold.
- Unit of measurement.
- Last updated timestamp.

Inventory balances must have a clearly defined ownership scope.

The system must prevent duplicate balance records for the same listing, warehouse location, and applicable inventory item.

Database constraints must enforce the required uniqueness.

## 6. Stock Definitions and Calculation

The system must distinguish between:

- Physical On-hand Stock.
- Reserved Stock.
- Available Stock.
- Damaged Stock.
- Quarantined Stock.
- In-transit Stock.

Definitions:

**On-hand Stock**

The total physical quantity currently received and recorded at a warehouse location.

It includes reserved, damaged, and quarantined quantities.

**Reserved Stock**

The quantity temporarily held for valid checkout or order commitments.

**Damaged Stock**

Physical inventory that cannot currently be sold because it is damaged.

**Quarantined Stock**

Inventory temporarily blocked from sale because it requires inspection, verification, or another authorized decision.

**Available Stock**

The quantity eligible for sale.

The standard calculation is:

Available Stock = On-hand Stock - Reserved Stock - Damaged Stock - Quarantined Stock

Additional inventory holds may be applied according to configured inventory policies.

**In-transit Stock**

Stock dispatched from a source warehouse but not yet received and accepted by the destination warehouse.

In-transit stock must not be included in destination available stock before receipt confirmation.

All quantity calculations must follow consistent rules and must never produce invalid negative available quantities.

## 7. Inventory Operations

The system must support:

- Initial stock registration.
- Stock increases.
- Stock reductions.
- Stock reservations.
- Reservation releases.
- Reservation commitments.
- Warehouse transfers.
- Stock adjustments.
- Damaged stock registration.
- Quarantine operations.
- Returned stock inspection.
- Inventory reconciliation.
- Inventory corrections.

Every inventory-changing operation must create an appropriate inventory movement record.

Historical movements must not be silently overwritten or deleted.

Corrections must be represented through new auditable movements.

## 8. Inventory Reservation

The system must temporarily reserve available stock during checkout.

A reservation must contain:

- Reservation ID.
- Related checkout session.
- Related order or order item when created.
- Seller Listing ID.
- Product Variant ID when applicable.
- Warehouse ID.
- Reserved quantity.
- Creation timestamp.
- Expiration timestamp.
- Reservation status.
- Idempotency reference.

Reservation statuses may include:

- ACTIVE
- COMMITTED
- RELEASED
- EXPIRED
- CANCELLED
- FAILED

Reservation rules:

1. The backend must validate listing and stock availability.
2. The system must reserve stock using transaction-safe operations.
3. A reservation must not exceed available stock.
4. Reservations must have configurable expiration rules.
5. Expired reservations must be released safely.
6. Failed checkout operations must release applicable reservations.
7. Successful order confirmation must follow the order commitment process.
8. Duplicate reservation requests must not reserve stock multiple times.

Reservation expiration must be processed reliably, including through background jobs.

## 9. Order and Payment Integration

Inventory reservations must be coordinated with checkout, order management, and payment processing.

The standard workflow should be:

1. Customer initiates checkout.
2. Backend validates product listings and quantities.
3. Inventory availability is checked.
4. Stock is temporarily reserved.
5. Checkout totals and shipping information are validated.
6. The order is created according to the order architecture.
7. Payment processing begins when required.
8. Successful order confirmation commits the reservation.
9. When a reservation is committed, the corresponding reserved quantity and on-hand quantity must be updated atomically. The operation must create an inventory movement record and must not deduct the same quantity more than once.
10. Failed, cancelled, or expired operations release the reservation according to the applicable workflow.


The system must support orders containing products from multiple sellers.

Each seller order item must reference the appropriate seller listing and inventory commitment.

Payment provider delays, duplicate callbacks, and temporary service failures must not cause duplicate stock deductions.

Inventory commitment and order status transitions must be coordinated through reliable transactional processing.

## 10. Overselling Prevention and Concurrency Control

The inventory system must prevent customers from purchasing unavailable stock during simultaneous transactions.

Required mechanisms include:

- Database transactions.
- Conditional stock updates.
- Atomic reservation operations.
- Appropriate row-level locking.
- Concurrency control.
- Database constraints.
- Idempotency keys.
- Inventory availability validation.
- Transaction rollback on failure.

Stock reservation must use a conditional database operation that succeeds only when sufficient available quantity exists.

The backend must never depend exclusively on stock values previously displayed to the customer.

The system must handle simultaneous purchases without overselling.

## 11. Multi-Vendor Inventory Isolation

Each seller must have independent inventory records.

The system must:

- Enforce seller ownership.
- Enforce store permissions.
- Prevent cross-seller inventory access.
- Support seller-specific warehouses.
- Support marketplace-owned warehouses.
- Maintain independent listing inventory.
- Maintain seller-specific stock movements.
- Protect seller inventory reports.

Seller identifiers supplied by clients must never be trusted without backend authorization.

Every inventory query and mutation must enforce the authenticated user's authorized seller and store scope.

PostgreSQL Row-Level Security may provide additional protection where appropriate.

## 12. Product Variants and Inventory Items

Inventory must support products with configurable variants.

Examples include:

- Size.
- Color.
- Material.
- Model.
- Storage capacity.
- Weight.
- Other product-specific attributes.

Each seller listing and applicable variant combination must have an appropriate inventory identity.

Variant inventory must remain separate where variants represent independently sellable items.

Products without variants must also be supported.

The system must support seller-specific SKU management without changing the identity of the global product.

## 13. Warehouse Management

The system must support:

- Warehouse registration.
- Warehouse identification.
- Warehouse ownership.
- Warehouse addresses.
- Country and region information.
- Warehouse operating status.
- Storage locations.
- Storage capacity.
- Warehouse access permissions.
- Warehouse inventory.
- Warehouse transfers.
- Warehouse activity history.

Warehouse types may include:

- Seller-owned warehouses.
- Marketplace-owned warehouses.
- Regional distribution centers.
- Fulfillment centers.
- Temporary storage locations.

A seller may operate multiple warehouses, including warehouses in different countries.

Warehouse ownership and access must be enforced by the backend.

## 14. Warehouse Storage Locations

Each warehouse may contain multiple storage locations.

Examples include:

- Zones.
- Aisles.
- Shelves.
- Racks.
- Bins.
- Other configurable storage areas.

Each storage location should have a unique identifier within its warehouse.

Inventory balances must support location-level tracking when enabled.

The system must support stock movement between storage locations inside the same warehouse.

Internal location transfers must not accidentally create or destroy inventory quantities.

## 15. Stock Transfers

The system must support transfers between authorized warehouses.

Each transfer should contain:

- Transfer ID.
- Source warehouse.
- Destination warehouse.
- Product.
- Product Variant when applicable.
- Seller Listing.
- Transfer quantity.
- Transfer status.
- Creation timestamp.
- Approval timestamp.
- Dispatch timestamp.
- Receipt timestamp.
- Responsible users.
- Transfer notes.
- Related inventory movements.

Transfer statuses may include:

- DRAFT
- PENDING
- APPROVED
- IN_TRANSIT
- PARTIALLY_RECEIVED
- RECEIVED
- CANCELLED
- FAILED
- DISPUTED

Transfer workflow:

1. Authorized user creates a transfer.
2. Source and destination warehouses are validated.
3. Transfer is approved when required.
4. Source stock is checked and committed for dispatch.
5. Dispatched quantities are removed from source on-hand stock.
6. Dispatched quantities are tracked as in-transit.
7. Destination warehouse receives the shipment.
8. Received quantities are verified.
9. Accepted quantities are added to destination on-hand stock.
10. Discrepancies are recorded and investigated.
11. Transfer is completed when all quantities are resolved.

The system must support partial receipts.

Lost, damaged, missing, or disputed transfer quantities must be recorded separately.

A transfer must never increase destination available stock before physical receipt and acceptance.

## 16. Low Stock and Reordering

The system should support configurable stock thresholds.

It should identify:

- Low-stock products.
- Out-of-stock products.
- Products requiring replenishment.
- Fast-moving products.
- Slow-moving products.
- Products with unusual stock movement.

Thresholds may be configured by listing, variant, warehouse, or storage location.

Authorized sellers may receive low-stock notifications.

Future versions may support:

- Purchase orders.
- Supplier management.
- Automatic replenishment.
- Replenishment recommendations.
- Demand-based stock planning.

## 17. Inventory Adjustments and Reconciliation

Authorized users must be able to perform inventory adjustments.

Every adjustment must contain:

- Adjustment ID.
- Seller and store scope when applicable.
- Product.
- Product Variant when applicable.
- Seller Listing.
- Warehouse.
- Storage Location.
- Previous quantity.
- Adjustment quantity.
- New quantity.
- Adjustment reason.
- Responsible user.
- Creation timestamp.
- Approval information when required.

Adjustment reasons may include:

- Physical stock count.
- Damaged goods.
- Lost goods.
- Found goods.
- Returned goods.
- Data correction.
- Inventory discrepancy.
- Other approved reasons.

High-impact adjustments may require additional approval.

All adjustments must create immutable audit records and corresponding inventory movements.

## 18. Returns and Restocking

Returned products must not automatically become available for sale.

The inventory system must support:

- Returned stock registration.
- Return receipt.
- Product inspection.
- Restock approval.
- Damaged return handling.
- Quarantine.
- Rejected return handling.
- Inventory restoration.

Only eligible products may be returned to available inventory.

Inventory restoration must follow the Returns and Refunds architecture.

A refund must not automatically increase available stock.

## 19. International Inventory Support

The inventory system must support international operations.

It must handle:

- Warehouses in different countries.
- International stock transfers.
- Country-specific product restrictions.
- Different time zones.
- Multiple units of measurement.
- International fulfillment locations.
- Import and export requirements.
- Regional inventory policies.

Inventory quantities must use consistent unit definitions.

Unit conversions must be explicit and validated.

Inventory timestamps must be stored in UTC.

Local warehouse time zones may be used for operational display and scheduling.

## 20. Batch, Serial Number, and Expiration Tracking

The system should support advanced inventory identification where required.

Capabilities may include:

- Batch tracking.
- Lot tracking.
- Serial number tracking.
- Manufacturing dates.
- Expiration dates.
- Product traceability.
- Recall management.

Products requiring batch or serial tracking must follow the applicable tracking rules.

The system must prevent duplicate active serial number assignments within the relevant ownership and product scope.

Expired or recalled inventory must not be available for sale.

These capabilities may be introduced incrementally without changing the core inventory ownership model.

## 21. Inventory Cost and Valuation

The system should support inventory valuation for authorized financial and reporting purposes.

Inventory cost records may include:

- Product or listing reference.
- Warehouse.
- Quantity.
- Unit acquisition cost.
- Cost currency.
- Acquisition date.
- Supplier reference when available.
- Applicable additional costs.
- Valuation method.

Supported valuation methods may include:

- FIFO.
- Weighted Average Cost.

The applicable accounting method must be configurable according to the platform's accounting policies and relevant legal requirements.

Inventory valuation must use acquisition cost rather than customer selling price.

Currency conversions must preserve the original currency, exchange rate, and valuation timestamp.

Inventory valuation must remain consistent with the financial architecture.

## 22. Inventory Notifications

Notifications may be generated for:

- Low stock.
- Out of stock.
- Reservation expiration.
- Reservation failure.
- Stock adjustments.
- Warehouse transfers.
- Failed transfers.
- Partial transfer receipts.
- Inventory discrepancies.
- Expiring products.
- Replenishment requirements.
- Recalled products.

Notifications may use:

- Email.
- SMS.
- Push notifications.
- In-platform messages.

Notification delivery must not be allowed to change inventory balances.

## 23. Seller Inventory Dashboard

Authorized sellers should be able to:

- View their inventory.
- View listing-level stock.
- Add stock.
- Update quantities through authorized operations.
- Manage warehouses.
- Manage storage locations.
- View stock movements.
- Monitor low-stock products.
- Review reservations.
- Manage eligible returned stock.
- Review inventory transfers.
- Export inventory reports.

Sellers must only access inventory belonging to their authorized organizations and stores.

Sensitive inventory operations must be validated by the backend.

## 24. Administrative Inventory Management

Authorized administrators should be able to:

- Monitor marketplace inventory.
- Review marketplace-owned stock.
- Manage authorized warehouse operations.
- Review stock discrepancies.
- Investigate inventory issues.
- Monitor seller inventory activity.
- Generate inventory reports.
- Review audit logs.
- Manage inventory policies.
- Approve restricted adjustments where permitted.

Administrative access must follow role-based and permission-based authorization.

Every sensitive administrative action must be recorded.

## 25. Inventory Reports and Analytics

The system should support:

- Current stock reports.
- Available stock reports.
- Reserved stock reports.
- Damaged stock reports.
- Quarantined stock reports.
- In-transit stock reports.
- Warehouse reports.
- Storage location reports.
- Stock movement reports.
- Inventory valuation.
- Low-stock reports.
- Out-of-stock reports.
- Inventory turnover.
- Historical inventory trends.
- Stock adjustment reports.
- Transfer discrepancy reports.
- Expiration reports.

Reports must respect seller data isolation and administrative permissions.

Financial inventory reports must follow the configured valuation policies.

## 26. Inventory History and Auditability

Every inventory-changing operation must produce an auditable history.

Inventory movement records should include:

- Movement ID.
- Inventory reference.
- Movement type.
- Quantity change.
- Previous balance where applicable.
- Resulting balance where applicable.
- Related order, reservation, adjustment, or transfer.
- Responsible actor.
- Idempotency reference.
- Creation timestamp.
- Reason or description.

Inventory movement history must be append-only.

Corrections must be represented through additional movements.

The system must preserve enough information to reconstruct and investigate inventory changes.

## 27. Security and Reliability

The inventory system must implement:

- Server-side authorization.
- Seller data isolation.
- Store-level permissions.
- Transaction-safe stock updates.
- Concurrency protection.
- Audit logging.
- Input validation.
- Secure API access.
- Idempotent operations.
- Reliable error handling.
- Database backups.
- Inventory reconciliation.
- Monitoring and alerting.

Critical inventory operations must never rely exclusively on client-side calculations.

Sensitive inventory data must be protected according to the platform's security architecture.

## 28. Marketplace Integration

The Inventory Management System must integrate with:

- Product Management.
- Product Variants.
- Seller Listings.
- Seller Management.
- Store Management.
- User Management.
- Shopping Cart.
- Checkout.
- Order Management.
- Payment Management.
- Shipping Management.
- Warehouse Management.
- Notifications.
- Returns and Refunds.
- Analytics and Reporting.
- Financial Management.

Integration workflows must preserve data consistency and ownership boundaries.

Cross-module operations must use reliable transactional or event-processing mechanisms.

## 29. Performance and Scalability

The inventory architecture must support growth in:

- Sellers.
- Stores.
- Products.
- Product variants.
- Warehouses.
- Storage locations.
- Inventory movements.
- Reservations.
- Orders.
- Concurrent customers.

The system should use:

- Appropriate database indexes.
- Efficient inventory queries.
- Transaction boundaries.
- Background processing.
- Controlled caching.
- Historical data retention policies.
- Monitoring of slow operations.

PostgreSQL remains the authoritative source of inventory data.

Redis may support caching, temporary coordination, and background processing but must not become the authoritative inventory database.

## 30. Future Capabilities

Future development may include:

- Barcode scanning.
- QR code inventory operations.
- RFID support.
- Automated warehouse management.
- AI-powered demand forecasting.
- Automatic replenishment.
- Inventory synchronization across sales channels.
- Advanced warehouse analytics.
- Real-time inventory monitoring.
- Supplier integrations.
- Automated purchase orders.
- Advanced stock optimization.

These capabilities must extend the existing architecture without compromising inventory consistency or security.

## 31. Core Principles

The QAVENTRIX Inventory Management System must be:

- Global.
- Scalable.
- Accurate.
- Secure.
- Multi-vendor.
- Multi-store.
- Multi-warehouse.
- Transaction-safe.
- Auditable.
- Reliable.
- Extensible.

QAVENTRIX must provide accurate inventory management for marketplace-owned and seller-owned products worldwide.
