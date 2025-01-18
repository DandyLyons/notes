---
publish: true
---
See: [Meet Swift Regex WWDC22](https://wwdcnotes.com/documentation/wwdcnotes/wwdc22-110357-meet-swift-regex/)

Swift Regex literal are compatible with Python, Perl and many others. 

```swift
// Regex literals
let digits = /\d+/
// digits: Regex<Substring>
```

## Syntax for Regex literals
Each language has its own "flavor" for (literal) regex syntax.

The Swift implementation is closely related to ICU (see [ICU documentation](https://unicode-org.github.io/icu/userguide/strings/regexp.html)). 

- Swift Regex literals start and end with `/`
- Strongly typed capturing groups
	- literals infer the strong types for all the internal captures



## Extended Delimiters
Syntax: 
- starts with `#/` and ends with `/#` 
- See: [Meet Swift Regex WWDC22](https://wwdcnotes.com/documentation/wwdcnotes/wwdc22-110357-meet-swift-regex/) at 10:45
- See: [WWDC22 Swift Regex: Beyond the Basics](https://wwdcnotes.com/documentation/wwdcnotes/wwdc22-110358-swift-regex-beyond-the-basics/) at 8:40 

When using extended delimiters: 
- slashes do not need to be escaped
- allows non-semantic whitespaces: 
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