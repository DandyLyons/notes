---
publish: true
---

| Docs | https://www.sqlite.org/datatype3.html#:~:text=2.2.%20Date%20and%20Time%20Datatype |
| ---- | --------------------------------------------------------------------------------- |
|      |                                                                                   |

> ==SQLite does not have a storage class set aside for storing dates and/or times==. Instead, the built-in [[#Date and Time Functions in SQLite]] are capable of storing dates and times as TEXT, REAL, or INTEGER values:
> 
> - **TEXT** as ISO8601 strings ("YYYY-MM-DD HH:MM:SS.SSS").
> - **REAL** as Julian day numbers, the number of days since noon in Greenwich on November 24, 4714 B.C. according to the proleptic Gregorian calendar.
> - **INTEGER** as Unix Time, the number of seconds since 1970-01-01 00:00:00 UTC.
> 
> Applications can choose to store dates and times in any of these formats and freely convert between formats using the built-in [date and time functions](https://www.sqlite.org/lang_datefunc.html).
>- From [Docs](https://www.sqlite.org/datatype3.html#:~:text=2.2.%20Date%20and%20Time%20Datatype)

## Extensions
See [[Topics/Software Development/Databases/SQLite/extensions/index|extensions in SQLite]]. Consider SQLean's `time` extension. 
## Date and Time Functions in SQLite
See docs: [Date And Time Functions](https://www.sqlite.org/lang_datefunc.html)

### Storing dates as TEXT
> - **TEXT** as ISO8601 strings ("YYYY-MM-DD HH:MM:SS.SSS").

### Storing dates as REAL
> - **REAL** as Julian day numbers, the number of days since noon in Greenwich on November 24, 4714 B.C. according to the proleptic Gregorian calendar.

### Storing dates as INTEGER
> - **INTEGER** as Unix Time, the number of seconds since 1970-01-01 00:00:00 UTC.

Dates can be stored as [[UNIX time]]. 
