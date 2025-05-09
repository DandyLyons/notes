---
publish: true
---
 Each [[database connections in SQLite]] can have only one journal mode. 

**See docs**: [SQLite Journal Modes](https://www.sqlite.org/pragma.html#pragma_journal_mode)

## Deep Dives
- [[SQLite For Beginners - Journal Modes]] 

## The Journal Modes
Journal modes in SQLite are one of the mechanisms that SQLite uses to guarantee [[durability in databases|durability]] (the D in ACID). 

| Journal Mode | Description                                                                                                                                                                                                                                                  | Durability | Concurrency |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ----------- |
| DELETE       | (Default for Rollback Journal) The journal file is deleted after a transaction commits.                                                                                                                                                                      | Good       | Low         |
| TRUNCATE     | Similar to DELETE, but the journal file is truncated to zero length instead of being deleted. Generally faster than DELETE.                                                                                                                                  | Good       | Low         |
| PERSIST      | The journal file is not deleted or truncated after a transaction commits. Can improve performance if transactions are frequent, but increases the risk of data corruption if not managed carefully. Requires manual management (e.g., deleting the journal). | Fair       | Low         |
| MEMORY       | The journal is kept in memory. Provides the fastest performance but offers no durability. If the system crashes, all changes are lost.                                                                                                                       | None       | Low         |
| WAL          | Enables Write-Ahead Logging. Writes changes to a separate WAL file and periodically checkpoints them to the database file.                                                                                                                                   | Excellent  | High        |
| OFF          | Disables the journal entirely. Offers the fastest performance, but provides no durability or atomicity. Highly discouraged for most applications.                                                                                                            | None       | Low         |
## Further Reading
- [[SQLite For Beginners - Journal Modes]]