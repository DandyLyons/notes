---
publish: true
---
The type system in SQLite is dynamic, meaning that **any column can store any type of data**. If you put in a different type into a column, then SQLite will dynamically convert it. While, you can declare a type for a column when defining your schema, you are not actually declaring the type of the column. Rather what you are doing is declaring the [[#Type Affinity]] of the column (what type the column *prefers*). And technically, this isn't entirely correct either. When you "declare a type" in SQLite (for example in a CREATE TABLE statement), what is **actually** happening is SQLite is reading your declaration and inferring the type affinity. (For more info see [[#Inferring Type Affinity]]). 

So in summary, the SQLite type system works like this: 
1. You declare a type in a statement (e.g. `DATETIME`)
2. SQLite infers a Type Affinity from your statement
3. From then on SQLite uses this Type Affinity as the rules to decide how and when to dynamically cast between native types ([[Storage Classes in SQLite]]). 

## Opting Out of Dynamic Typing with `STRICT` Keyword
At least some features of dynamic typing can be opted out of, by using the `STRICT` when declaring the table. For more info see [[strict tables in SQLite]]. 
## Type Affinity
**Docs**: [Type Affinity](https://www.sqlite.org/datatype3.html#:~:text=3.%20Type%20Affinity) 

- The type affinity of a column is the **recommended** type (not required) for data stored in that column. 
- **Any column can still store any type of data.** 
- It is just that some columns, given the choice, will **prefer** to use one storage class over another. 
	- The preferred storage class for a column is called its "<u>affinity</u>".

### Inferring Type Affinity 
For tables not declared as [STRICT](https://www.sqlite.org/stricttables.html), the affinity of a column is determined by the declared type of the column, according to the following rules in the order shown:

1. If the declared type contains the string "INT" then it is assigned INTEGER affinity.
2. If the declared type of the column contains any of the strings "CHAR", "CLOB", or "TEXT" then that column has TEXT affinity. Notice that the type VARCHAR contains the string "CHAR" and is thus assigned TEXT affinity.
3. If the declared type for a column contains the string "BLOB" or if no type is specified then the column has affinity BLOB.
4. If the declared type for a column contains any of the strings "REAL", "FLOA", or "DOUB" then the column has REAL affinity.
5. Otherwise, the affinity is NUMERIC.
    

Note that the order of the rules for determining column affinity is important. A column whose declared type is "CHARINT" will match both rules 1 and 2 but the first rule takes precedence and so the column affinity will be INTEGER.

The following table shows how many common datatype names from more traditional SQL implementations are converted into affinities by the five rules of the previous section. This table shows only a small subset of the datatype names that SQLite will accept. Note that numeric arguments in parentheses that following the type name (ex: "VARCHAR(255)") are ignored by SQLite - SQLite does not impose any length restrictions (other than the large global [SQLITE_MAX_LENGTH](https://www.sqlite.org/limits.html#max_length)limit) on the length of strings, BLOBs or numeric values.

| Example Typenames From The  <br>CREATE TABLE Statement  <br>or CAST Expression                                                              | Resulting Affinity | Rule Used To Determine Affinity |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------- |
| INT  <br>INTEGER  <br>TINYINT  <br>SMALLINT  <br>MEDIUMINT  <br>BIGINT  <br>UNSIGNED BIG INT  <br>INT2  <br>INT8                            | INTEGER            | 1                               |
| CHARACTER(20)  <br>VARCHAR(255)  <br>VARYING CHARACTER(255)  <br>NCHAR(55)  <br>NATIVE CHARACTER(70)  <br>NVARCHAR(100)  <br>TEXT  <br>CLOB | TEXT               | 2                               |
| BLOB  <br>_no datatype specified_                                                                                                           | BLOB               | 3                               |
| REAL  <br>DOUBLE  <br>DOUBLE PRECISION  <br>FLOAT                                                                                           | REAL               | 4                               |
| NUMERIC  <br>DECIMAL(10,5)  <br>BOOLEAN  <br>DATE  <br>DATETIME                                                                             | NUMERIC            | 5                               |
#### Gotchas of Inferring Type Affinity
Note that a declared type of "FLOATING POINT" would give INTEGER affinity, not REAL affinity, due to the "INT" at the end of "POINT". And the declared type of "STRING" has an affinity of NUMERIC, not TEXT.