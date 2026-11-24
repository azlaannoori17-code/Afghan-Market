# Afghan Market – Global Reviews and Ratings Architecture

## 1. Purpose

The Reviews and Ratings System allows customers to share their experiences and evaluate products and sellers across the Afghan Market global marketplace.

It must promote trust, transparency, authenticity, and accountability.

The system must be scalable, secure, multilingual, and resistant to fake reviews and manipulation.

## 2. Review Types

The platform must support:

- Product reviews.
- Product ratings.
- Seller reviews.
- Seller ratings.
- Verified purchase reviews.
- Text-based reviews.
- Image-based reviews.
- Video-based reviews.
- Anonymous public display when permitted by marketplace policy.

Product reviews and seller reviews must be stored and managed separately.

## 3. Review Ownership

Every review must be associated with:

- A customer.
- A product or seller.
- An optional order reference.
- A creation timestamp.
- A review status.

Customers must only manage their own reviews.

Sellers must only respond to reviews associated with their stores.

Administrators must have authorized moderation access.

## 4. Review Information

Each review should include:

- Unique review ID.
- Customer ID.
- Product ID when applicable.
- Seller ID when applicable.
- Order item ID when applicable.
- Rating.
- Review title.
- Review content.
- Attached media.
- Verified purchase status.
- Review status.
- Creation date.
- Last updated date.

The system must preserve the relationship between reviews and their original purchases.

## 5. Rating System

The platform should support a standard five-star rating system.

Ratings:

- 1 star: Very poor.
- 2 stars: Poor.
- 3 stars: Average.
- 4 stars: Good.
- 5 stars: Excellent.

The system must calculate:

- Average rating.
- Total number of ratings.
- Rating distribution.
- Recent rating trends.
- Verified purchase rating statistics.

Rating calculations must be performed on the server.

## 6. Verified Purchases

Only eligible customers with a confirmed purchase should receive verified purchase status.

The system must verify:

- Customer ownership of the order.
- Product ownership within the order.
- Order delivery or completion status.
- Review eligibility.
- Previous review submissions.

The verified purchase badge must not be granted through client-side requests.

Marketplace policies must define whether cancelled, returned, or refunded purchases remain eligible for reviews.

## 7. Review Submission

Eligible customers should be able to:

- Select a rating.
- Write a review title.
- Write review content.
- Upload product images.
- Upload product videos.
- Submit feedback.
- Edit their own reviews when permitted.
- Delete their own reviews when permitted.

The system must validate all submitted information.

## 8. Review Media

The platform should support:

- Product photographs.
- Customer-uploaded videos.
- Multiple media attachments.
- Secure media storage.
- File type validation.
- File size restrictions.
- Malware scanning.
- Content moderation.

Media must be processed and stored securely.

## 9. Review Moderation

Reviews must pass configurable moderation rules.

Review statuses may include:

- PENDING
- APPROVED
- REJECTED
- FLAGGED
- HIDDEN
- REMOVED

Moderation must support:

- Automatic content checks.
- Spam detection.
- Manual review.
- Policy violation detection.
- Reported review investigation.
- Moderation history.

Moderation decisions must be auditable.

## 10. Fake Review Prevention

The system must include protections against:

- Fake purchases.
- Duplicate reviews.
- Automated spam.
- Rating manipulation.
- Review exchange schemes.
- Incentivized dishonest reviews.
- Coordinated rating attacks.

Possible protections include:

- Purchase verification.
- Rate limiting.
- Suspicious activity detection.
- Duplicate content detection.
- Account behavior analysis.
- Administrative investigation.

No seller may create or purchase fake reviews.

## 11. Review Reporting

Customers and authorized users should be able to report inappropriate reviews.

Report reasons may include:

- Spam.
- Fake review.
- Offensive language.
- Harassment.
- Irrelevant content.
- Personal information exposure.
- Conflict of interest.
- Other policy violations.

Reports must be reviewed according to marketplace moderation policies.

## 12. Seller Responses

Sellers should be able to respond publicly to reviews associated with their products or stores.

The system must support:

- Public seller responses.
- Response editing within policy limits.
- Response moderation.
- Response timestamps.
- Administrative review.

Sellers must not be able to delete or alter customer reviews.

## 13. Customer Review Management

Customers should be able to:

- View submitted reviews.
- Edit eligible reviews.
- Delete eligible reviews.
- View seller responses.
- Track moderation status.
- Review their submission history.

All actions must respect marketplace policies.

## 14. Product Rating Integration

Product ratings must integrate with product pages and search results.

The platform should display:

- Average product rating.
- Total review count.
- Rating distribution.
- Verified purchase indicators.
- Recent reviews.
- Helpful review statistics.

Only approved reviews should contribute to public rating calculations.

## 15. Seller Rating Integration

Seller ratings must be calculated separately from product ratings.

Seller evaluations may include:

- Product accuracy.
- Communication.
- Packaging.
- Shipping experience.
- Customer service.

The platform must clearly explain how seller ratings are calculated.

## 16. Helpful Review Feedback

Customers may indicate whether a review was helpful.

The system must support:

- Helpful votes.
- Vote history.
- Duplicate vote prevention.
- Abuse prevention.
- Helpful review sorting.

Helpful vote totals must be calculated securely.

## 17. Multilingual Review Support

The platform must support reviews written in multiple languages.

It should support:

- Unicode text.
- Language identification.
- Language-based filtering.
- Original review preservation.
- Optional translated review display.

Translations must not replace the original review.

## 18. Review Notifications

Notifications may be sent when:

- A review is submitted.
- A review is approved or rejected.
- A seller responds.
- A review receives a response.
- A reported review is investigated.
- A moderation decision is made.

Notifications may use email, SMS, push notifications, and in-platform messages.

## 19. Administrative Review Management

Authorized administrators should be able to:

- View reviews.
- Search and filter reviews.
- Moderate reported content.
- Investigate suspicious ratings.
- Manage moderation policies.
- Review seller responses.
- Handle appeals.
- View moderation history.
- Generate review reports.

All administrative actions must be permission-controlled and audited.

## 20. Privacy and Security

The review system must implement:

- Server-side authorization.
- Customer data protection.
- Secure media uploads.
- Input validation.
- Rate limiting.
- Spam prevention.
- Audit logs.
- Privacy controls.
- Protection against personal information exposure.

Public reviews must not expose private customer information.

## 21. Marketplace Integration

The Reviews and Ratings System must integrate with:

- User Management.
- Product Management.
- Seller Management.
- Order Management.
- Inventory Management.
- Notifications.
- Search and Discovery.
- Analytics and Reporting.
- Administrative Moderation.

## 22. Future Capabilities

Future development may include:

- AI-assisted review moderation.
- Automatic spam detection.
- Review sentiment analysis.
- Verified image analysis.
- Personalized review recommendations.
- Advanced seller reputation analytics.
- Multilingual review translation.
- Review quality scoring.

## 23. Core Principles

The Afghan Market Reviews and Ratings System must be:

- Authentic.
- Transparent.
- Secure.
- Fair.
- Multilingual.
- Scalable.
- Privacy-focused.
- Resistant to manipulation.

Afghan Market must provide a trustworthy review experience for customers and sellers worldwide.
