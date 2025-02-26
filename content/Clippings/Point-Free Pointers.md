---
title: Point-Free Pointers
author: 
contentPublished: 
noteCreated: 2025-02-24
tags:
  - clippings
  - article
description: A companion blog to Point-Free, exploring advanced topics in Swift.
takeaways: 
Status: ✅ Read
url: https://www.pointfree.co/blog
subjects:
  - sharing-grdb
---
**Original URL**: https://www.pointfree.co/blog
## Highlights
We are excited to announce the release of a brand new open source library: [SharingGRDB](http://github.com/pointfreeco/sharing-grdb). It’s an amalgamation of our [Sharing](http://github.com/pointfreeco/swift-sharing) library and Gwendal Roué’s [GRDB.swift](http://github.com/groue/grdb.swift), providing a suite of tools that can replace many usages of SwiftData while giving you direct access to the underlying SQLite, including joins, aggregates, common table expressions (CVE’s) and more!

Join us for an overview the library, and be sure to check out the [many case studies and demos](https://github.com/pointfreeco/sharing-grdb/tree/main/Examples) in the repo.

#### Overview

SharingGRDB is lightweight replacement for SwiftData and the `@Query` macro.

| SharingGRDB | SwiftData |
| --- | --- |
| ```swift @SharedReader(   .fetchAll(     sql: "SELECT * FROM items"   ) ) var items: [Item] ``` | ```swift @Query var items: [Item] ``` |

Both of the above examples fetch items from an external data store, and both are automatically observed by SwiftUI so that views are recomputed when the external data changes, but SharingGRDB is powered directly by SQLite using [Sharing](http://github.com/pointfreeco/swift-sharing) and [GRDB](http://github.com/groue/grdb.swift), and is usable from UIKit, `@Observable` models, and more.

It is not required to write queries as a raw SQL string, though for simple queries it can be quite handy. For more complex queries you are able to use GRDB’s query builder API:

```swift
@SharedReader(.fetchAll(Items())) var items

struct Items: FetchKeyRequest {
  func fetch(_ db: Database) throws -> [Item] {
    Item.all()
      .filter(!Column("isArchived"))
      .order(Column("title").desc)
      .limit(100)
      .fetch(db)
  }
}
```

For more information on SharingGRDB’s querying capabilities, see [Fetching model data](https://swiftpackageindex.com/pointfreeco/sharing-grdb/main/documentation/sharinggrdb/fetching).

Further, unlike the `@Query` macro from SwiftData, you are not limited to using it only in SwiftUI views. It can be used in `@Observable` classes, UIKit view controllers, and of course in SwiftUI views:

```swift
// Observable models
@Observable class ItemsModel {
  @SharedReader(.fetchAll(Items())) var items
  // ...
}

// UIKit view controllers
class ItemsViewController: UIViewController {
  @SharedReader(.fetchAll(Items())) var items
  // ...
}

// SwiftUI views
struct ItemsView: View {
  @State.SharedReader(.fetchAll(Items())) var items
  // ...
}
```

#### Quick start

Before SharingGRDB’s property wrappers can fetch data from SQLite, you need to provide–at runtime–the default database it should use. This is typically done as early as possible in your app’s lifetime, like the app entry point in SwiftUI, and is analogous to configuring model storage in SwiftData:

| SharingGRDB | SwiftData |
| --- | --- |
| ```swift @main struct MyApp: App {   init() {     prepareDependencies {       let db =         try! DatabaseQueue(           // ...         )       $0.defaultDatabase = db     }   }   // ... } ``` | ```swift @main struct MyApp: App {   let container = {      try! ModelContainer(       // ...     )   }()      var body: some Scene {     WindowGroup {       ContentView()         .modelContainer(           container         )     }   } } ``` |

> **Note**
> 
> For more information on preparing a SQLite database, see [Preparing a SQLite database](https://swiftpackageindex.com/pointfreeco/sharing-grdb/main/documentation/sharinggrdb/preparingdatabase).

This `defaultDatabase` connection is used implicitly by SharingGRDB’s strategies, like [`fetchAll`](https://swiftpackageindex.com/pointfreeco/sharing-grdb/main/documentation/sharinggrdb/sharing/sharedreaderkey/fetchall\(sql:arguments:database:animation:\)):

```swift
@SharedReader(.fetchAll(sql: "SELECT * FROM items"))
var items: [Item]
```

And you can access this database throughout your application in a way similar to how one accesses a model context, via a property wrapper:

| SharingGRDB | SwiftData |
| --- | --- |
| ```swift @Dependency(\.defaultDatabase)  var database      var newItem = Item(/* ... */) try database.write { db in   try newItem.insert(db) } ``` | ```swift @Environment(\.modelContext)  var modelContext      let newItem = Item(/* ... */) modelContext.insert(newItem) try modelContext.save() ``` |

> **Note**
> 
> For more information on how SharingGRDB compares to SwiftData, see [Comparison with SwiftData](https://swiftpackageindex.com/pointfreeco/sharing-grdb/main/documentation/sharinggrdb/comparisonwithswiftdata).

This is all you need to know to get started with SharingGRDB, but there’s much more to learn. Read the [articles](https://swiftpackageindex.com/pointfreeco/sharing-grdb/main/documentation/sharinggrdb#Essentials) below to learn how to best utilize this library:

- [Fetching model data](https://swiftpackageindex.com/pointfreeco/sharing-grdb/main/documentation/sharinggrdb/fetching)
- [Observing changes to model data](https://swiftpackageindex.com/pointfreeco/sharing-grdb/main/documentation/sharinggrdb/observing)
- [Preparing a SQLite database](https://swiftpackageindex.com/pointfreeco/sharing-grdb/main/documentation/sharinggrdb/preparingdatabase)
- [Dynamic queries](https://swiftpackageindex.com/pointfreeco/sharing-grdb/main/documentation/sharinggrdb/dynamicqueries)
- [Comparison with SwiftData](https://swiftpackageindex.com/pointfreeco/sharing-grdb/main/documentation/sharinggrdb/comparisonwithswiftdata)

#### SQLite knowledge required

SQLite is one of the [most established and widely distributed](https://www.sqlite.org/mostdeployed.html) pieces of software in the history of software. Knowledge of SQLite is a great skill for any app developer to have, and this library does not want to conceal it from you. So, we feel that to best wield this library you should be familiar with the basics of SQLite, including schema design and normalization, SQL queries, including joins and aggregates, and performance, including indices.

With some basic knowledge you can apply this library to your database schema in order to query for data and keep your views up-to-date when data in the database changes. You can use GRDB’s [query builder](https://swiftpackageindex.com/groue/grdb.swift/master/documentation/grdb/queryinterface) APIs to query your database, or you can use raw SQL queries, along with all of the power that SQL has to offer.

#### Demos

This repo comes with *lots* of examples to demonstrate how to solve common and complex problems with Sharing. Check out [this](https://github.com/pointfreeco/sharing-grdb/tree/main/Examples) directory to see them all, including:

- [Case Studies](https://github.com/pointfreeco/sharing-grdb/tree/main/Examples/CaseStudies): A number of case studies demonstrating the built-in features of the library.
- [SyncUps](https://github.com/pointfreeco/sharing-grdb/tree/main/Examples/SyncUps): We also rebuilt Apple’s [Scrumdinger](https://developer.apple.com/tutorials/app-dev-training/getting-started-with-scrumdinger) demo application using modern, best practices for SwiftUI development, including using this library to query and persist state using SQLite.
- [Reminders](https://github.com/pointfreeco/sharing-grdb/tree/main/Examples/Reminders): A rebuild of Apple’s [Reminders](https://apps.apple.com/us/app/reminders/id1108187841) app that uses a SQLite database to model the reminders, lists and tags. It features many advanced queries, such as searching, and stats aggregation.

#### Try it out today!

The first release of SharingGRDB is out *today*! Give it a spin and let us know what you think or if you have any questions by opening up a [discussion](https://github.com/pointfreeco/sharing-grdb/discussions).

## My Notes
