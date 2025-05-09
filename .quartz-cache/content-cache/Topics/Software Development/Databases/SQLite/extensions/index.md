---
publish: true
aliases:
  - extensions in SQLite
---
SQLite has few functions compared to other database management systems. SQLite authors see this as a feature rather than a problem, because SQLite has an extension mechanism in place.

- [How to install an SQLite extension](https://antonz.org/install-sqlite-extension/) 

## Some SQLite Extensions
### SQLean
- [SQLean](https://github.com/nalgeon/sqlean) : A bundle of curated foundational SQLite extensions. Think of them as the extended standard library for SQLite:
	- [crypto](https://github.com/nalgeon/sqlean/blob/main/docs/crypto.md): hashing, encoding and decoding data
	- [define](https://github.com/nalgeon/sqlean/blob/main/docs/define.md): user-defined functions and dynamic sql
	- [fileio](https://github.com/nalgeon/sqlean/blob/main/docs/fileio.md): read and write files
	- [fuzzy](https://github.com/nalgeon/sqlean/blob/main/docs/fuzzy.md): fuzzy string matching and phonetics
	- [ipaddr](https://github.com/nalgeon/sqlean/blob/main/docs/ipaddr.md): IP address manipulation
	- [math](https://github.com/nalgeon/sqlean/blob/main/docs/math.md): math functions
	- [regexp](https://github.com/nalgeon/sqlean/blob/main/docs/regexp.md): regular expressions
	- [stats](https://github.com/nalgeon/sqlean/blob/main/docs/stats.md): math statistics
	- [text](https://github.com/nalgeon/sqlean/blob/main/docs/text.md): string functions and Unicode
		- [Powerful string functions in SQLite](https://antonz.org/sqlean-text/) 
	- [time](https://github.com/nalgeon/sqlean/blob/main/docs/time.md): high-precision date/time
		- [High-precision date/time in SQLite](https://antonz.org/sqlean-time/) 
	- [uuid](https://github.com/nalgeon/sqlean/blob/main/docs/uuid.md): Universally Unique IDentifiers
	- [vsv](https://github.com/nalgeon/sqlean/blob/main/docs/vsv.md): CSV files as virtual tables

> [!warning] macOS may disable unsigned binaries
> _Note for macOS users_. macOS may disable unsigned binaries and prevent the extension from loading. To resolve this issue, remove the extension from quarantine by running the following command in Terminal (replace `/path/to/folder` with an actual path to the folder containing the extension):
> 
> ```
> xattr -d com.apple.quarantine /path/to/folder/stats.dylib
> ```
> 
> Also note that the "stock" SQLite CLI on macOS does not support extensions. Use the [custom build](https://github.com/nalgeon/sqlite).
>
>See [Escaping macOS quarantine for SQLite extensions](https://antonz.org/sqlpkg-which/)
