---
publish: true
---
`.xcodeproj` is one of the basic file types in Xcode. They are super irritating for a variety of reasons, but they are unfortunately necessary. There is no way easy way to build apps for Apple programs without using Xcode and `.xcodeproj` files. 

For this and many other reasons, I decided to try [[Topics/Software Development/Apple Platforms/Xcode/Tuist/index|Tuist]]. 

## Why I can't stand `.xcodeproj` files
- groups that don't match the directory structure, 
- files that are shared across targets
- file references that point to non-existing files
- git merge conflict hell
- Everything is edited in a GUI (with a ton of bugs), which under the hood is editing a giant XML doc. 
- The GUI will often replace plist keys with human-friendly labels that don't match Apple's documentation. 

## Tools to make `.xcodeproj` files suck less
- [[Topics/Software Development/Apple Platforms/Xcode/Tuist/index|Tuist]] 
- [GitHub - bloomberg/xcdiff: A tool which helps you diff xcodeproj files.](https://github.com/bloomberg/xcdiff)
- [GitHub - yonaskolb/XcodeGen: A Swift command line tool for generating your Xcode project](https://github.com/yonaskolb/XcodeGen)