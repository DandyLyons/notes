---
publish: true
---
## Docs
 - [Dependencies | Tuist](https://docs.tuist.io/guide/project/dependencies.html)
 - [Use Tuist with a Swift Package | Tuist](https://docs.tuist.io/guide/introduction/adopting-tuist/swift-package.html) 
	 - *Tuist supports using `Package.swift` as a DSL for your projects–It converts your package targets into a native Xcode project and targets.* 

## Local Dependencies

## External Dependencies

> [!quote] 
> ==Swift Packages are our recommended way of declaring dependencies== in your project. You can integrate them using:
> 1. Xcode's default integration mechanism or
> 2. using Tuist's XcodeProj-based integration.

### Tuist's XcodeProj-based SPM integration
Here we'll talk about the workflow where Tuist will read your Package.swift, and then generate a xcode project using XcodeProj.

> [!quote] 
> The `Package.swift` file is just an interface to declare external dependencies, nothing else. That's why you don't define any targets or products in the package.
#### Limitations

> [!Warning] From: [Use Tuist with a Swift Package | Tuist](https://docs.tuist.io/guide/introduction/adopting-tuist/swift-package.html)
> WARNING
> 
> The aim of this feature is to provide an easy way for developers to assess the impact of adopting Tuist and [Tuist Cloud](https://docs.tuist.io/cloud/what-is-cloud.html) in their Swift Packages. Therefore, we don't plan to support the full range of Swift Package Manager features nor to bring every Tuist's unique features like [project description helpers](https://docs.tuist.io/guide/project/code-sharing.html) to the packages world.

❓What are the limitations of Tuist's built-in SPM integrations? 
### XCode's Default SPM integration
If you want to use Xcode's default integration mechanism, you can pass the list `packages` when instantiating a project:

```swift
let project = Project(name: "MyProject", packages: [
    .remote(url: "https://github.com/krzyzanowskim/CryptoSwift", requirement: .exact("1.8.0"))
])
```

And then reference them from your targets:

```swift
let target = .target(name: "MyTarget", dependencies: [
    .package(product: "CryptoSwift", type: .runtime)
])
```

For Swift Macros and Build Tool Plugins, you'll need to use the types `.macro` and `.plugin` respectively.