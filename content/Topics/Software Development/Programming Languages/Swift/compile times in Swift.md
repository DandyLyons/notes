---
publish: true
---
## Why are compile times so slow? 
- [Why Swift's type checker is so slow ・ Daniel Hooper](https://danielchasehooper.com/posts/why-swift-is-slow/)
- https://www.cocoawithlove.com/blog/2016/07/12/type-checker-issues.html 

### Workarounds 
> You may have expressions in your code slowing down compile times. To find the worst offenders, run:
> 
> ```sh
> xcodebuild clean build -project <YOUR PROJECT FILE NAME>.xcodeproj/ OTHER_SWIFT_FLAGS="-Xfrontend -debug-time-expression-type-checking" | grep -Ei '^\d+\.\d+ms\t/.+$' | sort -r
> ```
> Use temporary variables to break the slow expressions into multiple statements. In addition, it might be worth adding `-Xfrontend` and `-warn-long-expression-type-checking=100` to your project’s “Other swift flags” build setting to be warned when an expression takes longer than 100 milliseconds to compile.
> - From: [Why Swift's type checker is so slow ・ Daniel Hooper](https://danielchasehooper.com/posts/why-swift-is-slow/)

