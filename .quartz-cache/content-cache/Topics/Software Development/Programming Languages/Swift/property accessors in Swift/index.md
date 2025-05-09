---
publish: true
title: property accessors in Swift
aliases:
  - property accessors
  - property accessors in Swift
---
## `get` and `set`
- 

## `didSet` and `willSet`
The docs call these property observers. 

## `_read` and `_modify`

- [Yielding accessors in Swift](https://trycombine.com/posts/swift-read-modify-coroutines/)
- See [[Ownership in Swift]] 
- [Modify Accessors - Evolution / Pitches - Swift Forums](https://forums.swift.org/t/modify-accessors/31872) 

## init accessor
- [swift-evolution/proposals/0400-init-accessors.md at main](https://github.com/swiftlang/swift-evolution/blob/main/proposals/0400-init-accessors.md)
```swift
struct Angle {
  var degrees: Double
  var radians: Double {
    @storageRestrictions(initializes: degrees) // 👈🏼
    init(initialValue)  {
      degrees = initialValue * 180 / .pi
    }

    get { degrees * .pi / 180 }
    set { degrees = newValue * 180 / .pi }
  }

  init(degrees: Double) {
    self.degrees = degrees // initializes 'self.degrees' directly
  }

  init(radiansParam: Double) {
    self.radians = radiansParam // calls init accessor for 'self.radians', passing 'radiansParam' as the argument
  }
}
```
