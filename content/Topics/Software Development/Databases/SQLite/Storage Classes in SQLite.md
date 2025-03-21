---
publish: true
aliases:
  - native types in SQLite
---

| Docs         | https://www.sqlite.org/datatype3.html                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| [[#NULL]]    | The value is a NULL value.                                                                                     |
| [[#INTEGER]] | The value is a signed integer, stored in 0, 1, 2, 3, 4, 6, or 8 bytes depending on the magnitude of the value. |
| [[#REAL]]    | The value is a floating point value, stored as an 8-byte (64 bit) IEEE floating point number.                  |
| [[#TEXT]]    | The value is a text string, stored using the database encoding (UTF-8, UTF-16BE or UTF-16LE).                  |
| [[#BLOB]]    | The value is a blob of data, stored exactly as it was input.                                                   |
| dates        | See [[dates in SQLite]]                                                                                        |
| uuids        | See [[uuids in SQLite]]                                                                                        |
## Dynamic Type system
SQLite uses a dynamic type system which means that **Any column can store any type of data.** 

Nevertheless, all data in SQLite is stored as a concrete type. SQLite calls these *Storage Classes*. These storage classes tell SQLite how to encode and decode that data from storage. You do not choose or declare your storage class directly. Instead, SQLite dynamically picks the appropriate storage class for the value, based on the column's [[Type Affinities in SQLite|Type Affinity]]. 

For more info, see [[dynamic type system in SQLite]] and [[Type Affinities in SQLite|Type Affinity]]. 
## Storage Classes in SQLite
### NULL
- **NULL**. The value is a NULL value.

### INTEGER
- **INTEGER**. The value is a signed integer, stored in 0, 1, 2, 3, 4, 6, or 8 bytes depending on the magnitude of the value.

### REAL
- **REAL**. The value is a floating point value, stored as an 8-byte (64 bit) IEEE floating point number.

### TEXT
- **TEXT**. The value is a text string, stored using the database encoding (UTF-8, UTF-16BE or UTF-16LE).

#### Dynamic Typing
A column with TEXT affinity stores all data using storage classes NULL, TEXT or BLOB. If numerical data is inserted into a column with TEXT affinity it is converted into text form before being stored.

### BLOB
- **BLOB**. The value is a blob of data, stored exactly as it was input.
- (Historical note: The "BLOB" type affinity used to be called "NONE". But that term was easy to confuse with "no affinity" and so it was renamed.)

## Reading the current Storage Class of a particular value
Remember, that each column can hold values of heterogenous storage classes. If you would like to read the current storage class of a value then use the [SQLite `typeof()` function](https://www.w3resource.com/sqlite/core-functions-typeof.php) 