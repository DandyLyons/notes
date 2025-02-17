---
author:
  - "[[Bruno Rocha]]"
contentPublished:
  - - 2018-10-29T12:23:13+00:00
noteCreated: 2025-02-10
url: https://swiftrocks.com/whats-type-and-self-swift-metatypes
subjects:
  - "[[metatypes in Swift]]"
---

Ah metatypes. That's another one for the list of _things I use everyday but couldn't explain in an interview if my life depended on it_.

Modern apps like social media hook you at a psychological level. Burnout Buddy helps you break free from addictive apps and heal their impact on your mental health. Try it and see the benefits for yourself; it's free and requires no account.

Metatypes are pretty useful in Swift, and you have certainly used it in multiple occasions. Unfortunately they look pretty weird in code, which can cause some confusion when trying to understand what they really are.

I for one know how these weird suffixes can confuse you, but don't worry, they are actually pretty straightforward once you get to know the differences between each of them. But before getting into that, let's take a step back:

## What's a Metatype?

If you take a look at Apple's docs, you'll see that a metatype is defined as being the **type of a type**. Wait, isn't `String` a type? What could possibly be type of a `String` that's already a type? `SuperString`??

It sounds weird in theory, but that's because we got used to Swift's syntax which specifically hides some of these details from us in order to make the language easy to use. To understand metatypes, try to stop seeing things as types and start seeing them more as **instances** and **classes** (the usage keyword, not the object!) instead.

Considering the following snippet: How would you define `SwiftRocks()` and `: SwiftRocks`?

```swift
struct SwiftRocks {
    static let author = "Bruno Rocha"
    func postArticle(name: String) {}
}

let blog: SwiftRocks = SwiftRocks()
```

You can say that `SwiftRocks()` is an object and `SwiftRocks` is its type, but instead, try seeing `SwiftRocks()` as an **instance**, and `: SwiftRocks` itself as the representation of the **type of an instance**. After all, you can call the instance method `postArticle()` from `blog`, but you can't access the class property `author`.

Now, how can we access `author`? The most common way would be through `SwiftRocks.author` which will directly return you a `String`, but I will ask you to forget about that one for a moment. Is there another way?

_I know that Bruno! You can call `type(of: blog).author`!_

Yup! That is also correct, as `type(of)` transforms something an object into something that allows you to access all class properties. But have you ever tried to call **just** `type(of: blog)` to see what would happen?

```swift
let something = type(of: blog) // SwiftRocks.Type
```

One of the weird suffixes! The **type of SwiftRocks** is `SwiftRocks.Type`, which means that `SwiftRocks.Type` is `SwiftRocks's` **metatype**.

By using Xcode's code completion on the `something` property, you'll see that a reference to a metatype allows you to use all of that type's class properties and methods, including `init()`:

```swift
let author: String = something.author
let instance: SwiftRocks = something.init()
```

That's very useful when you want a method to instantiate objects for you (like how `UITableView` cell reuse and `Decodable` work), access class properties or just overall do actions based on the type of an object. Doing so in a generic way is easy as you can pass metatypes as arguments:

```swift
func createWidget<T: Widget>(ofType: T.Type) -> T {
    let widget = T.init()
    myWidgets.insert(widget)
    return widget
}
```

Metatypes can also be used in equality checks, which I personally find handy when designing factories:

```swift
func create<T: BlogPost>(blogType: T.Type) -> T {
    switch blogType {
    case is TutorialBlogPost.Type:
        return blogType.init(subject: currentSubject)
    case is ArticleBlogPost.Type:
        return blogType.init(subject: getLatestFeatures().random())
    case is TipBlogPost.Type:
        return blogType.init(subject: getKnowledge().random())
    default:
        fatalError("Unknown blog kind!")
    }
}
```

You can define the metatype of any type, including classes, structs, enums and protocols as being the **name of that type followed by** `.Type`. In short, while `SwiftRocks` refers to the type of an instance (which only lets you use instance properties), the metatype `SwiftRocks.Type` refers to the type of class itself, which lets you use the `SwiftRocks's` class properties. "type of a type" makes a lot more sense now, right?

## type(of:) Dynamic Metatypes vs .self Static Metatypes

So `type(of)` returns the metatype of an object, but what happens if I don't have an object? Xcode gives me a compiler error if I try to call `create(blogType: TutorialBlogPost.Type)`!

To make it short, the reason you can't do that is the same reason why you can't call `myArray.append(String)`: `String` is the name of the type, not the value! To get a metatype as a value, you need to type the **name of that type followed by** `.self`.

If that sounds confusing, you can see it like this: Just like `String` is the type and `"Hello World"` is the value of an instance, `String.Type` is the type and `String.self` is the value of a metatype.

