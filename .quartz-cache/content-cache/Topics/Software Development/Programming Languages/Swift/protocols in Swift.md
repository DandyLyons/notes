---
publish: true
date: 
aliases: 
title:
---
## Getting Started
- [Swift Standard Library Protocols – A guide to Equatable, Comparable, Hashable, and Identifiable. | Bugfender](https://bugfender.com/blog/swift-standard-library-protocols/) 

## Inheritance

### Inheritance Graphs
Swift heavily uses [protocol inheritance](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/#Protocol-Inheritance). Because of this there are deep chains of inheritance in the standard library and in Foundation as well as third party libraries. For this reason it can be very helpful to see a visual graph of the inheritance. 

#### SwiftDoc.org
SwiftDoc.org provides a valuable resource. You can see the inheritance graphs of protocols. For example, see: 

[Inheritance Graph for Int — SwiftDoc.org](https://swiftdoc.org/v3.0/type/int/hierarchy/)

There doesn't appear to be an easy way to find it on the site. Instead you need to write the correct URL path. For example: 
```
https://swiftdoc.org/v3.0/type/int/hierarchy/
or 
https://swiftdoc.org/v3.0/protocol/collection/hierarchy/
```

> [!warning] Old code
> SwiftDoc.org hasn't been updated since Swift 5.1. 

