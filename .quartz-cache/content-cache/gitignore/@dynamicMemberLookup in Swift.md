---
publish: true
---

## Using KeyPaths
- [Combining dynamic member lookup with key paths | Swift by Sundell](https://www.swiftbysundell.com/tips/combining-dynamic-member-lookup-with-key-paths/)
- See [[KeyPaths in Swift]] 

```swift
@dynamicMemberLookup
class Reference<Value> {
    fileprivate(set) var value: Value

    init(value: Value) {
        self.value = value
    }

    subscript<T>(dynamicMember keyPath: KeyPath<Value, T>) -> T {
        value[keyPath: keyPath]
    }
}

class MutableReference<Value>: Reference<Value> {
    subscript<T>(dynamicMember keyPath: WritableKeyPath<Value, T>) -> T {
        get { value[keyPath: keyPath] }
        set { value[keyPath: keyPath] = newValue }
    }
}
```
## Using Strings

```swift
@dynamicMemberLookup
struct Settings {
    var colorTheme = ColorTheme.modern
    var itemPageSize = 25
    var keepUserLoggedIn = true

    subscript(dynamicMember member: String) -> Any? {
        switch member {
        case "colorTheme":
            return colorTheme
        case "itemPageSize":
            return itemPageSize
        case "keepUserLoggedIn":
            return keepUserLoggedIn
        default:
            return nil
        }
    }
}
```

## Sources
- [Combining dynamic member lookup with key paths | Swift by Sundell](https://www.swiftbysundell.com/tips/combining-dynamic-member-lookup-with-key-paths/) 