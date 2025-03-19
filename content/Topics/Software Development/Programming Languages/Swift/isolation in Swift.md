---
publish: true
---
- [[Matt Massicote on Swift Isolation Intuition]] 
- [[An Introduction to Isolation in Swift by Matt Massicote]] 

## `@isolated(any)` vs. `@_inheritActorContext`
See: [Distinction between \`@isolated(any)\` and \`@\_inheritActorContext\` - Evolution / Discussion - Swift Forums](https://forums.swift.org/t/distinction-between-isolated-any-and-inheritactorcontext/75730)

>`@isolated(any)` allows you to recover the isolation of a function value as an `(any Actor)?` value. It has no impact on the inferred isolation of a closure whose type includes `@isolated(any)`, and that's where I think people get confused. If you take `@isolated(any)` away, isolation inference behaves exactly the same way. For non-`@Sendable`/`sending` closures, isolation is already effectively "inherited" from the enclosing context where the closure is formed.
> 
> `@_inheritActorContext` is only useful when you have a closure that either [[`@Sendable` in Swift|@Sendable]] or passed to a [[`sending` in Swift|sending]] parameter, and it applies the same isolation inference behavior that you would get if that closure didn't have those other concurrency annotations.
> - [[Holly Borla]]


