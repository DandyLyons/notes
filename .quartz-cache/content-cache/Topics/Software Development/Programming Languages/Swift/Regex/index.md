---
publish: true
aliases:
  - Regular Expressions in Swift
  - Regex in Swift
---
- See also: [[Topics/Software Development/Regular Expressions/index|Regular Expressions]] 
- [Regex | Apple Developer Documentation](https://developer.apple.com/documentation/swift/regex)
- [WWDC22 Regex: Beyond the Basics](https://wwdcnotes.com/documentation/wwdcnotes/wwdc22-110358-swift-regex-beyond-the-basics/) 
## Deep Dives
- [Swift Regex Deep Dive | Intro to Regular Expressions | Big Nerd Ranch](https://bignerdranch.com/blog/swift-regex/) 
- [Swift Regex with practical examples | Medium](https://blorenzop.medium.com/swift-regex-56eaf81e6d1e)

## Playgrounds
- [Swift Regex.com](https://swiftregex.com)
- [RegexBuilder Generator](https://paiv.github.io/swift-rxbgen/) 

## Overview
Regular expressions are a concise way of describing a pattern, which can help you match or extract portions of a string. You can create a `Regex` instance using regular expression syntax, either in a regex literal or a string.

```swift
// 'keyAndValue' is created using a regex literal
let keyAndValue = /(.+?): (.+)/
// 'simpleDigits' is created from a pattern in a string
let simpleDigits = try Regex("[0-9]+")
```

You can use a `Regex` to search for a pattern in a string or substring. Call `contains(_:)` to check for the presence of a pattern, or `firstMatch(of:)` or `matches(of:)` to find matches.

```swift
let setting = "color: 161 103 230"
if setting.contains(simpleDigits) {
    print("'\(setting)' contains some digits.")
}
// Prints "'color: 161 103 230' contains some digits."
```
When you find a match, the resulting [`Regex.Match`](https://developer.apple.com/documentation/swift/regex/match) type includes an [`output`](https://developer.apple.com/documentation/swift/regex/match/output) property that contains the matched substring along with any captures:

```swift
if let match = setting.firstMatch(of: keyAndValue) {
    print("Key: \(match.1)")
    print("Value: \(match.2)")
}
// Key: color
// Value: 161 103 230
```

When you import the `RegexBuilder` module, you can also create `Regex` instances using a clear and flexible declarative syntax. Using this style, you can combine, capture, and transform regexes, `RegexBuilder` types, and custom parsers.