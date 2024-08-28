---
publish: true
title: Swift 6
aliases:
  - Swift 6
---
## Docs
- [Migrating to Swift 6 | Documentation](https://www.swift.org/migration/documentation/migrationguide/) 

## New Features
- htt

### Expression macro as caller-side argument

User-defined macros can now be used as a default argument, just like built-in macros. When user-defined macros are used as default arguments they are expanded at the call site; whereas when they are used as sub-expressions of default arguments, they are expanded at the place they are written. For example, consider the following functions using the `#MyFileID` macro.

Here is how the macro is expanded when it gets called from the app code.

### Pack Iteration

Swift 5.9 introduced parameter value and type parameter packs, which made it possible to write generic functions that accept an arbitrary number of arguments with distinct types. The most noticeable impact was that the 10 view limit in SwiftUI is removed. With Swift 6, we can now iterate over a value pack with for-in loops. This is an advanced feature of Swift and it may significantly impact SwiftUI APIs.

### Tuples Conform to Equatable, Comparable, and Hashable

Since tuples lacked the ability to conform to protocols, many developers stopped using tuples altogether in favor of structs that can conform to protocols. Tuples now conform to `Equatable`, `Comparable` and `Hashable` if their elements conform to the said protocols.

### Typed throws

- [Typed throws in Swift | Swift with Majid](https://swiftwithmajid.com/2024/08/20/typed-throws-in-swift/) 

## Swift 6 Language Mode
- [Docs: Enabling the Swift 6 Language Mode](https://www.swift.org/migration/documentation/swift-6-concurrency-migration-guide/swift6mode) 
- [Setting the Swift Language mode for an SPM Package – Donny Wals](https://www.donnywals.com/setting-the-swift-language-mode-for-an-spm-package/) 

## Sources
- [Swift 6 New Features. Apple had earlier mentioned that there… | by Md. Ibrahim Hassan | Mar, 2024 | Swiftify](https://blog.swiftify.com/whats-new-in-swift-6-e875ca675a28) 