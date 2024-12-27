---
publish: true
---
Hot reloading is a technique whereby the developer can code the software while it is running, and any changes to data will loaded into the software while it is still "hot" (i.e. running). 

## Diff of Hot Reloading vs. Live Reloading
Some dev communities such as React have a concept called live reloading. ([[SwiftUI Previews in Xcode|SwiftUI Previews]] are another example similar to live reloading.) These are similar to hot reloading, however the behavior when a change is made is diiferent. When a change is made during live reloading, the app is reloaded with the change, and all app state is lost. But in hot reloading, the change is applied without restarting the app, and thus the app state is not lost. 

## Use Cases
- [[Hot Reloading in Swift]]. 