---
publish: true
---
See: [Meet Swift Regex WWDC22](https://wwdcnotes.com/documentation/wwdcnotes/wwdc22-110357-meet-swift-regex/)

Swift Regex literal are compatible with Python, Perl and many others. 

```swift
// Regex literals
let digits = /\d+/
// digits: Regex<Substring>

// Run-time construction
let runtimeString = #"\d+"#
let digits = try Regex(runtimeString)
// digits: Regex<AnyRegexOutput>
```

## Extended Delimiters
See: [Meet Swift Regex WWDC22](https://wwdcnotes.com/documentation/wwdcnotes/wwdc22-110357-meet-swift-regex/) at 10:45

When using extended delimiters: 
- slashes do not need to be escaped
- whitespace is ignored
- below `date` is a named capture 
```swift
let regex = #/
	(?‹date>         \d｛2｝ / \d｛2｝/ \d｛4）
	(?<middle>       \P{currencySymbol}+)
	(?‹currency>     \p{currencySymbol})
/#
// Regex<(Substring, date: Substring, middle: Substring, currency: Substring)>
```