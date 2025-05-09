---
publish: true
title: Swift Packages in Tuist
---


- Tuist also supports SPM package projects. If you are working on an SPM package, you shouldn't need to update anything. Tuist automatically picks up on your root `Package.swift` and all the features of Tuist work as if it was a `Project.swift` manifest.

To get started, run `tuist install` and `tuist generate` in your SPM package. Your project should now have all the same schemes and files that you would see in the vanilla Xcode SPM integration. However, now you can also run [`tuist cache`](https://docs.tuist.io/cloud/binary-caching.html) and have majority of your SPM dependencies and modules precompiled, making subsequent builds extremely fast.

## Sources
- Docs: [SPM | Tuist](https://docs.tuist.io/guide/project/directory-structure.html#swift-package) 