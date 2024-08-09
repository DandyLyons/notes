---
publish: true
---
 ![WWDC23: Make features discoverable with TipKit | Apple - YouTube](https://www.youtube.com/watch?v=yppA9-n0fL4&pp=ygUMYXBwbGUgdGlwa2l0)

![Let's explore and discover TipKit 💡 (WWDC23) - YouTube](https://www.youtube.com/watch?v=0F9EXcQ1nw0) 
## Docs
- [TipKit | Apple Developer Documentation](https://developer.apple.com/documentation/tipkit)
	- [Tip protocol](https://developer.apple.com/documentation/tipkit/tip)
	- [TipView](https://developer.apple.com/documentation/tipkit/tipview) 
	- [Rule](https://developer.apple.com/documentation/tipkit/tips/rule) struct: A condition to meet before displaying a tip.
	- [Event](https://developer.apple.com/documentation/tipkit/tips/event) struct: A repeatable user-defined action.
		- An event is triggered by send a donation. 
		- TipKit handles persistence of these events for you. 
- WWDC: 
	- [Make features discoverable with TipKit - WWDC23 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2023/10229/)
	- WWDC Notes: [Make features discoverable with TipKit | WWDC NOTES](https://www.wwdcnotes.com/notes/wwdc23/10229/) 

## TipView
### Styling
>```swift
> TipView(tip)
>     .tipBackground(.blue.opacity(0.25))
> ```
> 
> As of right now, the tip specific view modifiers for `TipView` are: `.tipImageSize`, `.tipCornerRadius`, `.tipBackground`, and `.tipViewStyle`.
> - [Useful tips for implementing TipKit | Lickability](https://lickability.com/blog/useful-tips-for-implementing-tipkit/)


---
## Sources
- [Useful tips for implementing TipKit | Lickability](https://lickability.com/blog/useful-tips-for-implementing-tipkit/)
- Sean Allen tutorial: [SwiftUI Tooltips with TipKit (Popover & Inline Tips) - YouTube](https://www.youtube.com/watch?v=qlMxrwJfHaE)
- Flo writes Code: [Introduction to TipKit for iOS 17 - YouTube](https://www.youtube.com/watch?v=6DZNAXj3eaE&pp=ygUMYXBwbGUgdGlwa2l0)
- [Discovering app features with TipKit. Basics.](https://swiftwithmajid.com/2024/05/07/discovering-app-features-with-tipkit-basics/): a fantastic cheat sheet 
 