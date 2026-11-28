-- CreateEnum
CREATE TYPE "SellerOrganizationStatus" AS ENUM ('PENDING_REVIEW', 'ACTIVE', 'SUSPENDED', 'REJECTED');

-- CreateEnum
CREATE TYPE "StoreStatus" AS ENUM ('PENDING_REVIEW', 'ACTIVE', 'SUSPENDED', 'CLOSED');

-- CreateTable
CREATE TABLE "seller_organizations" (
    "id" UUID NOT NULL,
    "ownerId" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "slug" VARCHAR(180) NOT NULL,
    "legalName" VARCHAR(200),
    "description" VARCHAR(1000),
    "contactEmail" VARCHAR(320),
    "contactPhone" VARCHAR(30),
    "status" "SellerOrganizationStatus" NOT NULL DEFAULT 'PENDING_REVIEW',
    "verifiedAt" TIMESTAMPTZ(6),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "seller_organizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stores" (
    "id" UUID NOT NULL,
    "sellerOrganizationId" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "slug" VARCHAR(180) NOT NULL,
    "description" VARCHAR(1000),
    "province" VARCHAR(100),
    "city" VARCHAR(100),
    "address" VARCHAR(500),
    "contactPhone" VARCHAR(30),
    "status" "StoreStatus" NOT NULL DEFAULT 'PENDING_REVIEW',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "seller_organizations_slug_key" ON "seller_organizations"("slug");

-- CreateIndex
CREATE INDEX "seller_organizations_ownerId_idx" ON "seller_organizations"("ownerId");

-- CreateIndex
CREATE INDEX "seller_organizations_status_idx" ON "seller_organizations"("status");

-- CreateIndex
CREATE UNIQUE INDEX "stores_slug_key" ON "stores"("slug");

-- CreateIndex
CREATE INDEX "stores_sellerOrganizationId_idx" ON "stores"("sellerOrganizationId");

-- CreateIndex
CREATE INDEX "stores_status_idx" ON "stores"("status");

-- AddForeignKey
ALTER TABLE "seller_organizations" ADD CONSTRAINT "seller_organizations_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stores" ADD CONSTRAINT "stores_sellerOrganizationId_fkey" FOREIGN KEY ("sellerOrganizationId") REFERENCES "seller_organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

