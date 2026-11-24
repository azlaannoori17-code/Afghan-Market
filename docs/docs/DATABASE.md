# Global Database Architecture

## 1. Overview

The Afghan Market database architecture defines how platform data is structured, stored, related, secured, and managed.

The database must support a global multi-vendor marketplace operating across multiple countries, currencies, languages, and regions.

The architecture must be scalable, reliable, secure, and maintainable.

## 2. Database Technology

The planned primary database technology is:

- PostgreSQL as the primary relational database.
- Prisma ORM for database access and schema management.
- Redis for caching and temporary data.
- Object storage for images, documents, and media files.

PostgreSQL will be the primary source of truth for transactional business data.

## 3. Database Design Principles

The database must follow these principles:

- Clear relational data modeling.
- Data consistency and integrity.
- Normalized database structures.
- Appropriate indexing.
- Secure data access.
- Transaction management.
- Scalable architecture.
- Reliable backup and recovery.
- Efficient query performance.
- Backward-compatible schema migrations where possible.

## 4. Global User Data

The database must support different user types:

- SUPER_ADMIN
- ADMIN
- SELLER
- CUSTOMER
- SUPPORT_AGENT

User-related entities should include:

- Users
- User profiles
- User roles
- Permissions
- User sessions
- Authentication records
- Email verification records
- Phone verification records
- Addresses
- Notification preferences
- Account security records

User accounts must support international email addresses and phone numbers.

## 5. Seller and Store Data

The marketplace must support multiple independent sellers.

Seller-related entities should include:

- Seller profiles
- Seller verification records
- Stores
- Store locations
- Store settings
- Store categories
- Seller documents
- Seller status records
- Seller financial accounts

Each seller must only access and manage their authorized business data.

## 6. Product Data

Product-related entities should include:

- Products
- Product translations
- Categories
- Category translations
- Brands
- Product images
- Product attributes
- Product variants
- Product specifications
- Product tags
- Product moderation records

Products must support multiple languages, categories, attributes, and international markets.

## 7. Inventory Data

Inventory-related entities should include:

- Inventory records
- Warehouses
- Warehouse locations
- Stock movements
- Stock reservations
- Inventory adjustments
- Inventory transfers
- Stock history

Inventory must support multiple sellers, warehouses, product variants, and locations.

Stock changes must be recorded consistently.

## 8. Cart and Checkout Data

Cart-related entities should include:

- Carts
- Cart items
- Cart item options
- Checkout sessions
- Shipping selections
- Applied coupons
- Cart pricing snapshots

The database must support guest carts, registered customer carts, and multi-vendor shopping carts.

## 9. Order Data

Order-related entities should include:

- Orders
- Order items
- Seller orders
- Order status history
- Order addresses
- Order notes
- Order cancellations
- Order returns
- Refund records

A single customer order may contain products from multiple sellers.

The system must preserve product names, prices, quantities, and other relevant purchase information as order snapshots.

## 10. Payment and Financial Data

Payment-related entities should include:

- Payments
- Payment transactions
- Payment methods
- Payment provider records
- Refunds
- Payment attempts
- Seller settlements
- Platform commissions
- Financial ledger entries
- Exchange rate records

Financial data must support multiple currencies.

Every monetary record must preserve its currency.

Currency precision must follow the applicable ISO 4217 currency rules.

Historical transactions must retain their original amounts and exchange-rate information.

The database must not store raw payment card numbers or CVV security codes.

## 11. Global Location Data

Location-related entities should include:

- Countries
- Regions
- States and provinces
- Cities
- Districts
- Postal codes
- Address records
- Time zones
- Country currency settings

The location architecture must support different administrative hierarchies across countries.

International country codes should follow ISO 3166 standards.

Currency codes should follow ISO 4217 standards.

## 12. Shipping Data

Shipping-related entities should include:

- Shipments
- Shipment items
- Shipping addresses
- Shipping methods
- Shipping providers
- Tracking records
- Delivery status history
- Shipping rate records
- Customs information

The database must support domestic and international shipping.

Orders containing products from different sellers may require separate shipments.

## 13. Reviews and Ratings

Review-related entities should include:

- Product reviews
- Seller reviews
- Rating records
- Review images
- Review responses
- Review reports
- Review moderation records
- Helpful review votes

The system must support verified purchase reviews and moderation.

## 14. Promotions and Discounts

Promotion-related entities should include:

