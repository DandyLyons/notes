---
publish: true
aliases:
  - Debugging in Swift
---
| Mechanism                                                                                                                                             | Production                                           | Testing                                  | Debugging                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------- | -------------------------------------- |
| [[fatalError() in Swift]]                                                                                                                             | Terminates the app unconditionally                   | Terminates the test                      | Terminates the app unconditionally     |
| [[assertions in Swift]]                                                                                                                               | Completely ignored, no effect                        | Causes test failure if condition fails   | Terminates the app if condition fails  |
| Logger's  `.error(_:)`                                                                                                                                | Logs error message without terminating               | Logs error message without failing tests | Logs error message without terminating |
| Logger's  `.info(_:)`                                                                                                                                 | Logs informational message                           | Logs informational message               | Logs informational message             |
| [[IssueReporting\|`reportIssue()`]] by [[Topics/Software Development/Programming Languages/Swift/Helpful Resources/Pointfree.co/index\|pointfree.co]] | Shows unobtrusive warnings by default (customizable) | Becomes a test failure                   | Shows purple runtime warnings in Xcode |

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
- [[LLDB]]
## Resources
- [Project 18: Debugging - a free Hacking with Swift tutorial](https://www.hackingwithswift.com/read/18/overview) 
# Footnotes

[^1]: This strategy makes it so you no longer need to use the [[LLDB]] command `po` and can instead use `p` consistently everywhere. 