---
publish: true
topics:
  - "[[Topics/Software Development/Programming Languages/Swift/Swift 6/index|Swift 6]]"
  - "[[Topics/Software Development/Programming Languages/Swift/Concurrency/index]]"
---

| Ep. Link | [Swift Package Indexing \| 43: Now I’m worried our metrics aren’t correct! with special guest Holly Borla](https://swiftpackageindexing.transistor.fm/episodes/43-now-i-m-worried-our-metrics-aren-t-correct-with-special-guest-holly-borla)<br> |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Subjects | Migrating to [[Topics/Software Development/Programming Languages/Swift/Swift 6/index\|Swift 6]]                                                                                                                                                  |
| Guest    | [Holly Borla](https://www.linkedin.com/in/hollyborla/) a Swift compiler engineer                                                                                                                                                                 |


> [!important] Must listen
> This episode is a must listen for any [[Topics/Software Development/Programming Languages/Swift/index|Swift]] developer.


## Takeaways

Migrating into Swift 6 is gradual and opt-in. 

### You control when you adopt Swift 6 features
[You control when you start adopting Swift 6 features | 45sec snip from Swift Package Indexing](https://share.snipd.com/snip/2eb87549-b402-402d-af4d-613dcfc323b4)
>If there's one thing that people take away from listening to this episode, it's that it is fully within your control when you decide when to tackle eliminating data races from your code.
### Swift 6 the compiler vs. the language mode
[Understanding the Difference Between Swift 6 Compiler and Language Mode | 2min snip from Swift Package Indexing](https://share.snipd.com/snip/bdc99ecb-de6b-47e7-8294-d4efdde4fed0)

>there's something really a little bit subtle in what you just said then, which is the difference there between Swift 6, the compiler, and Swift 6, the language mode. 
>...
>The Swift 6 compiler is just the first compiler version to offer the Swift 6 language mode. But **when you start using a Swift 6 tool chain that has this new compiler, your existing code will continue to build in the language mode it's already using.** So that might be Swift 4, Swift 4.2, or for most of you, it's probably Swift 5. And then **when you decide to opt in, you can migrate your project to the Swift 6 language mode**, either in your build settings or by changing your package manifest. And what that will do is it will start passing 6 to the Swift dash version flag, which is what configures the language mode. So when you start using the Swift 6 compiler, if you don't already have the complete concurrency checking flag enabled, you're not going to suddenly start seeing any data race issues in your project that will only come once you decide to migrate to the new language mode.

### Interoperating with over versions of Swift
[Flexibility in Swift language mode migration](https://share.snipd.com/post/9cf7293b-e14c-4623-89c8-6b4760fbd259) 

>So if you want to migrate your code to Swift 6, **it is not a problem if none of your dependencies have migrated to Swift 6. And then on the flip side, if one of your dependencies migrates to Swift 6, that does not mean you need to migrate.** You don't need to make any changes until you decide to migrate your code to the Swift 6 language mode.

### Two Step Migration to 6
[Two-step Approach to Migrating Apps for Concurrency | 1min snip from Swift Package Indexing](https://share.snipd.com/snip/6bcf7efd-3713-4364-b289-f906383ad36e)

>You should think about it in two different steps. 
>
>The first step is migrating to the Swift 6 language mode, which is, you know, addressing those data race safety errors that you get in your code with whatever library APIs you're currently using for concurrency, whether that's dispatch or whether you're primarily using the concurrency library, you know, that comes with Swift. Migrating to the Swift 6 language mode should not be like a major refactoring task in your code base. You don't need to go replace all of your dispatch queues with actors and you don't need to make major changes to the logic in your code unless, you know, that logic is prone to data races, of course. 
>
>And then separately, once you have eliminated data races from your code and you're getting the validation from the compiler, then you can actually go in and strategically, if you want to, replace uses of other concurrency primitives with, you know, the built-in language features like async await and actors. So I definitely view those as two different steps as part of like modernizing your app for data race safety and for concurrency.