---
publish: true
aliases:
  - Swift Testing
---
[Swift Testing - Xcode - Apple Developer](https://developer.apple.com/xcode/swift-testing/) 
## Docs
- [GitHub](https://github.com/swiftlang/swift-testing)
- [Documentation](https://swiftpackageindex.com/swiftlang/swift-testing/main/documentation/testing)
- [WWDC24: Meet Swift Testing | Apple - YouTube](https://www.youtube.com/watch?v=WFnkNcvLnCI&pp=ygUNc3dpZnQgdGVzdGluZw%3D%3D)
- [WWDC24: Go further with Swift Testing | Apple - YouTube](https://www.youtube.com/watch?v=bOvWGHi-BxI&t=5s&pp=ygUNc3dpZnQgdGVzdGluZw%3D%3D)

## Deep Dives
- Video series: [Swift and Tips | Mastering Swift Testing series](https://www.youtube.com/watch?v=zXjM1cFUwW4&list=PLHWvYoDHvsOV67md_mU5nMN_HDZK7rEKn&pp=iAQB) 
- [Mastering the Swift Testing Framework | Fatbobman's Blog](https://fatbobman.com/en/posts/mastering-the-swift-testing-framework/#parameterized-testing)  
- [Swift Testing: Getting Started| Kodeco](https://www.kodeco.com/45333595-swift-testing-getting-started)

## Cheat Sheet
- `withKnownIssues` mark a failing test as known so that it will still pass. 
	- This is helpful for passing CI tests for issues that can't be fixed right now

### Use `#require` to unwrap
```swift 
let unwrapped = try #require(last, "the last value should be 4")
#expect(unwrapped == 4)
```

### Passing in parameters into a test
- See: [Mastering the Swift Testing Framework | Fatbobman's Blog](https://fatbobman.com/en/posts/mastering-the-swift-testing-framework/#parameterized-testing) 

```swift
@Test("Continents mentioned in videos", arguments: [
    "A Beach",
    "By the Lake",
    "Camping in the Woods"
])
func mentionedContinents(videoName: String) async throws {
    let videoLibrary = try await VideoLibrary()
    let video = try #require(await videoLibrary.video(named: videoName))
    #expect(video.mentionedContinents.count <= 3)
}
```

#### Passing multiple parameters
`arguments` can receive anything conforming to `Collection`.  Here are a few examples. 

```swift
// Array of Tuples
@Test(arguments: [(1, 2), (2, 4)])
func double(input: Int, result: Int) {
  #expect(input * 2 == result)
}

// Dictionary
@Test(arguments: [
  1: 2,
  2: 4,
])
func double(input: Int, result: Int) {
  #expect(input * 2 == result)
}

// multiple arrays
let input = [1,2]
let result = [2,4]
@Test(arguments: input, result)
func double(input: Int, result: Int) {
  #expect(input * 2 == result)
}

// zipped arrays
@Test(arguments: zip(input,result))
func double(input: Int, result: Int) {
  #expect(input * 2 == result)
}
```

## Serial vs. Parallel
Swift Testing is parallel by default. 

To guarantee that a test suite is run in a particular order use `@Suite(.serialized`. By using this, you will guarantee that the tests are run in a particular order. However, **your tests will take longer because they cannot be run in parallel**.

## Migrating from XCTest
### Use `Issue.record` instead of `XCTFail`

