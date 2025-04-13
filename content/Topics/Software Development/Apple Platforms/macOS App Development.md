---
publish: true
---
## App Types
macOS confusingly supports many different types of apps including: 
- Native macOS apps built with [[AppKit]]. 
- Native macOS apps built with [[SwiftUI]]. 
- [[Mac Catalyst]] apps. 
- iOS apps running natively on Apple silicon macs: 
	- [iPad and iPhone apps on Apple silicon Macs - WWDC20 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2020/10114/) 

## Distribution
Mac apps can be distributed on the [[Mac App Store]] or they can be distributed outside the app store. 

### Distributing on Mac App Store
All apps on the app store are [[#Sandboxing|sandboxed]]. 

### Distributing outside the Mac App Store
Apps distributed outside the Mac App store must still be [[Notarization (Apple Platforms)|notarized]] or else macOS will provide a very poor user experience. 

## Sandboxing

