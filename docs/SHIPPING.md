# Afghan Market – Global Shipping System

## 1. Global Strategy
Afghan Market is designed as a global multi-vendor marketplace.
The shipping system must support domestic and international deliveries.

## 2. Shipping Coverage
- Domestic shipping within the same country.
- International shipping between different countries.
- Import and export shipments.
- Support for worldwide shipping destinations.
- Configurable countries, regions, cities, and postal codes.

## 3. Shipping Calculation
Shipping costs must be calculated dynamically based on:
- Origin and destination countries.
- Origin and destination cities.
- Product weight and dimensions.
- Volumetric weight.
- Shipping distance and route.
- Shipping method.
- Shipping company.
- Remote-area surcharges.
- Customs and additional fees when applicable.

## 4. Shipping Methods
The system must support:
- Air freight
- Road transport
- Sea freight
- Express delivery
- Standard delivery
- Local delivery

Available methods depend on the route and shipping provider.

## 5. Multi-Vendor Shipments
- Products from different sellers may require separate shipments.
- Each shipment must have independent tracking and shipping costs.
- Customers must see the total shipping cost before checkout.
- Shipment consolidation should be supported when possible.

## 6. Shipping Providers
- Support multiple domestic and international carriers.
- Each provider may have different prices, routes, and delivery times.
- Provider integrations must be configurable.
- Shipment tracking must be supported.

## 7. Customs and International Trade
- Support import and export information.
- Calculate estimated customs duties and taxes when possible.
- Support customs documentation.
- Display whether customs charges are included or payable separately.
- Final customs charges must follow the destination country's regulations.

## 8. Currency Support
- Support multiple currencies.
- Display shipping costs in the customer's selected currency.
- Exchange rates must be configurable and regularly updated.
- Store original shipping amounts and currencies for accurate financial records.

## 9. Administration
Administrators must be able to manage:
- Countries and shipping zones.
- Shipping routes.
- Shipping providers.
- Shipping methods.
- Base shipping rates.
- Weight and volumetric pricing.
- Additional fees.
- Delivery estimates.
- Shipping restrictions.

## 10. Security and Accuracy
- Final shipping calculations must be validated by the backend.
- Frontend prices must never be trusted.
- Shipping rates and exchange rates must be auditable.
- All shipping cost changes must be recorded.

## 11. Future Capabilities
- Real-time shipping quotes.
- Automatic carrier selection.
- Shipment tracking.
- Delivery notifications.
- International logistics integrations.
- Returns and reverse logistics.
- Advanced shipping analytics.
