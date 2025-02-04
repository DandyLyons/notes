---
publish: true
---
## Better Printing
While debugging, it can be easy to get overloaded with irrelevant and poorly formatted logs in the console. Here are some strategies that can help. 

### Custom Type Summaries
From: (25:07) [WWDC24: Run, Break, Inspect: Explore effective debugging in LLDB | Apple - YouTube](https://youtu.be/PsW3RQN9R_Q?feature=shared&t=1557) 

Annotate your types with the `@DebugDescription` macro (after Swift 6).[^1] 

```swift
@DebugDescription

struct WatchLaterItem {
	let video: Video
	let name: String

	let addedOn: Date
	var debugDescription: String {
		"\ (name) - \(addedOn)"
	}
}
```

## See also
- [[Debugging in Xcode]]
- [[Debugging in Swift]] 
- [[LLDB]]
# Footnotes

[^1]: This strategy makes it so you no longer need to use the [[LLDB]] command `po` and can instead use `p` consistently everywhere. 