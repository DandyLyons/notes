---
publish: true
---
## Docs and Reference
- [GitHub - groue/GRDB.swift: A toolkit for SQLite databases, with a focus on application development](https://github.com/groue/GRDB.swift?tab=readme-ov-file#values) 

###   Data (and Memory Savings)
- [Data (and Memory Savings)](https://github.com/groue/GRDB.swift?tab=readme-ov-file#data-and-memory-savings)
- GRDB will store it as a SQLite `BLOB`

### Date and DateComponents
- [Date and DateComponents](https://github.com/groue/GRDB.swift?tab=readme-ov-file#date-and-datecomponents)

[**Date**](https://github.com/groue/GRDB.swift?tab=readme-ov-file#date) and [**DateComponents**](https://github.com/groue/GRDB.swift?tab=readme-ov-file#datecomponents) can be stored and fetched from the database.

Here is how GRDB supports the various [date formats](https://www.sqlite.org/lang_datefunc.html) supported by SQLite:

|SQLite format|Date|DateComponents|
|:--|:-:|:-:|
|YYYY-MM-DD|Read ¹|Read / Write|
|YYYY-MM-DD HH:MM|Read ¹ ²|Read ² / Write|
|YYYY-MM-DD HH:MM:SS|Read ¹ ²|Read ² / Write|
|YYYY-MM-DD HH:MM:SS.SSS|Read ¹ ² / Write ¹|Read ² / Write|
|YYYY-MM-DD**T**HH:MM|Read ¹ ²|Read ²|
|YYYY-MM-DD**T**HH:MM:SS|Read ¹ ²|Read ²|
|YYYY-MM-DD**T**HH:MM:SS.SSS|Read ¹ ²|Read ²|
|HH:MM||Read ² / Write|
|HH:MM:SS||Read ² / Write|
|HH:MM:SS.SSS||Read ² / Write|
|Timestamps since unix epoch|Read ³||
|`now`|||

¹ Missing components are assumed to be zero. Dates are stored and read in the UTC time zone, unless the format is followed by a timezone indicator ⁽²⁾.

² This format may be optionally followed by a timezone indicator of the form `[+-]HH:MM` or just `Z`.

³ GRDB 2+ interprets numerical values as timestamps that fuel `Date(timeIntervalSince1970:)`. Previous GRDB versions used to interpret numbers as [julian days](https://en.wikipedia.org/wiki/Julian_day). Julian days are still supported, with the `Date(julianDay:)` initializer.

> **Warning**: the range of valid years in the SQLite date formats is 0000-9999. You will need to pick another date format when your application needs to process years outside of this range. See the following chapters.

#### Date

- [Date in GRDB](https://github.com/groue/GRDB.swift?tab=readme-ov-file#date)

**Date** can be stored and fetched from the database just like other [values](https://github.com/groue/GRDB.swift?tab=readme-ov-file#values):

```swift
try db.execute(
    sql: "INSERT INTO player (creationDate, ...) VALUES (?, ...)",
    arguments: [Date(), ...])

let row = try Row.fetchOne(db, ...)!
let creationDate: Date = row["creationDate"]
```

Dates are stored using the format "YYYY-MM-DD HH:MM:SS.SSS" in the UTC time zone. It is precise to the millisecond.

> **Note**: this format was chosen because it is the only format that is:
> 
> - Comparable (`ORDER BY date` works)
> - Comparable with the SQLite keyword CURRENT_TIMESTAMP (`WHERE date > CURRENT_TIMESTAMP` works)
> - Able to feed [SQLite date & time functions](https://www.sqlite.org/lang_datefunc.html)
> - Precise enough
> 
> **Warning**: the range of valid years in the SQLite date format is 0000-9999. You will experience problems with years outside of this range, such as decoding errors, or invalid date computations with [SQLite date & time functions](https://www.sqlite.org/lang_datefunc.html).

Some applications may prefer another date format:

- Some may prefer ISO-8601, with a `T` separator.
- Some may prefer ISO-8601, with a time zone.
- Some may need to store years beyond the 0000-9999 range.
- Some may need sub-millisecond precision.
- Some may need exact `Date` roundtrip.
- Etc.

**You should think twice before choosing a different date format:**

- ISO-8601 is about _exchange and communication_, when SQLite is about _storage and data manipulation_. Sharing the same representation in your database and in JSON files only provides a superficial convenience, and should be the least of your priorities. Don't store dates as ISO-8601 without understanding what you lose. For example, ISO-8601 time zones forbid database-level date comparison.
- Sub-millisecond precision and exact `Date` roundtrip are not as obvious needs as it seems at first sight. Dates generally don't precisely roundtrip as soon as they leave your application anyway, because the other systems your app communicates with use their own date representation (the Android version of your app, the server your application is talking to, etc.) On top of that, `Date` comparison is at least as hard and nasty as [floating point comparison](https://www.google.com/search?q=floating+point+comparison+is+hard).

The customization of date format is explicit. For example:

```swift
let date = Date()
let timeInterval = date.timeIntervalSinceReferenceDate
try db.execute(
    sql: "INSERT INTO player (creationDate, ...) VALUES (?, ...)",
    arguments: [timeInterval, ...])

if let row = try Row.fetchOne(db, ...) {
    let timeInterval: TimeInterval = row["creationDate"]
    let creationDate = Date(timeIntervalSinceReferenceDate: timeInterval)
}
```

See also [Codable Records](https://github.com/groue/GRDB.swift?tab=readme-ov-file#codable-records) for more date customization options, and [`DatabaseValueConvertible`](https://swiftpackageindex.com/groue/GRDB.swift/documentation/grdb/databasevalueconvertible) if you want to define a Date-wrapping type with customized database representation.

#### DateComponents
- [DateComponents in GRDB](https://github.com/groue/GRDB.swift?tab=readme-ov-file#datecomponents) 


### NSNumber, NSDecimalNumber, and Decimal
- [NSNumber, NSDecimalNumber, and Decimal in GRDB](https://github.com/groue/GRDB.swift?tab=readme-ov-file#nsnumber-nsdecimalnumber-and-decimal) 

NSNumber and Decimal can be stored and fetched from the database just like other [values](https://github.com/groue/GRDB.swift?tab=readme-ov-file#values).

Here is how GRDB supports the various data types supported by SQLite:

|                 |              |              |              |
| --------------- | ------------ | ------------ | ------------ |
|                 | Integer      | Double       | String       |
| NSNumber        | Read / Write | Read / Write | Read         |
| NSDecimalNumber | Read / Write | Read / Write | Read         |
| Decimal         | Read         | Read         | Read / Write |
### UUID

- [UUIDs in GRDB](https://github.com/groue/GRDB.swift?tab=readme-ov-file#uuid)

**UUID** can be stored and fetched from the database just like other [values](https://github.com/groue/GRDB.swift?tab=readme-ov-file#values).

GRDB stores uuids as 16-bytes data blobs, and decodes them from both 16-bytes data blobs and strings such as "E621E1F8-C36C-495A-93FC-0C247A3E6E5F".

### Swift Enums

- [Swift Enums in GRDB](https://github.com/groue/GRDB.swift?tab=readme-ov-file#swift-enums)

**Swift enums** and generally all types that adopt the [RawRepresentable](https://developer.apple.com/library/tvos/documentation/Swift/Reference/Swift_RawRepresentable_Protocol/index.html) protocol can be stored and fetched from the database just like their raw [values](https://github.com/groue/GRDB.swift?tab=readme-ov-file#values):

```swift
enum Color : Int {
    case red, white, rose
}

enum Grape : String {
    case chardonnay, merlot, riesling
}

// Declare empty DatabaseValueConvertible adoption
extension Color : DatabaseValueConvertible { }
extension Grape : DatabaseValueConvertible { }

// Store
try db.execute(
    sql: "INSERT INTO wine (grape, color) VALUES (?, ?)",
    arguments: [Grape.merlot, Color.red])

// Read
let rows = try Row.fetchCursor(db, sql: "SELECT * FROM wine")
while let row = try rows.next() {
    let grape: Grape = row["grape"]
    let color: Color = row["color"]
}
```

**When a database value does not match any enum case**, you get a fatal error. This fatal error can be avoided with the [DatabaseValue](https://github.com/groue/GRDB.swift?tab=readme-ov-file#databasevalue) type:

```swift
let row = try Row.fetchOne(db, sql: "SELECT 'syrah'")!

row[0] as String  // "syrah"
row[0] as Grape?  // fatal error: could not convert "syrah" to Grape.
row[0] as Grape   // fatal error: could not convert "syrah" to Grape.

let dbValue: DatabaseValue = row[0]
if dbValue.isNull {
    // Handle NULL
} else if let grape = Grape.fromDatabaseValue(dbValue) {
    // Handle valid grape
} else {
    // Handle unknown grape
}
```

### Custom Types (JSON Columns)
[JSON Columns in GRDB](https://github.com/groue/GRDB.swift?tab=readme-ov-file#json-columns)

When a [Codable record](https://github.com/groue/GRDB.swift?tab=readme-ov-file#codable-records) contains a property that is not a simple [value](https://github.com/groue/GRDB.swift?tab=readme-ov-file#values) (Bool, Int, String, Date, Swift enums, etc.), that value is encoded and decoded as a **JSON string**.