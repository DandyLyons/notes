---
publish: true
title: concurrency in Swift
aliases:
  - concurrency in Swift
---
## Paradigms 
Swift supports [[#Language-level concurrency in Swift]], however, it is still early days and inevitably you will encounter prior paradigms of concurrency in Swift. You will need to understand these prior paradigms and how to interoperate between them. 

[[Topics/Software Development/Programming Languages/Swift/Helpful Resources/Pointfree.co/index|pointfree.co]] has a fantastic [series](https://www.pointfree.co/collections/concurrency/threads-queues-and-tasks)[^1] that is a deep-dive on the past, present, and future of concurrency in Swift. 

### Past: Threads
[Episode #190: Concurrency's Past: Threads](https://www.pointfree.co/collections/concurrency/threads-queues-and-tasks/ep190-concurrency-s-past-threads)

### Present: Queues
*Calling Queues the present is a bit relative. We are currently in the middle of a transition so language-level concurrency is becoming the new present.*
[Episode #191: Concurrency's Present: Queues and Combine](https://www.pointfree.co/collections/concurrency/threads-queues-and-tasks/ep191-concurrency-s-present-queues-and-combine)
### Future: Language-level concurrency in Swift

#### Tasks and Cooperation
[Episode #192: Concurrency's Future: Tasks and Cooperation](https://www.pointfree.co/collections/concurrency/threads-queues-and-tasks/ep192-concurrency-s-future-tasks-and-cooperation)

#### Sendable and Actors
[Episode #193: Concurrency's Future: Sendable and Actors](https://www.pointfree.co/collections/concurrency/threads-queues-and-tasks/ep193-concurrency-s-future-sendable-and-actors)
#### Structured and Unstructured
[Episode #194: Concurrency's Future: Structured and Unstructured](https://www.pointfree.co/collections/concurrency/threads-queues-and-tasks/ep194-concurrency-s-future-structured-and-unstructured)
- [Getting Started with Structured Concurrency in Swift - Swift on Server](https://swiftonserver.com/getting-started-with-structured-concurrency-in-swift/) 

## Cheat Sheet
- [3 MISTAKES to avoid when using Async / Await in Swift 😌 - YouTube](https://www.youtube.com/watch?v=QdP9IeiBOQ8) 
## Helpful Resources 
- [ConcurrencyRecipes – Swift Package Index](https://swiftpackageindex.com/mattmassicotte/ConcurrencyRecipes) 
- [[Ep. 43 with Holly Borla]] on Swift Package Indexing podcast 
- [Matthew Massicotte - The Bleeding Edge of Swift Concurrency - YouTube](https://www.youtube.com/watch?v=HqjqwW12wpw)  

# Footnotes

[^1]: Note: Pointfree's content is behind a paywall, so out of respect to them, I'll only be posting my personal notes, and will try not to give away everything that is in their paid episodes. That being said [[Topics/Software Development/Programming Languages/Swift/Helpful Resources/Pointfree.co/index]] is phenomenal and is worth the cost. If you would like to try it and get a month for free (as well as help me out with a free month) then please check out this [link](https://www.pointfree.co/subscribe/personal?ref=QiZXGdUd).