---
publish: true
docs: https://docs.tuist.io/
aliases:
  - Tuist
title: Tuist
---
Tuist is a tool that will create, build, and maintain [[Topics/Software Development/Apple Platforms/Xcode/index|Xcode]] project files. It is built on top of [XcodeProj](https://github.com/tuist/xcodeproj). 

Be sure to check out the following official resources: 
- [Docs](https://docs.tuist.io/)
	- DocC: [Documentation](https://tuist.github.io/tuist/main/documentation/projectdescription) 
- tuist [sample projects](https://github.com/tuist/tuist/tree/main/fixtures) (fixtures)
- [Tuist - YouTube](https://www.youtube.com/@tuistio/videos) 
- [Blog - Tuist](https://tuist.io/blog)
- [Join Tuist on Slack | Slack](https://join.slack.com/t/tuistapp/shared_invite/zt-1y667mjbk-s2LTRX1YByb9EIITjdLcLw) 
- [tuist/tuist · Discussions · GitHub](https://github.com/tuist/tuist/discussions) 


## Tuist 4
Tuist migrated from 3 to 4 in 2024-01.
**Release announcement**: [Unveiling Tuist 4 and Tuist Cloud - Tuist](https://tuist.io/blog/2024/02/07/unveiling-tuist-4-and-tuist-cloud/) 

**Migration Guide (docs)**: [From v3 to v4 | Tuist](https://docs.tuist.io/guide/introduction/from-v3-to-v4) 

## Cheat Sheet
### CLI Commands

| v4  name                                                               | pre-v4 name                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [tuist generate](https://docs.tuist.io/guide/automation/generate.html) | same                                                       | This command reads the manifest files, generates the Xcode projects and workspace, writes it to the disk, and opens it in Xcode.                                                                                                                                                                                                                                                                                                     |
| [tuist build](https://docs.tuist.io/guide/automation/build.html)       | same                                                       | generate the project if needed, and then build it with the `xcodebuild` command-line tool.                                                                                                                                                                                                                                                                                                                                           |
| [tuist test](https://docs.tuist.io/guide/automation/test.html)         | same                                                       | generate the project if needed, and then run the tests with the `xcodebuild` command-line tool.                                                                                                                                                                                                                                                                                                                                      |
| [tuist run](https://docs.tuist.io/guide/automation/run.html)           | same                                                       | (==iOS only==) generates the project if needed, then compiles it with `xcodebuild`, and launches the built artifact from the derived data directory in the specified simulator.                                                                                                                                                                                                                                                      |
| [tuist graph](https://docs.tuist.io/guide/automation/graph.html)       | same                                                       | export and visualize the graph of dependencies                                                                                                                                                                                                                                                                                                                                                                                       |
| [tuist clean](https://docs.tuist.io/guide/automation/clean.html)       | same                                                       | Tuist relies on project-scoped and global caches to speed up some of its workflows. If for any reason you want to clean these caches, you can use the `tuist clean` command.                                                                                                                                                                                                                                                         |
| `tuist install`                                                        | `tuist fetch`                                              | Download and install your remote dependencies.                                                                                                                                                                                                                                                                                                                                                                                       |
| `tuist cache`                                                          | `tuist cache warm`                                         | Tell tuist to cache your current binaries. This way the next time you build, it can simply reuse those binaries instead of rebuilding them.                                                                                                                                                                                                                                                                                          |
| `tuist scaffold`                                                       | same                                                       | generate files, you can generate files from a template. You can define your own templates or use the ones that are vendored with Tuist. See [[Templates in Tuist]]                                                                                                                                                                                                                                                                   |
| `tuist edit`                                                           | same                                                       | You could edit these files using any text editor, but we recommend to use Tuist-provided workflow for that, `tuist edit`. The workflow creates an Xcode project that contains all manifest files and allows you to edit and compile them. Thanks to using Xcode, you get all the benefits of **code completion, syntax highlighting, and error checking**.: See [Editing \| Tuist](https://docs.tuist.io/guide/project/editing.html) |
| `tuist generate`                                                       | [tuist focus](https://docs.old.tuist.io/2/commands/focus/) | `tuist focus` is now a part of `tuist generate`. You can call `tuist generate <TargetName1> [<TargetName2> ...]`                                                                                                                                                                                                                                                                                                                     |


## Helpful Resources
### Tutorials
- [Official blog: Implicitness in Xcode and SPM. Why Apple?](https://pepicrft.me/blog/2023/12/19/xcode-implicit-dependencies) 
- [Xcode Project File is Evil 😈 - Let's use Tuist | Gymlex Part 001 - Create an iOS app with SwiftUI - YouTube](https://www.youtube.com/watch?v=1inP-Y118p8&list=PLB8RAOcCIoizZAF3_YPGhpjIf0mA0RqB5) 