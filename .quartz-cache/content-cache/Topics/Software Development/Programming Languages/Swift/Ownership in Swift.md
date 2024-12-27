---
publish: true
---
>“_Ownership_ is the responsibility of some piece of code to eventually cause a value to be destroyed. An _ownership system_ is a set of rules or conventions for managing and transferring ownership.”
>- [Ownership Manifesto](https://github.com/swiftlang/swift/blob/0889142dc8ba80fcfba6ddc62909b1fc9e407ba8/docs/OwnershipManifesto.md#L4) 

|   |   |   |
|---|---|---|
|**Modifier**|**Caller**|**Callee**|
|**borrowing**|Remains owner of original value.  <br>  <br>No need to copy or retain value.  <br>  <br>Responsible for keeping it alive for the duration of the callee.|No need for a release.  <br>  <br>No implicit copying allowed.  <br>  <br>Explicit copying is required with a copy operator.|
|**consuming**|It can either give ownership of the original value to the callee OR retain or copy the value if it requires ownership of its own value.|Required to release the value.|
## Docs
- [Ownership Manifesto](https://github.com/swiftlang/swift/blob/0889142dc8ba80fcfba6ddc62909b1fc9e407ba8/docs/OwnershipManifesto.md#L4)
- [SE-0377: `borrowing` and `consuming` keywords]([SE-0377](https://github.com/swiftlang/swift-evolution/blob/main/proposals/0377-parameter-ownership-modifiers.md)) 

## Deep Dives
- [A Comprehensive Guide to Understanding Ownership in Swift | Infinum](https://infinum.com/blog/swift-ownership/) 

## keywords

### `borrowing` keyword

### `consuming` keyword

### `inout` keyword 