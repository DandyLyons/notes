---
publish: true
---
## Docs
- [WWDC24: Meet Swift Testing | Apple - YouTube](https://www.youtube.com/watch?v=WFnkNcvLnCI&pp=ygUNc3dpZnQgdGVzdGluZw%3D%3D)
- [WWDC24: Go further with Swift Testing | Apple - YouTube](https://www.youtube.com/watch?v=bOvWGHi-BxI&t=5s&pp=ygUNc3dpZnQgdGVzdGluZw%3D%3D)

## Deep Dives
- [Swift and Tips | Mastering Swift Testing series](https://www.youtube.com/watch?v=zXjM1cFUwW4&list=PLHWvYoDHvsOV67md_mU5nMN_HDZK7rEKn&pp=iAQB) 
- [Swift Testing: Getting Started| Kodeco](https://www.kodeco.com/45333595-swift-testing-getting-started)

## Cheat Sheet
- `withKnownIssues` mark a failing test as known so that it will still pass. 
	- This is helpful for passing CI tests for issues that can't be fixed right now

## Use `#require` to unwrap
```swift 
let unwrapped = try #require(last, "the last value should be 4")
#expect(unwrapped == 4)
```
## Serial vs. Parallel
Swift Testing is parallel by default. 

To guarantee that a test suite is run in a particular order use `@Suite(.serialized`. By using this, you will guarantee that the tests are run in a particular order. However, **your tests will take longer because they cannot be run in parallel**.

## Migrating from XCTest
### Use `Issue.record` instead of `XCTFail`