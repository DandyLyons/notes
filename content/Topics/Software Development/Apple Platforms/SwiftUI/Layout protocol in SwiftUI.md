---
publish: true
---
## Protocol Requirements
- [`sizeThatFits(proposal:subviews:cache:)`](https://developer.apple.com/documentation/swiftui/layout/sizethatfits(proposal:subviews:cache:)) reports the size of the composite layout view.
	- i.e. decides where **this** view will appear
- [`placeSubviews(in:proposal:subviews:cache:)`](https://developer.apple.com/documentation/swiftui/layout/placesubviews(in:proposal:subviews:cache:)) assigns positions to the container’s subviews.
	- i.e. tells the subviews where to appear
	- Note: this method **proposes** positions to the subviews. The subviews can choose to comply or ignore.

## Known Limitations
- Layout protocol cannot be lazy
	- See: [Quote from “The SwiftUI Layout Protocol - Part 1 - The SwiftUI Lab”](https://arc.net/l/quote/flaahqmm) 

## Docs
- [Compose custom layouts with SwiftUI - WWDC22 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2022/10056/)
- [Layout | Apple Developer Documentation](https://developer.apple.com/documentation/swiftui/layout) 

## Helpful Resources
- [[#SwiftUI Lab Deep Dive]]
- [The Layout Protocol - Swift Talk - objc.io](https://talk.objc.io/episodes/S01E308-the-layout-protocol?t=489)
- [SwiftUI Layout： The Mystery of Size | Fatbobman's Blog](https://fatbobman.com/en/posts/layout-dimensions-1/)

### SwiftUI Lab Deep Dive
- [The SwiftUI Layout Protocol - Part 1 - The SwiftUI Lab](https://swiftui-lab.com/layout-protocol-part-1/) 
	- [What is the Layout Protocol?](https://swiftui-lab.com/layout-protocol-part-1/#whatis)
	- [Family Dynamics of the View Hierarchy](https://swiftui-lab.com/layout-protocol-part-1/#family-dynamics)
	- [Our First Layout Implementation](https://swiftui-lab.com/layout-protocol-part-1/#first-layout)
	- [Container Alignment](https://swiftui-lab.com/layout-protocol-part-1/#container-alignment)
	- [Custom Values: LayoutValueKey](https://swiftui-lab.com/layout-protocol-part-1/#custom-values)
	- [Default Spacing](https://swiftui-lab.com/layout-protocol-part-1/#default-spacing)
	- [Layout Properties and Spacer()](https://swiftui-lab.com/layout-protocol-part-1/#layout-properties)
	- [Layout Cache](https://swiftui-lab.com/layout-protocol-part-1/#layout-cache)
	- [Great Pretenders](https://swiftui-lab.com/layout-protocol-part-1/#great-pretenders)
	- [Switching Layouts with AnyLayout](https://swiftui-lab.com/layout-protocol-part-1/#switching-layouts)
- [Part 1 Conclusion](https://swiftui-lab.com/layout-protocol-part-1/#conclusion)
- [The SwiftUI Layout Protocol - Part 2 - The SwiftUI Lab](https://swiftui-lab.com/layout-protocol-part-2)
	- [Custom Animations](https://swiftui-lab.com/layout-protocol-part-2/#custom-animations)
	- [Bi-directional Custom Values](https://swiftui-lab.com/layout-protocol-part-2/#bidirectional)
	- [Avoiding Layout Loops and Crashes](https://swiftui-lab.com/layout-protocol-part-2/#avoid-loops)
	- [Recursive Layouts](https://swiftui-lab.com/layout-protocol-part-2/#recursive)
	- [Layout Composition](https://swiftui-lab.com/layout-protocol-part-2/#composition)
	- [Another Composition Example: Interpolating Two Layouts](https://swiftui-lab.com/layout-protocol-part-2/#interpolation)
	- [Using Binding Parameters](https://swiftui-lab.com/layout-protocol-part-2/#binding)
	- [A Helpful Debugging Tool](https://swiftui-lab.com/layout-protocol-part-2/#tool)
	- [Final Thoughts](https://swiftui-lab.com/layout-protocol-part-2/#final)