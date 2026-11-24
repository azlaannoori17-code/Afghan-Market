# Afghan Market — System Architecture

## 1. Project Overview

Afghan Market is a nationwide multi-vendor e-commerce platform designed to connect customers, independent sellers, and Afghan Market's own official store across Afghanistan.

The platform will support:
- Web application
- Android application
- iOS application

All platforms will use one shared backend and central database.

## 2. Business Model

### Afghan Market Official Store
Afghan Market operates its own official store and sells products directly to customers.

### Multi-Vendor Marketplace
Independent sellers can register, create stores, manage products, and sell to customers.

### Sales Commission
Commissions are calculated from actual completed sales according to platform rules.

## 3. Technology Stack

- Web: Next.js
- Mobile: React Native with Expo
- Backend: NestJS
- Database: PostgreSQL
- ORM: Prisma
- Cache and Background Jobs: Redis
- API: REST
- Programming Language: TypeScript
- Package Manager: pnpm
- Web Hosting: Vercel
- File Storage: S3-compatible object storage

## 4. Platform Applications

### Web Application
The main website for customers, sellers, and administrators.

### Mobile Applications
Android and iOS applications using the same backend and business logic as the website.

### Backend API
A centralized backend responsible for authentication, permissions, products, stores, orders, payments, and platform operations.

## 5. User Roles and Permissions

### SUPER_ADMIN
The platform owner and highest-level administrator.

Has full administrative access to platform operations, sellers, customers, products, orders, financial records, and system settings.

### SELLER
An independent seller who can manage only their own store, products, inventory, and orders.

### CUSTOMER
A customer who can browse products, manage their account, and place orders.

All permissions must be enforced on the server side.

## 6. Main Platform Modules

- Customer Management
- Seller Registration and Management
- Store Management
- Product Management
- Categories and Brands
- Product Search and Filters
- Shopping Cart
- Order Management
- Inventory Management
- Payment Management
- Delivery Management
- Commission Management
- Admin Dashboard
- Financial Reporting
- Notifications
- Authentication and Authorization

## 7. Shared Backend Architecture

The website, Android application, and iOS application will communicate with the same centralized NestJS backend through REST APIs.

All applications will use the same PostgreSQL database.

Business rules and access permissions will be managed centrally by the backend.

## 8. Security Principles

- Secure authentication
- Role-Based Access Control (RBAC)
- Strict seller data isolation
- Secure password hashing
- Server-side permission verification
- Input validation and sanitization
- Protected API endpoints
- Secure environment variables and secrets
- Administrative audit logs
- Database backups
- Secure file uploads

A seller must never access or modify another seller's private data.

## 9. Project Structure

The planned monorepo structure:

apps/
  web/
  mobile/
  api/

packages/
  shared/

docs/

All applications and shared packages will be managed through pnpm workspaces.

## 10. Development Roadmap

1. Project Foundation
2. Database Design
3. Authentication and Authorization
4. Customer and Seller Management
5. Store Management
6. Product and Inventory Management
7. Shopping Cart and Orders
8. Payment and Delivery Systems
9. Commission and Financial Management
10. Admin Dashboard
11. Mobile Applications
12. Testing and Security Review
13. Production Deployment

## 11. Quality and Scalability

The platform will be developed with a focus on:

- Maintainable architecture
- Strong security
- Reliable data management
- Scalable backend services
- Consistent experience across web and mobile
- Automated testing
- Long-term maintainability

## 12. Project Status

Status: Initial Development

Version: 1.0.0

Country: Afghanistan
