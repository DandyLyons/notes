---
publish: true
---
[[Topics/Software Development/Programming Languages/Swift/SwiftGodot/index|SwiftGodot]] is not yet ready for [[Topics/Software Development/Programming Languages/Swift/Swift 6/index|Swift 6]]'s new concurrency model. In the meanwhile, this guide will show you how to get SwiftGodot running with Swift 6 tools. 

## Clearing Up Misconceptions
First we must understand the difference between Swift **tool versions** and **language modes**. 

The Swift **tool version** is the version of Swift that you have downloaded on your system. To find this version you can run `swift -version` in the terminal. 

The Swift **language mode** determines which version of Swift syntax you would like to use. This also determines which Swift language features you are able to use in your code. 

The Swift 6 **tool version** is able to run in the following language modes: 
- Swift 4
- Swift 4.2
- Swift 5
- Swift 6

## Incremental Adoption
The point is that it is completely fine to build a SwiftGodot project without accepting all of the latest Swift 6 concurrency features immediately. This transition will need to be incremental and gradual. 

That being said, if your are using the Swift 6 tools then you will need to suppress some warning in order to get your project to compile. This guide will provide helpful recommendations. 

## Use `@unchecked Sendable`
It is recommended to add `@unchecked Sendable` conformance to any type that has the [[@Godot macro]] attached to it. 

```swift 
@Godot class MyType: @unchecked Sendable {
	  // ...
}
```

This does not make your code any less safe than it was before Swift 6. Rather it is telling the compiler that you are opting out of strict sendability checking for this type. 

Not adding `@unchecked Sendable` to your `@Godot` types means that certain features like the [[@Callable macro]] will not compile. 
## Consider using `@preconcurrency import SwiftGodot`
Consider using `@preconcurrency import SwiftGodot` to import SwiftGodot. Certain features may not compile without using `@preconcurrency`. 

---
## See also
- [[Migrating from Swift 5 to 6]] 
- [[Topics/Software Development/Programming Languages/Swift/Swift 6/index|Swift 6]] 