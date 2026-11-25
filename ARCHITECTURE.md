# Afghan Market — Global System Architecture

## 1. Project Overview

Afghan Market is a global-ready, multi-vendor e-commerce marketplace initially designed to launch in Afghanistan.

The platform connects customers, independent sellers, and Afghan Market's own official store through a unified digital commerce ecosystem.

The long-term vision is to support customers and sellers across multiple countries while maintaining a secure, scalable, maintainable, and reliable architecture.

The platform is planned to support:

- Web application
- Android application
- iOS application
- Seller management portal
- Administrative dashboard
- Centralized backend API
- Multi-country marketplace operations

All client applications will communicate with one centralized backend.

The backend will be the authoritative layer for business rules, permissions, transactions, and data access.

## 2. Business Model

Afghan Market will operate through two primary commerce models.

### 2.1 Afghan Market Official Store

Afghan Market will operate its own official store and sell products directly to customers.

The official store will be managed by authorized platform personnel.

Where practical, the official store will use the same catalog, listing, inventory, order, and payment architecture as independent sellers.

### 2.2 Multi-Vendor Marketplace

Independent sellers will be able to:

- Register as sellers.
- Create and manage seller organizations.
- Create one or multiple stores.
- Add products and product listings.
- Manage prices and inventory.
- Receive and process orders.
- Manage fulfillment and shipments.
- View financial reports.
- Track commissions and settlements.

Seller access must be restricted to authorized organizations and stores.

### 2.3 Sales Commission

The platform may charge commissions according to configurable business rules.

Commission calculations must be based on eligible transactions and clearly defined financial events.

Commission records must be auditable and connected to the financial ledger.

## 3. Technology Stack

The planned technology stack includes:

| Layer | Technology |
|---|---|
| Web Application | Next.js |
| Mobile Applications | React Native with Expo |
| Backend | NestJS |
| Database | PostgreSQL |
| ORM | Prisma |
| Cache and Background Jobs | Redis |
| API Architecture | REST |
| Programming Language | TypeScript |
| Package Manager | pnpm |
| Web Hosting | Vercel |
| File Storage | S3-compatible object storage |

The final hosting provider for the backend API and supporting infrastructure will be selected separately.

Technology choices may evolve when justified by security, scalability, performance, or operational requirements.

## 4. High-Level System Architecture

The planned system follows a centralized backend architecture.

