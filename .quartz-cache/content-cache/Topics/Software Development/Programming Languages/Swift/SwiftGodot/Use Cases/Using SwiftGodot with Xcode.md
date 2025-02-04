---
publish: true
---
As of [[Xcode 16]], there appears to be an irritating bug where Xcode keeps forgetting how to find the types from [[Topics/Software Development/Programming Languages/Swift/SwiftGodot/index|SwiftGodot]], meaning you can't build. I've found 2 workarounds: 

1. Use **Clean Build Folder** in Xcode and then rebuild. 
	- This appears to work but I'm not sure how long it lasts, and I tend to need to redo this again and again. 
2. consider [[Using SwiftGodot with VS Code]], which does not appear to have this bug. 