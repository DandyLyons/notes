---
publish: true
---

| GitHub       | [GitHub - blacksmithgu/obsidian-dataview: A data index and query language over Markdown files, for https://obsidian.md/.](https://github.com/blacksmithgu/obsidian-dataview) |
| ------------ | ------------------------------------------------------------------------ |
| Docs         | [Dataview](https://blacksmithgu.github.io/obsidian-dataview/)            |
| Obsidian URL | obsidian://show-plugin?id=dataview                                       |





![Beginner tutorial for Obsidian Dataview - YouTube](https://www.youtube.com/watch?v=G8eOF61wmzI)


## Tutorials
- [Beginner tutorial for Obsidian Dataview - YouTube](https://www.youtube.com/watch?v=G8eOF61wmzI)
## Making Queries

### DQL - DataView Query Language
A DQL Query consists of several parts:

- Exactly one [**Query Type**](https://blacksmithgu.github.io/obsidian-dataview/queries/query-types/) that determines what your Query Output looks like
- None or one [**FROM statement**](https://blacksmithgu.github.io/obsidian-dataview/queries/data-commands#from) to pick a specific tag or folder (or another [source](https://blacksmithgu.github.io/obsidian-dataview/reference/sources/)) to look at
- None to multiple [**other Data Commands**](https://blacksmithgu.github.io/obsidian-dataview/queries/data-commands/) that help you filter, group and sort your wanted output

For example, a Query can look like this:

` ```dataview LIST ``` `

which list all files in your vault.

Everything but the Query Type is optional

The only thing you need for a valid DQL Query is the Query Type (and on [CALENDAR](https://blacksmithgu.github.io/obsidian-dataview/queries/query-types#calendar-queries)s, a date field.)

A more restricted Query might look like this:

` ```dataview LIST FROM #poems WHERE author = "Edgar Allan Poe" ``` `

which lists all files in your vault that have the tag `#poems` and a [field](https://blacksmithgu.github.io/obsidian-dataview/annotation/add-metadata/) named `author` with the value `Edgar Allan Poe`. This query would find our example page from above

## Recipes
### Incoming Links
Syntax for incoming links: 
```
LIST
FROM [[#]]
```
### Displaying Frontmatter From The Same File
Scenario: We would like to display frontmatter from the same file. For example, suppose you are in a file with the following frontmatter: 

```
title: Romeo & Juliet
author: William Shakespeare
```

Then add this to your dataview query: 
```
WHERE file.path = this.file.path
```

By default, Dataview will use the source `FROM ""`  so this will filter out everything except the current note. So the whole query should look like this: 

```
TABLE title, author
WHERE file.path = this.file.path
```
