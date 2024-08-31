---
publish: true
---
```swift
// Run-time construction
let runtimeString = #"\d+"#
let digits = try Regex(runtimeString)
// digits: Regex<AnyRegexOutput>
```