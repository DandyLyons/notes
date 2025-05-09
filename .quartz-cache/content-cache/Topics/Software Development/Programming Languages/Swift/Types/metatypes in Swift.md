---
publish: true
---

| Instance                             | Type          |
| ------------------------------------ | ------------- |
| "Hello World"                        | `String`      |
| `String.self` or `type(of:"Hello")`  | `String.Type` |

- A metatype is simply a type with `.Type` appended to it, e.g. `String.Type`
- A metatype instance can be specified by appending `.self` to a type, e.g. `String.self`
- To get a metatype instance at runtime, simply pass an instance to `type(of:)`
- Metatypes allow access to properties, methods, and initializers belonging to the type.
## Deep Dives
- [What's .self, .Type and .Protocol? Understanding Swift Metatypes](https://swiftrocks.com/whats-type-and-self-swift-metatypes) 
---
# Sources
- [Introduction to Swift Metatypes\| by Eman Harout \| Medium](https://medium.com/@emanharout/introduction-to-swift-metatypes-21949842d7a)