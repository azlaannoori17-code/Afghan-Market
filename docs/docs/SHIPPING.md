# Afghan Market – Shipping System

## 1. General Rules
- Shipping costs must be calculated automatically.
- Shipping prices must not be hardcoded.
- Shipping rates must be configurable by administrators.
- Customers must see shipping costs before confirming an order.

## 2. Shipping Calculation Factors
The shipping cost may depend on:
- Seller's province and city
- Customer's province and city
- Product weight
- Product dimensions and volumetric weight
- Shipping company
- Delivery method

## 3. Multi-Vendor Orders
- Each seller's products must be handled as a separate shipment when necessary.
- Each shipment must have its own shipping cost.
- The customer must see the total shipping cost for the complete order.

## 4. Shipping Zones
- Afghanistan's 34 provinces must be supported.
- Cities and districts must be configurable.
- Shipping routes between locations must be configurable.

## 5. Shipping Rates
Administrators must be able to configure:
- Base shipping fee
- Additional fee per kilogram
- Volumetric weight rules
- Remote-area fees
- Delivery method fees

## 6. Shipping Companies
The system must support multiple shipping companies.
Each company may have different rates and delivery times.

## 7. Future Features
- Shipment tracking
- Estimated delivery date
- Delivery status updates
- Shipping company dashboard
- Automatic shipping cost recalculation

## 8. Important
All shipping calculations must eventually be performed and validated on the backend.
The frontend must never be trusted as the source of the final shipping price.
