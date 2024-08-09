---
publish: true
---
## Docs
- [In-App Subscriptions Made Easy – RevenueCat](https://www.revenuecat.com/docs/customers/customer-info)

## Usage
```swift
// Using Swift Concurrency
do {
    let customerInfo = try await Purchases.shared.customerInfo()
} catch {
    // handle error
}
// Using Completion Blocks
Purchases.shared.getCustomerInfo { (customerInfo, error) in
    // access latest customerInfo
}
```

It's safe to call `getCustomerInfo()` frequently throughout your app. Since the SDK updates and caches the latest [[CustomerInfo in RevenueCat|CustomerInfo]] when the app becomes active, the completion block won't need to make a network request in most cases.