```swift
let intMetatype: Int.Type = Int.self
//
let widget = createWidget(ofType: MyWidget.self)
tableView.register(MyTableViewCell.self, forReuseIdentifier: "myCell")
```

`.self` is what Apple calls a **static metatype** - a fancy word for what is the compile time type of an object. You use that more than you expect - remember when I told you to ignore `SwiftRocks.author`? The reason was because writing that is the same as writing `SwiftRocks.self.author`.

Static metatypes are everywhere in Swift, and you implicitly use them every time you access a type's class property directly. You might find interesting that the `AnyClass` type used by a table's `register(cellClass:)` is just an alias for `AnyObject.Type`:

```swift
public typealias AnyClass = AnyObject.Type
```

On the other hand, `type(of)` will return a **dynamic metatype**, which is the metatype of the object's real, runtime type.

```swift
let myNum: Any = 1 // Compile time type of myNum is Any, but the runtime type is Int.
type(of: myNum) // Int.type
```

The actual contents of `type(of:)` and its `Metatype` return type are compiler magic (a subject for another article), but here's the method's signature:

```swift
func type<T, Metatype>(of value: T) -> Metatype {}
```

In short, if the subclass of an object matters, you should use `type(of)` in order to have access to that subclass's metatype. Otherwise, you can simply access the static metatype directly through `(name of the desired type).self`.

An interesting property of metatypes is that they are recursive, which means you can have meta-metatypes like `SwiftRocks.Type.Type`, but thankfully for our sanity, you can't do much with these as it's currently impossible to write extensions for metatypes.

## Protocol Metatypes

Although everything said before applies to protocols, they have an important difference. The following code will not compile:

```swift
protocol MyProtocol {}
let metatype: MyProtocol.Type = MyProtocol.self // Cannot convert value of...
```

The reason for that is that in the context of protocols, `MyProtocol.Type` doesn't refer to the protocol's own metatype, but the metatype of whatever type is **inheriting** that protocol. Apple calls this an **existential metatype**.

```swift
protocol MyProtocol {}
struct MyType: MyProtocol {}
let metatype: MyProtocol.Type = MyType.self // Now works!
```

In this case, `metatype` only has access to `MyProtocol` class properties and methods, but `MyType's` implementations will be called. To get the **concrete metatype** of the protocol type itself, you can use the `.Protocol` suffix. That's basically the same as using `.Type` on other types.

```swift
let protMetatype: MyProtocol.Protocol = MyProtocol.self
```

Because we're referring to the uninherited protocol itself, there's nothing you can really do with `protMetatype` besides simple equality checks like `protMetatype is MyProtocol.Protocol`. If I had to make a guess, I would say that a protocol's concrete metatype's purpose is more about making protocols work in the compiler side of things, which is likely why we never see it in iOS projects.

## Conclusion: More uses for Metatypes

Representing a type through a metatype can help you build very intelligent and type-safe generic systems. Here's an example of how we use them in deep link handlers to prevent having to deal with strings directly:

```swift
public protocol DeepLinkHandler: class {
    var handledDeepLinks: [DeepLink.Type] { get }
    func canHandle(deepLink: DeepLink) -> Bool
    func handle(deepLink: DeepLink)
}

public extension DeepLinkHandler {
    func canHandle(deepLink: DeepLink) -> Bool {
        let deepLinkType = type(of: deepLink)
        //Unfortunately, metatypes can't be added to Sets as they don't conform to Hashable!
        return handledDeepLinks.contains { $0.identifier == deepLinkType.identifier }
    }
}

//

class MyClass: DeepLinkHandler {
    var handledDeepLinks: [DeepLinks.Type] {
        return [HomeDeepLink.self, PurchaseDeepLink.self]
    }

    func handle(deepLink: DeepLink) {
        switch deepLink {
        case let deepLink as HomeDeepLink:
           //
        case let deepLink as PurchaseDeepLink:
           //
        default:
           //
        }
    }
}
```

[](https://burnoutbuddy.io/)

SPONSOR

![Sponsor icon](https://i.imgur.com/OHTdc17.png)

Modern apps like social media hook you at a psychological level. Burnout Buddy helps you break free from addictive apps and heal their impact on your mental health. Try it and see the benefits for yourself; it's free and requires no account.

And as a more recent example, here's how we use metatypes to represent and retrieve information about A/B tests (called "Experiments"):

```swift
if ExperimentManager.get(HomeExperiment.self)?.showNewHomeScreen == true {
    //Show new home
} else {
    //Show old home
}

// Experiment Manager

public static func get<T: Experiment>(_ experiment: T.Type) -> T? {
    return shared.experimentDictionary[experiment.identifier] as? T
}

public static func activate(_ experiment: Experiment) {
    shared.experimentDictionary[type(of: experiment).identifier] = experiment
}
```
