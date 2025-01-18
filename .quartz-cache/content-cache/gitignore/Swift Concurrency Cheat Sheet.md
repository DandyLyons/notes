---
publish: true
tags:
  - cheat-sheet
---
This page is intended to be a quick, glanceable view of Swift's broad concurrency features. It holds a list of [[#Code]]: language level keywords, protocols, attributes, types and methods. There's also a list of [[#Concepts]] which are necessary to understand the code. 

## Concepts: 
### Synchronous
- Synchronous operations **block** the current thread until the task is completed.
- Execution occurs in a sequential manner, waiting for each task to finish before moving on to the next[](https://github.com/IrelDev/SwiftConcurrencyCheatSheet).
### Asynchronous
- Asynchronous operations allow tasks to run independently of the main thread.
- They do not block the current thread, enabling other tasks to execute concurrently[](https://github.com/IrelDev/SwiftConcurrencyCheatSheet).
### Concurrency
- Concurrent operations handle **multiple simultaneous tasks**.
#### Unstructured Concurrency
See: [Explore structured concurrency in Swift | WWDC '21](https://wwdcnotes.com/documentation/wwdcnotes/wwdc21-10134-explore-structured-concurrency-in-swift/#Task-Cheat-sheet)  from 0:00 to 3:33
See: [[#What is "structure"?]] 

By default, Swift uses **Structured Concurrency**, however you can opt into **Unstructured Concurrency**. 
See docs: [Unstructured Concurrency | Swift Documentation](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/#Unstructured-Concurrency) 
#### Structured Concurrency
tl;dr; Swift provides various tools and features designed to guarantee, at compile-time, that our concurrent code is safe. 
###### Further Reading
- [Explore structured concurrency in Swift | WWDC '21](https://wwdcnotes.com/documentation/wwdcnotes/wwdc21-10134-explore-structured-concurrency-in-swift/#Task-Cheat-sheet) 
- See the rest of this cheat sheet.
### Data Race Safety

#### The Problem: Race Conditions
- A situation where the outcome depends on the timing or sequence of events in concurrent processes. 
- If multiple threads or processes access shared resources, it can lead to unpredictable results and bugs.
#### The Solutions
##### Sendability
- Sendability refers to the ability of data to be safely passed across concurrency boundaries.
- the `@Sendable` attribute can be applied to closures, and properties

##### Isolation
- Task isolation ensures that data across tasks is not shared in a manner that can introduce data races
- See [Data Isolation | Documentation](https://www.swift.org/migration/documentation/swift-6-concurrency-migration-guide/dataracesafety/#Data-Isolation) 
- Note: Isolation is an attribute of variables and functions, not types. 
- Types of isolation: 
	- Actor isolation: An [[#Actor]] will isolate all it's methods, and properties, by default. 
	- 
###### Further Reading
- [An Introduction to Isolation in Swift | massicotte.org](https://www.massicotte.org/intro-to-isolation) 

---
## Code

### `async` keyword
- allows a function to perform work without blocking the current thread.
- Functions marked with `async` can call other `async` functions and must be awaited.

### `await` keyword
- pauses the execution until the awaited operation completes.
- In an `actor`, `await` explicitly states [[#Actor Reentrancy]].

### `Sendable` protocol
- A protocol that indicates a type is safe to be transferred across concurrency boundaries.
- Types conforming to `Sendable` ensure that instances can be used safely in concurrent contexts.

#### `@Sendable` attribute
- An attribute that marks closures as safe to be used concurrently, ensuring they do not capture mutable state that could lead to data races.

#### `@unchecked Sendable`
- Used to manually assert that a type is `Sendable`, bypassing the compiler's automatic checks.
- It should be used with caution, as it places the responsibility for ensuring thread safety on the developer.

#### `@retroactive @unchecked Sendable`
- Allows retroactive conformance of a type to `Sendable` in a module that does not own the type, using unchecked conformance.
- It is useful for extending third-party types with `Sendable` conformance.

### `@preconcurrency` attribute
- Used to mark APIs that were available before Swift's concurrency model was introduced.
- Helps manage backward compatibility by suppressing certain concurrency-related warnings.

### `nonisolated`keyword
- Marks methods or properties as non-isolated
- opts out of the default isolation that an actor infers to all methods and properties. 
- Used for methods that do not access the actor's isolated state.

#### `nonisolated(unsafe)` keyword
- Similar to `nonisolated`, but used when the method might access isolated state unsafely.
- It is the developer's responsibility to ensure thread safety when using this attribute.

### `isolated` keyword
- may only be used on parameter declarations

### `actor` keyword
- A reference type that provides data isolation by ensuring that its state is accessed only by a single task at a time.
- Actors help prevent data races by serializing access to their internal state.
- All actors conform to the `Actor` protocol. 

### `Actor` protocol
- Every actor implicitly conforms to the `Actor` protocol[^1]
- Actors guarantee [[#Data Race Safety]]. 
- Actors do NOT guarantee [atomicity](https://en.wikipedia.org/wiki/Atomicity_(database_systems)).
	- This is because of [actor reentrancy](https://www.donnywals.com/actor-reentrancy-in-swift-explained/). 
#### Actor Isolation
The `Actor` protocol provides methods to inspect isolation: 
- [assumeIsolated(\_:file:line:)](https://developer.apple.com/documentation/swift/actor/assumeisolated(_:file:line:)) 
	- An unsafe function that allows you to assume an actor instance is isolated to the current task.
	- It should be used with caution, as it bypasses the usual concurrency checks and can lead to data races if used incorrectly.
- [assertIsolated(\_:file:line:) | Apple Developer Documentation](https://developer.apple.com/documentation/swift/actor/assertisolated(_:file:line:))
- [preconditionIsolated(\_:file:line:) | Apple Developer Documentation](https://developer.apple.com/documentation/swift/actor/preconditionisolated(_:file:line:))

#### `GlobalActor` protocol
- A protocol that defines a global actor, which provides a shared execution context for tasks.
- Global actors can be used to ensure certain tasks are executed in a specific context, such as the main thread.

> [!NOTE] Not the same as threads or queues
> Many will say that a GlobalActor is just like a thread or a queue (from GCD). This is not quite correct. Be aware that there are subtle differences.


##### `@globalActor` attribute
- An attribute used to declare a global actor, associating it with a specific execution context.

#### `MainActor`
- A predefined global actor that ensures tasks are executed on the main thread.
- Useful for updating UI components, which must be done on the main thread.
- Documentation: [MainActor](https://developer.apple.com/documentation/swift/mainactor) 

### `Mutex` type
- Documentation: [Mutex](https://developer.apple.com/documentation/synchronization/mutex)
- [[#`Sendable` protocol|Sendable]] type
- short for mutual exclusion (a.k.a. a lock). See [Lock (computer science) - Wikipedia](https://en.wikipedia.org/wiki/Lock_(computer_science))
- low-level control
- "Only one execution context at a time has access to the value stored within the `Mutex` allowing for exclusive access."
- Part of the [Synchronization](https://developer.apple.com/documentation/synchronization) framework in the standard library

### `sending` keyword
- Used to specify the sendability of a closure or function, ensuring it adheres to concurrency requirements.
- Helps in defining the concurrency behavior of closures passed across concurrency boundaries.

### `Task`
- Documentation: [Task](https://developer.apple.com/documentation/swift/task)
- Represents a unit of asynchronous work that can be awaited.
- Tasks can be created using `async` functions and managed with task groups or task priorities.
- Tasks can create children tasks. 

### TaskLocal
- Documentation: [TaskLocal](https://developer.apple.com/documentation/swift/tasklocal) 
- A Sendable wrapper type that can be read from a Task

### `withCheckedContinuation` method
- Documentation: [withCheckedContinuation](https://developer.apple.com/documentation/swift/withcheckedcontinuation(isolation:function:_:)) 
- A function that allows integration of callback-based asynchronous APIs with Swift's concurrency model.
- It provides a continuation that can be used to resume the asynchronous function once the callback completes.




## Further Reading
- [Official Swift 6 Migration Guide](https://www.swift.org/migration/documentation/migrationguide/) 
- [Modern Swift Concurrency Summary, Cheatsheet, and Thanks • Andy Ibanez](https://www.andyibanez.com/posts/modern-swift-concurrency-summary-cheatsheet-thanks/) 
- 


------
# Appendix
## What is "structure"? 
In the past, it was common for programmers to make heavy use of keywords like `goto`. This meant that any piece of code could be called from anywhere. This style of programming can be very powerful, but it can be incredibly difficult to read and understand. So programming languages added **structure** through concepts like **scope** and keywords like `for`. 
# Footnotes

[^1]: Just like how every class, implicitly conforms to `AnyObject`