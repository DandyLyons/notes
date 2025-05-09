---
publish: true
aliases:
  - "`STRICT` in SQLite"
---
At least some features of dynamic typing can be opted out of, by using the `STRICT` when declaring the table.

## Docs and Reference
- [Official Docs](https://www.sqlite.org/stricttables.html) 
- [SQLite Strict Tables](https://www.sqlitetutorial.net/sqlite-strict-tables/) 
- [Modern SQLite: STRICT tables](https://antonz.org/sqlite-strict-tables/) 

## Creating a STRICT Table
```sqlite
CREATE TABLE strict_table_name(
    column type constraint, 
    ...
) STRICT;
```

The strict tables follow these rules:

- Every column must have one of the following data types: `INT`, `INTEGER`, `REAL`, `TEXT`, `BLOB`, and `ANY`.
- When [inserting a value into a column](https://www.sqlitetutorial.net/sqlite-insert/), SQLite will attempt to convert the value into the column’s data type. If the conversion fails, it will raise an error.
- Columns with the `ANY` data type can accept any kind of data. SQLite will not perform any conversion for these columns.
- [`PRIMARY` `KEY`](https://www.sqlitetutorial.net/sqlite-primary-key/) columns are implicitly `[NOT NULL](https://www.sqlitetutorial.net/sqlite-not-null-constraint/)`.
- The `PRAGMA` `integrity_check` and `PRAGMA` `quick_check` commands verify the type of the contents of all columns in strict tables and display errors if any mismatches are found.