```text
                  CUSTOMER / SELLER / ADMIN
                            |
             +--------------+--------------+
             |              |              |
          Web App       Android App      iOS App
             |              |              |
             +--------------+--------------+
                            |
                       REST API
                            |
                     NestJS Backend
                            |
             +--------------+--------------+
             |              |              |
        Domain Modules  Authentication   Validation
             |              |              |
             +--------------+--------------+
                            |
             +--------------+--------------+
             |              |              |
        PostgreSQL        Redis       Object Storage
             |
       Persistent Data
All client applications communicate with the centralized backend.
The backend is responsible for authentication, authorization, business logic, validation, and controlled access to persistent data.
Client applications must never connect directly to the production database.
5. Client Applications
5.1 Web Application
The web application will provide interfaces for:
Customers
Sellers
Store managers
Administrators
Support agents
The web application will be developed using Next.js.
5.2 Mobile Applications
Android and iOS applications will be developed using React Native with Expo.
Mobile applications will use the same backend APIs and business rules as the web application.
5.3 Shared Business Logic
Business rules must be enforced by the backend.
Client-side validation may improve user experience, but it must never replace server-side validation or authorization.
No client application may be trusted to calculate authoritative prices, commissions, balances, permissions, or inventory availability.
6. Backend Architecture
The initial backend will follow a modular monolith architecture using NestJS.
Each major business domain will have clearly defined responsibilities and boundaries.
This approach provides a manageable starting point without introducing unnecessary microservice complexity.
The architecture should allow individual modules to be separated into independent services later if actual scale and operational requirements justify it.
Planned backend modules include:
Authentication
User Management
Role and Permission Management
Seller Management
Store Management
Product Catalog
Product Listings
Categories and Brands
Inventory Management
Shopping Cart
Checkout
Order Management
Payment Management
Financial Ledger
Commission Management
Seller Settlements
Shipping and Delivery
Tax Management
Promotions and Discounts
Returns and Refunds
Reviews and Ratings
Search
Notifications
Customer Support
Analytics and Reporting
Administrative Operations
Audit Logging
Modules should communicate through clearly defined interfaces and application services.
7. Identity, Roles, and Permissions
The platform will support the following primary roles:
SUPER_ADMIN
The highest-level platform administrator.
Responsible for platform ownership, critical settings, system-wide administration, and protected operations.
ADMIN
An authorized administrator responsible for assigned platform management functions.
SELLER
A seller who manages authorized seller organizations, stores, listings, inventory, and orders.
CUSTOMER
A customer who browses products, manages an account, and places orders.
SUPPORT_AGENT
An authorized support representative who handles assigned customer and seller support operations.
7.1 Authorization Principles
The platform will use Role-Based Access Control (RBAC) combined with resource ownership and scope-based authorization.
Permissions must be enforced on the backend.
A role alone must not automatically grant access to every resource.
The backend must verify:
User identity
Assigned roles
Required permissions
Seller organization membership
Store membership
Resource ownership
Access scope
Resource status
Sensitive administrative operations must be protected by additional authorization and audit requirements.
8. Seller and Store Architecture
Seller organizations and stores must be separate business concepts.
A seller organization may own multiple stores.
A store belongs to one seller organization, except for the specially controlled Afghan Market official store.
The architecture must support:
Seller organizations
Multiple stores per seller
Store managers
Seller employees
Store-specific permissions
Store-specific inventory
Store-specific listings
Store-specific operational settings
Seller employees may receive different permissions and access scopes.
A seller must never access another seller's private organization, store, inventory, orders, or financial information without explicit authorization.
The Afghan Market official store must be managed through protected platform ownership rules.
9. Product Catalog and Listings
The platform will distinguish between canonical catalog products and seller-specific product listings.
9.1 Canonical Products
Canonical products represent the general product identity in the marketplace.
They may contain:
Product name
Description
Brand
Category
Attributes
Images
Product specifications
Variants
9.2 Product Variants
A product may have multiple variants.
Examples include:
Size
Color
Model
Capacity
Material
Variants must be identifiable independently when required for inventory and ordering.
9.3 Seller Listings
A seller listing represents a seller's offer for a product or product variant.
Each listing may have its own:
Seller
Store
Price
Currency
Stock availability
Condition
Listing status
Delivery options
Seller-specific information
Multiple sellers may offer the same canonical product with different prices and availability.
Catalog moderation and product approval rules will be managed centrally.
10. Inventory Management
Inventory must be managed at the appropriate seller, store, warehouse, and listing level.
The inventory architecture must support:
Stock quantities
Available quantities
Reserved quantities
Inventory movements
Stock adjustments
Warehouse locations
Stock transfers
Low-stock alerts
Inventory history
Inventory changes must be recorded consistently.
Checkout must use concurrency-safe stock reservation and confirmation processes.
PostgreSQL will remain the authoritative source of inventory data.
Redis may assist with temporary coordination or caching, but it must never become the authoritative inventory database.
11. Shopping Cart and Checkout
The shopping cart will support products from multiple sellers.
Cart items must reference valid seller listings and their relevant variants.
During checkout, the backend must revalidate:
Product and listing availability
Current prices
Inventory availability
Seller status
Store status
Shipping options
Applicable taxes
Discounts and promotions
Currency rules
The system must not trust prices or totals submitted by client applications.
An order must preserve the relevant product, price, seller, and transaction information as historical snapshots.
12. Order Management and Fulfillment
The platform must support multi-seller orders.
A customer may place one checkout containing products from multiple sellers.
The system should support:
One parent customer order
Separate seller suborders
Seller-specific fulfillment
Multiple shipments
Partial fulfillment
Order cancellation
Returns
Refunds
Delivery tracking
Each seller must only access authorized suborders and fulfillment information.
Order records must preserve historical snapshots so that later catalog or price changes do not alter completed transaction history.
Order status transitions must follow controlled backend rules.
13. Payments and Financial Architecture
The payment system will support integration with approved payment providers.
Payment operations must be securely handled by the backend.
13.1 Payment Security
The system must support:
Payment initiation
Payment confirmation
Payment failure handling
Refund processing
Verified payment webhooks
Idempotent payment operations
Transaction reconciliation
Raw payment card information must not be stored by Afghan Market unless a compliant payment architecture explicitly requires it.
13.2 Financial Ledger
Financial records must be maintained through an auditable ledger architecture.
The system should use double-entry accounting principles.
Financial events may include:
Customer payments
Seller proceeds
Platform commissions
Refunds
Payment fees
Seller settlements
Adjustments
Ledger entries must be immutable after posting.
Corrections must use appropriate reversing or adjusting entries rather than silently changing historical financial records.
13.3 Seller Settlements
Seller settlements must be calculated from verified financial transactions and platform rules.
The system must support settlement tracking, reconciliation, and audit history.
Seller balances must never be changed through uncontrolled direct updates.
Payment state, order state, and financial ledger state must remain separate but consistently related.
14. Shipping, Delivery, and Taxes
The platform will support country-aware shipping and delivery operations.
Planned capabilities include:
Delivery addresses
Shipping methods
Shipping rates
Shipment creation
Shipment tracking
Delivery status
Shipping provider integration
Seller-specific fulfillment
Multiple shipments per order
Tax calculations must follow the applicable market and jurisdiction rules.
Tax rates and calculated tax amounts must be preserved in transaction snapshots.
International shipping, customs, and cross-border tax requirements will be introduced according to supported markets and applicable laws.
15. Globalization and Localization
Afghan Market will initially focus on Afghanistan while maintaining an architecture suitable for future international expansion.
The platform should support:
Multiple countries
Multiple currencies
Multiple languages
Country-specific addresses
International phone numbers
Localized product content
Country-specific shipping
Market-specific tax rules
Time zones
Regional compliance requirements
Currency amounts must use appropriate precision and minor-unit handling.
Floating-point arithmetic must not be used for authoritative financial calculations.
Dates and timestamps should be stored consistently, preferably in UTC, and displayed using the relevant user or market time zone.
The architecture must not assume that every country, currency, payment provider, or shipping method is available at launch.
16. Search and Product Discovery
The platform will provide product search and discovery capabilities.
Planned features include:
Keyword search
Category filtering
Brand filtering
Price filtering
Seller filtering
Availability filtering
Sorting
Product recommendations
Search suggestions
PostgreSQL search capabilities may be used initially.
A dedicated search engine may be introduced later when traffic, relevance, or performance requirements justify it.
Search indexes must not replace the authoritative product and listing records in PostgreSQL.
17. Redis and Background Processing
Redis will be used as supporting infrastructure.
Potential uses include:
Temporary caching
Rate limiting
Background job queues
Short-lived coordination
Temporary session-related data
Performance optimization
Redis must not be treated as the permanent source of truth for:
Orders
Payments
Financial balances
Inventory
Seller ownership
Customer records
Critical business operations must remain recoverable from persistent database records.
Background jobs must support safe retries and duplicate processing protection.
18. File and Object Storage
Product images, seller documents, and other uploaded files will be stored using S3-compatible object storage.
PostgreSQL will store file metadata and references rather than large binary files whenever practical.
File handling must include:
File type validation
File size limits
Access control
Secure upload handling
Safe file naming
Protected private documents
Signed URLs where appropriate
Image processing when required
Private seller and customer documents must not be publicly accessible without authorization.
19. API Architecture
The backend will expose REST APIs for web and mobile applications.
The API should follow consistent conventions.
Planned standards include:
Versioned API routes, such as /api/v1
Request validation
Response consistency
Standardized error handling
Pagination
Filtering and sorting
Authentication
Authorization
Rate limiting
Idempotency for sensitive operations
API documentation
Data Transfer Objects (DTOs) will define and validate incoming requests.
API responses must not expose sensitive internal information.
OpenAPI documentation may be used to describe available endpoints and their contracts.
20. Security Architecture
Security must be considered across every application and backend module.
Core requirements include:
Secure authentication
Strong password hashing
Role-Based Access Control
Resource-level authorization
Seller tenant isolation
Server-side input validation
Secure API endpoints
TLS for network communication
Protected environment variables
Secure secret management
Rate limiting
Audit logging
Secure file uploads
Database backups
Dependency security review
20.1 Seller Data Isolation
Seller data isolation is a critical platform requirement.
The backend must derive the user's authorized seller and store scopes from verified identity and membership records.
The system must never trust a client-submitted seller ID or store ID as proof of authorization.
All seller-specific database queries must enforce the appropriate ownership and access scope.
PostgreSQL Row-Level Security (RLS) may be introduced as an additional defense-in-depth control where appropriate.
20.2 Administrative Security
Sensitive administrative actions must be restricted to authorized roles and recorded in audit logs.
Security controls must be tested before production deployment.
21. Data Consistency and Reliability
Critical business operations must preserve data consistency.
The architecture must use database transactions where multiple related records must be committed together.
Important reliability principles include:
Atomic database operations
Idempotent requests
Safe background job retries
Verified webhook processing
Duplicate event protection
Consistent order state transitions
Financial ledger integrity
Inventory consistency
Database backup and recovery
A transactional outbox pattern should be considered for reliable delivery of events and external side effects.
External payment, notification, and shipping operations must not be assumed successful until properly confirmed.
22. Database Architecture
PostgreSQL will serve as the primary relational database.
Prisma will be used as the planned ORM and database access layer.
The database design will support:
Users and identities
Roles and permissions
Seller organizations
Stores and memberships
Product catalog
Product variants
Seller listings
Inventory
Shopping carts
Orders and suborders
Payments
Financial ledger
Commissions
Settlements
Shipping
Taxes
Promotions
Returns and refunds
Reviews
Notifications
Audit logs
Analytics-related records
The detailed database architecture, relationships, constraints, and data integrity requirements are documented in DATABASE.md.
All database schema changes must be managed through controlled migrations.
23. Monorepo Structure
The planned monorepo structure is:
Afghan-Market/
│
├── apps/
│   ├── web/
│   ├── mobile/
│   └── api/
│
├── packages/
│   └── shared/
│
├── docs/
│
├── ARCHITECTURE.md
├── DATABASE.md
├── API.md
├── SECURITY.md
├── README.md
├── package.json
└── pnpm-workspace.yaml
This structure represents the planned organization.
Directories and applications will be added as their implementation phases begin.
The actual repository structure must be kept consistent with the implementation.
24. Deployment and Environments
The platform will use separate environments to reduce operational risk.
Planned environments include:
Local development
Automated testing and continuous integration
Staging
Production
Each environment must have isolated configuration, credentials, and data.
Production secrets must never be committed to the repository.
Deployments should use repeatable build and release processes.
Database migrations must be reviewed and applied in a controlled order, with backup and recovery procedures available.
The web application is planned for Vercel hosting.
The backend API, PostgreSQL, Redis, and object storage providers will be selected according to reliability, security, regional availability, and operating cost.
25. Testing and Quality Assurance
Testing must be introduced alongside implementation, not postponed until launch.
The quality strategy should include:
Unit tests for domain logic
Integration tests for database and module boundaries
API tests for authentication and authorization
End-to-end tests for critical customer and seller journeys
Security tests for access control and tenant isolation
Concurrency tests for inventory and checkout
Financial tests for ledger balance and idempotency
Migration and backup-recovery tests
Critical workflows must be tested for success, failure, retry, and duplicate-request scenarios.
Automated checks should run before changes are merged into the main branch.
No feature should be considered production-ready solely because its interface has been created.
26. Scalability and Performance
The initial architecture will prioritize correctness, maintainability, and operational simplicity.
A modular monolith is the starting point.
Microservices, dedicated search infrastructure, read replicas, and other distributed components should be introduced only when measured traffic or operational requirements justify them.
Performance practices should include:
Database indexing based on query patterns
Pagination for large result sets
Efficient API response sizes
Caching of safe, non-authoritative data
Background processing for slow tasks
Monitoring of database and application performance
Load testing of critical workflows
Scaling must preserve tenant isolation, financial integrity, and inventory correctness.
27. Development Roadmap
Implementation will proceed in controlled phases.
Phase 1: Foundation
Establish repository standards, workspace configuration, application foundations, environment configuration, database migrations, and automated quality checks.
Phase 2: Identity and Access
Implement authentication, user management, roles, permissions, seller organizations, stores, and membership scopes.
Phase 3: Catalog and Inventory
Implement canonical products, variants, seller listings, categories, product moderation, warehouses, and inventory operations.
Phase 4: Commerce
Implement carts, checkout, stock reservation, parent orders, seller suborders, order lifecycle, and fulfillment.
Phase 5: Payments and Finance
Implement payment-provider integration, verified webhooks, immutable double-entry ledger, commissions, refunds, reconciliation, and seller settlements.
Phase 6: Marketplace Operations
Implement shipping, taxes, promotions, returns, reviews, notifications, support, and administrative workflows.
Phase 7: Launch and Expansion
Complete security reviews, performance testing, operational monitoring, backup-recovery drills, launch readiness, and gradual market expansion.
The roadmap is a planning sequence. It does not imply that these capabilities are already implemented.
28. Related Architecture Documents
The following documents provide detailed domain-level requirements:
DATABASE.md — database structure, relationships, and integrity
API.md — API conventions and contracts
SECURITY.md — security requirements and controls
ANALYTICS.md — analytics and reporting
NOTIFICATIONS.md — notification architecture
RETURNS.md — returns and refunds
docs/USER-MANAGEMENT.md — users, roles, and permissions
docs/SELLER-MANAGEMENT.md — seller organizations and stores
docs/PRODUCTS.md — catalog, variants, and listings
docs/INVENTORY.md — inventory operations
docs/CART-CHECKOUT.md — cart and checkout workflows
docs/ORDERS.md — order lifecycle and suborders
docs/PAYMENTS.md — payments and financial operations
docs/SHIPPING.md — shipping and delivery
docs/TAXES.md — tax rules and calculations
docs/PROMOTIONS.md — promotions and discounts
docs/RETURNS.md — domain-level returns and refunds
docs/REVIEWS.md — reviews and ratings
docs/SEARCH.md — search and discovery
docs/LOCATIONS.md — geographic and localization requirements
docs/COMPLIANCE.md — regulatory and market compliance
docs/SUPPORT.md — customer and seller support
docs/DEPLOYMENT.md — deployment and environments
These documents must remain consistent with the global principles defined here.
29. Architecture Governance
Architecture changes must be deliberate, documented, and reviewed.
The following rules apply:
Security, authorization, and tenant isolation must be enforced by the backend.
PostgreSQL remains the authoritative source for persistent business data.
Financial ledger entries must be immutable after posting.
Inventory and checkout operations must be concurrency-safe.
Client applications must not be trusted with authoritative business calculations.
New modules must have clear ownership and boundaries.
Changes to shared contracts must be reflected in relevant documentation.
Database changes must use reviewed migrations.
Architectural decisions with long-term impact should be recorded in decision documents.
Dependencies must be reviewed before being introduced.
Breaking changes must be documented and coordinated across affected applications.
When implementation constraints require a deviation, the reason and consequences must be documented before the architecture is changed.
30. Project Status
Afghan Market is currently in the planning and foundation stage.
Architecture and domain documentation are being established before full backend implementation.
The presence of a planned component in this document does not mean that it has been built, deployed, tested, or made available to users.
Implementation status must be tracked separately and updated as working software is delivered and verified.
All future development must follow the documented architecture unless an approved architectural decision changes it.
