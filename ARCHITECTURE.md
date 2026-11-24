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
