---
publish: true
---
## Usage
### Declaration
```swift
@propertyWrapper struct UserDefaultsBacked<Value> {
    let key: String
    var storage: UserDefaults = .standard

    var wrappedValue: Value? {
        get { storage.value(forKey: key) as? Value }
        set { storage.setValue(newValue, forKey: key) }
    }
}
```

### Callsite
```swift
struct SettingsViewModel {
    @UserDefaultsBacked<Bool>(key: "mark-as-read")
    var autoMarkMessagesAsRead

    @UserDefaultsBacked<Int>(key: "search-page-size")
    var numberOfSearchResultsPerPage
}
```

## Sources
- [Property wrappers in Swift | Swift by Sundell](https://www.swiftbysundell.com/articles/property-wrappers-in-swift/)