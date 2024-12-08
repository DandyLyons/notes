---
publish: true
docs:
---

> [!warning] Doesn't work inside an `extension`
> The `@Callable` macro only works in your class definition, and will not work on Swift class extensions.

## Gotchas
At the moment it seems like the Callable macro is broken if the function accepts Variant as a parameter.

See https://swiftongodot.slack.com/archives/C05BYJ95S5D/p1733424376946869 for updates.

```swift
@Callable func callable(_ variant: Variant) {
	GD.print("Called callable with \(variant)")
}
```
## Docs
- [Using Custom Types | Surfacing Methods](https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/documentation/swiftgodot/customtypes#Surfacing-Methods)
- [@Callable macro](https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/documentation/swiftgodot/callable()) 
- See also [[callables in Godot]] 