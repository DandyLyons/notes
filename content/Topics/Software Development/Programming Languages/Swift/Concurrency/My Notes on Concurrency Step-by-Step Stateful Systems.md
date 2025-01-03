---
publish: true
---
*These are my notes on Matt Massicote's blog post from Dec. 30, 2024.* 

**Original post**: [Concurrency Step-by-Step: Stateful Systems | massicotte.org](https://www.massicotte.org/step-by-step-stateful-systems)  
>You know what? Coming up with example material is hard. This might sound silly or like it doesn’t matter that much, but it really does! Of course, a great example helps keep things understandable. It makes writing a lot more enjoyable too. But, writing is still a lot of work.

This is so true! There is such a difficult loop that comes from writing, realizing I need to change code, then realizing I need to rerun the code in my project to ensure that the blog post does what it says it will do. 

---
## The term “reentrancy”

> **This is just a plain old race condition. But, it isn’t a data race. We do not have multiple threads reading/writing the same spots in memory. I prefer to call these kinds of things “logical” races.** (If there is a more correct term, however, please do let me know!)
> 
> Interestingly, you do not even need to have multiple threads to have logical races. You just need some way for multiple things to happen at the same time. A single threaded-program with a runloop is enough. As soon as you can have non-synchronous execution, you can have logical races.

This is such a great observation, and I think it is my biggest takeaway from this post! 

---
### Using the actor

```swift
private func press() {
	Task {
		await system.toggleState()
		self.state = await system.state
	}
}
```

> Recall that isolation inference has made this `press` method `@MainActor`. This, in turn, means that the `Task` body will inherit `@MainActor` too. This is why it is ok to assign to `self.state` here.

This is accurate, but I think there is an important detail that is worth calling out. First, **why** does it inherit `@MainActor`? It's because the `View` protocol is `@MainActor`. However, until very recently <u>this was not the case</u>. So I think many who are not aware of the recent change would mistakenly think that they need to explicitly mark `press()` as `@MainActor`. [FatBobMan's article](https://fatbobman.com/en/posts/swiftui-views-and-mainactor/) covers this more in depth. 

> it isn’t up to the the programmer to remember, or even **understand** how or why `self.state` must be accessed on the main thread. This requirement is encoded into the type system, allowing the compiler to ensure it is happening.

Great callout, and this is yet another positive thing about the Swift concurrency system. 

> We have now introduced not one, but **two** asynchronous steps. The first is the `Task`, which enqueues its block onto the main queue. And then there’s another when we make our async call into the `RemoteSystem`.

If I'm not mistaken I see **three** asynchronous steps in `press()`: 
1. the `Task`
2. `await system.toggleState()`
3. `self.state = await system.state`

Every `await` is asynchronous. And the `Task` is a bit of a special case. From the point of view of the function `press()`, the Task is synchronous. It simply spins up the Task and then moves on. We call this "fire and forget". By creating a Task we are defining a piece of work, but that work is not yet executed. So from the point of view of inside the Task, it is asynchronous. This is similar to how completion handler works, where we synchronously define a closure, that is then executed later asynchronously. 

But there is a crucial difference between a Task and a completion handler. We don't actually determine directly **when** the work will be executed. That's the job of the Swift [Executor](https://developer.apple.com/documentation/swift/executor). We don't have direct access or control of the executor. (That being said, it is possible now to replace a non-deterministic Executor with a deterministic Executor in tests.) We are able to isolate work to prevent data races via the use of an `Actor`, semaphores or other methods. But we are not directly **executing** the work, the Executor is. This means that the order that the Tasks are executed is not deterministic, unless the Executor has deterministic behavior. (Pointfree does a fantastic in-depth study of this in [this video](https://www.pointfree.co/episodes/ep241-reliable-async-tests). Sorry, the video is behind a paywall, but it's totally worth a view, and you can get up to one of their videos for free.)

It's also worth mentioning that creating the actual Task object itself is a non-trivial amount of work. A Task must remember its isolation context and be able to be cancelled. And while Task may look like a lightweight value type because it is a struct, it really is a reference type and does not behave like a typical struct (see [Why is \`Task\` a \`struct\` when it acts so much more like a reference type? - Using Swift - Swift Forums](https://forums.swift.org/t/why-is-task-a-struct-when-it-acts-so-much-more-like-a-reference-type/61970)). Because of all this it takes time for the system to allocate the memory necessary to create the Task, and that delay can further exasperate order execution issues. We incur this cost every time we spin up a new task. But this same cost is not incurred every single time if we for example use an AsyncStream. 

In particular, I'd like to call out an assumption you might have that is incorrect: 

>  We have now introduced not one, but **two** asynchronous steps. The first is the `Task`, which **enqueues** its block onto the main queue.

The word "enqueue" seems to imply that the Tasks are in a "queue". And calling something a queue typically means that items are first-in-first-out. But unfortunately, this is not necessarily the case here. Perhaps a more accurate word would be "schedule". We are scheduling a Task. The Task is isolated in some fashion (by an Actor, semaphore, or it could be unchecked). But the Task is actually executed by the Executor. "Schedule" implies that we are defining work to be done later, but it does not imply the order of that work. However "schedule" isn't entirely accurate either. In fact, the documentation explicitly says: 

>When you create an instance of `Task`, you provide a closure that contains the work for that task to perform. Tasks can start running immediately after creation; <u>you don't explicitly start or schedule them.</u>

In human terms, a schedule is when I define the order of events that will happen. In Swift, that's what the Executor does. By analogy, a Task is like an item in a todo list. Isolation is sort of like defining some of the requirements of the todo (Task B must be done after Task A. Things like that.) And the Executor is sort of like the actual schedule in the calendar. 

---
## Adding Delays

> Because async code, by design, looks really similar to synchronous code. And, in my opinion, **that’s** why it is more susceptible to logical races. They don’t (yet) stand out to us because it all looks so similar to synchronous code.

This is a good callout. I'm not quite sure if I agree with it completely. Does it "not stand out" because it looks synchronous, or does it not stand out because Swift concurrency is a new and evolving paradigm and we are still building a mental model around it? I think it's the latter. It's true that we could fall into the trap of thinking of async code in synchronous terms, because it's written in a synchronous "style", but thankfully Swift requires us to explicitly mark async code with keywords like `await`, so I think that that largely fixes that problem. 

>`usleep(delayRange.randomElement()!)`

I'm curious what `usleep()` is. I haven't seen it before. I don't know what the u means. Of course Task also has it's own sleep method, which may be helpful here, but it must be used in an asynchronous context, so it might not be great here if we're trying to keep the example simple. 

---
## Focusing on the race
>All we’ve done here is add a simple guard. If the work has already started, do nothing. If not, mark it started, actually do the work, and then mark it complete.

It might be good to actually change this `if` to a `guard`. While it doesn't actually change anything, it makes the purpose clearer when read. Here's another pattern that could be interesting: 

```swift 
private func press() {
	Task {
		if inProgress {
			return
		} else {
			self.inProgress = true
			await system.toggleState()
			self.state = await system.state
			
			self.inProgress = false
		}
		
		
	}
}
```

---
## Critical Sections

>Maybe you’ve disabled buttons or added spinners, but solutions usually look about the same.

I think it's worth calling out that this is both an engineering problem and a design problem. Returning early solves the engineering problem, but it also creates a new design problem. It doesn't give the user feedback. The button is still enabled, and will display a pressed animation. So the user will think that something happened, but nothing actually happened because we returned early. 

In this case, the design problem can also help mitigate the engineering problem: 

```swift 
var body: some View {
	HStack {
		Button("Toggle") { press() }
			.disabled(inProgress)
		if inProgress { ProgressView() }
	}
}
```

Here, the user is unable to fire off `press()` if `inProgress` is `true`. Also, we inform the user that something is in progress so that they don't think that their device is being unresponsive. While it is a solution to the design problem, and it even helps mitigate the engineering problem, it is not a complete solution for the engineering problem. If `press()` can be called anywhere outside of the UI, then this UI solution doesn't help with that at all. 

> This `Task` body will always run on the main thread. This means that while more than one of these could potentially be **started**, only one can ever be executing the synchronous code within this closure.
> 
> We can argue over which approach is better, but this version is also race-free.

This assumes that the Tasks are run in the exact same order that they were started. Unfortunately, we cannot guarantee this because the Executor does not guarantee the order that the Tasks are executed. It is correct to say that this version is **data-race free** (because the Task is isolated to the main actor ), but it is not **logic-race free**. (By the way, I am so grateful that you defined a logical race to make this distinction.)

---
## Improving the Example

In the same way that you added `randomDelay()` to magnify a problem, I recommend the following change to magnify the order execution problem: 

```swift
actor RemoteSystem {
	private(set) var state = 0
	init() {}
	func increment() { state += 1 }
	func decrement() { state -= 1 }
}
```

This adds a little bit of complexity to the example because we must now implement two buttons, but hopefully it demonstrates how if the Executor orders execution in a non-deterministic order, that it can create non-deterministic state changes. Here, if the user taps increment and decrement, rapidly in various order, then the non-deterministic `Executor` order will create non-deterministic change in the `state` variable. (The final result will be the same after all of the Tasks have executed, but the intermediate state values will be different depending on the order that they are executed.)

## Conclusion
It's problematic to spin up a new Task every single time we want to perform work because we are not able to deterministically determine the order that those Tasks are executed[^1]. 

Another approach worth exploring is to create an ongoing async context using something like a long-living AsyncStream. In SwiftUI such an AsyncStream could be subscribed to inside of a `.task {}` using a `for await` loop. 

Or better yet, as you noted at the end, it would be better to not use an actor at all. 
# Footnotes

[^1]: I'm not sure if this is still true (as of 2025-01). See: [Matt Massicotte: "@dandylyons However I do want …" - Mastodon](https://mastodon.social/@mattiem/113753596260314955). The Swift devs say that [Task order is now deterministic](https://arc.net/l/quote/zkropfmj), and of course, I don't have any reason, not to believe them. But I am hesitant. This deterministic behavior was added with [SE-0431](https://github.com/swiftlang/swift-evolution/blob/main/proposals/0431-isolated-any-functions.md), which was a relatively late addition to Swift's concurrency model. Yet it is a non-trivial behavior change. There are more non-trivial proposals currently in work to change Swift's concurrency model. These will probably be improvements, but it's difficult to feel assured when someone says that something is deterministic when the core model is ever-shifting. 