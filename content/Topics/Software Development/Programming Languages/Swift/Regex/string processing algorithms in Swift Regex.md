---
publish: true
---
See: [swift-evolution/proposals/0357-regex-string-processing-algorithms.md at main · swiftlang/swift-evolution · GitHub](https://github.com/swiftlang/swift-evolution/blob/main/proposals/0357-regex-string-processing-algorithms.md#string-algorithm-additions) 

| Function                                                                                                                                                                   | Description                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `contains(_:) -> Bool`                                                                                                                                                     | Returns whether the collection contains the given sequence or `RegexComponent`                                   |
| `starts(with:) -> Bool`                                                                                                                                                    | Returns whether the collection contains the same prefix as the specified `RegexComponent`                        |
| `trimPrefix(_:)`                                                                                                                                                           | Removes the prefix if it matches the given `RegexComponent` or collection                                        |
| `firstRange(of:) -> Range?`                                                                                                                                                | Finds the range of the first occurrence of a given sequence or `RegexComponent`                                  |
| `ranges(of:) -> some Collection<Range>`                                                                                                                                    | Finds the ranges of the all occurrences of a given sequence or `RegexComponent` within the collection            |
| [replacing(:with:subrange:maxReplacements)](https://developer.apple.com/documentation/swift/rangereplaceablecollection/replacing(_:maxreplacements:with:)?changes=__5_4_5) | Replaces all occurrences of the sequence matching the given `RegexComponent` or sequence with a given collection |
| `split(by:)`                                                                                                                                                               | Returns the longest possible subsequences of the collection around elements equal to the given separator         |
| `firstMatch(of:)`                                                                                                                                                          | Returns the first match of the specified `RegexComponent` within the collection                                  |
| `wholeMatch(of:)`                                                                                                                                                          | Matches the specified `RegexComponent` in the collection as a whole                                              |
| `prefixMatch(of:)`                                                                                                                                                         | Matches the specified `RegexComponent` against the collection at the beginning                                   |
| `matches(of:)`                                                                                                                                                             | Returns a collection containing all matches of the specified                                                     |
## Deep Dives
- [Swift Regex with practical examples | Medium](https://blorenzop.medium.com/swift-regex-56eaf81e6d1e)

## Find and replace
- [Meet Swift Regex - WWDC22 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2022/110357/?time=708) 11:48