- Promotions
- Coupons
- Discount rules
- Promotion products
- Promotion categories
- Promotion sellers
- Promotion usage records
- Customer eligibility records

The database must support global promotions, seller-specific discounts, and multi-currency pricing.

## 15. Notification Data

Notification-related entities should include:

- Notifications
- Notification templates
- Notification preferences
- Notification delivery records
- Notification channels
- Notification history

The system must support in-app, email, SMS, and push notifications.

Notifications must support multiple languages.

## 16. Database Relationships

The database must maintain clear relationships between major entities.

Examples include:

- A user can own a seller profile.
- A seller can manage multiple stores.
- A store can contain multiple products.
- A product can have multiple variants.
- A product can have multiple inventory records.
- A customer can have multiple orders.
- An order can contain multiple order items.
- An order can contain products from multiple sellers.
- An order can have multiple payments or payment attempts.
- A shipment can contain multiple shipment items.
- A product can have multiple reviews.
- A promotion can apply to multiple products.

Foreign keys and appropriate database constraints must enforce data integrity.

## 17. Database Naming and Identifier Standards

The database should follow consistent naming conventions.

Requirements include:

- Consistent table naming.
- Consistent column naming.
- Clear foreign key naming.
- UUID-based identifiers where appropriate.
- Explicit relationship definitions.
- Consistent timestamp fields.

Most important records should include:

- id
- created_at
- updated_at

Additional fields such as deleted_at should be used where soft deletion is appropriate.

## 18. Data Integrity and Transactions

The database must support:

- ACID transactions.
- Foreign key constraints.
- Unique constraints.
- Check constraints.
- Atomic financial operations.
- Consistent inventory updates.
- Safe order creation.
- Duplicate request prevention.

Critical operations involving payments, orders, and inventory must use appropriate database transactions.

## 19. Indexing and Performance

Database performance must be supported through:

- Primary key indexes.
- Foreign key indexes where appropriate.
- Composite indexes.
- Unique indexes.
- Search optimization.
- Query optimization.
- Pagination.
- Connection pooling.

Indexes must be selected according to actual query patterns and workload.

## 20. Multi-Currency and International Support

The database must support:

- Multiple currencies.
- International prices.
- Currency-specific precision.
- Exchange rate history.
- Multiple languages.
- Regional addresses.
- International phone numbers.
- Time zone information.
- Country-specific business settings.

The architecture must not assume that all users operate in Afghanistan or use Afghan currency.

## 21. Security and Data Access

Database security must include:

- Secure database credentials.
- Encrypted connections.
- Restricted database access.
- Role-based application permissions.
- Seller data isolation.
- Sensitive data protection.
- Secure backup storage.
- Audit logging for important operations.

Application authorization must be enforced on the server side.

Database access must follow the principle of least privilege.

## 22. Database Migrations and Version Control

All database schema changes must be managed through version-controlled migrations.

Migration requirements include:

- Consistent migration naming.
- Schema change tracking.
- Safe deployment procedures.
- Migration testing.
- Rollback planning.
- Data migration procedures.
- Production migration reviews.

Prisma schema definitions and migration files must remain synchronized.

## 23. Backup and Recovery

The database must support:

- Automated backups.
- Point-in-time recovery where supported.
- Backup encryption.
- Backup integrity verification.
- Recovery testing.
- Disaster recovery procedures.
- Backup retention policies.

Recovery objectives must be defined according to business requirements.

## 24. Scalability

The database architecture should support future growth through:

- Query optimization.
- Read replicas where appropriate.
- Connection pooling.
- Table partitioning when justified.
- Caching.
- Database monitoring.
- Workload separation where necessary.

Advanced scaling techniques should only be introduced when actual performance requirements justify them.

## 25. Audit and Data History

Important business operations should maintain historical records.

Examples include:

- Payment changes.
- Order status changes.
- Inventory movements.
- Seller account changes.
- Administrative actions.
- Financial adjustments.
- Permission changes.

Audit records must be protected against unauthorized modification.

## 26. Future Enhancements

Future database capabilities may include:

- Advanced search infrastructure.
- Data warehousing.
- Business intelligence.
- Analytics databases.
- Geospatial queries.
- Advanced reporting.
- Distributed data processing.
- Automated data quality monitoring.

## 27. Final Goal

The goal is to build a secure, reliable, globally scalable, and well-structured database architecture.

The Afghan Market database must provide a strong foundation for millions of products, customers, sellers, orders, payments, and transactions across multiple countries.

The architecture must support long-term growth without unnecessary complexity.
