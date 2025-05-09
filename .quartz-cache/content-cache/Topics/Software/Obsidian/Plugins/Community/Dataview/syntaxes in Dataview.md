---
publish: true
---
[[Topics/Software/Obsidian/Plugins/Community/Dataview/index|Dataview]] has many syntaxes which are quite easy to forget: 
1. [[#DQL - Dataview Query Language]]
2. [[#Inline Syntax]]
3. [[#DataviewJS]] 
4. [[#Inline Dataview JS]]

## Tips
- Use [ChatGPT - Obsidian Oracle](https://chatgpt.com/g/g-b107MFpsV-obsidian-oracle) to help you generate Dataview queries and answer questions. 

## DQL - Dataview Query Language
See [[Topics/Software/Obsidian/Plugins/Community/Dataview/index#Recipes|recipes]] and [docs](https://blacksmithgu.github.io/obsidian-dataview/)

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
## Inline Syntax
See [docs](https://blacksmithgu.github.io/obsidian-dataview/queries/dql-js-inline/).

Dataview has another syntax which allows you to insert file properties directly into the text of the same note. 

```
`= this.file.name`
```

So you can write something like this: 

```
The name of this file is `= this.file.name`.
```
Which will then render like this: 
### Abilities
The name of this file is `= this.file.name`. 

You can either access the properties of the **current page** via prefix `this.` or a different page via `[[linkToPage]]`.

`` `= this.file.name` `= this.file.mtime` `= this.someMetadataField` `= [[secondPage]].file.name` `= [[secondPage]].file.mtime` `= [[secondPage]].someMetadataField` ``

You can use everything available as [expressions](https://blacksmithgu.github.io/obsidian-dataview/reference/expressions) and [literals](https://blacksmithgu.github.io/obsidian-dataview/reference/literals) in an Inline DQL Query, including [functions](https://blacksmithgu.github.io/obsidian-dataview/reference/functions).

### Limitations
Inline DQL can only display exactly one value. 
Query Types and Data Commands, on the other hand, are **not available in Inlines.** 
## DataviewJS
See [docs](https://blacksmithgu.github.io/obsidian-dataview/queries/dql-js-inline/).

Similar to the query language, you create Dataview JS blocks via a `dataviewjs`-annotated codeblock. 

```
let pages = dv.pages("#books and -#books/finished").where(b => b.rating >= 7);
for (let group of pages.groupBy(b => b.genre)) {
   dv.header(3, group.key);
   dv.list(group.rows.file.name);
}
```
Inside of a JS dataview block, you have access to the full dataview API via the `dv` variable. For an explanation of what you can do with it, see the [API documentation](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference), or the [API examples](https://blacksmithgu.github.io/obsidian-dataview/api/code-examples).
## Inline Dataview JS
See [docs](https://blacksmithgu.github.io/obsidian-dataview/queries/dql-js-inline/).

Similar to the query language, you can write JS inline queries, which let you embed a computed JS value directly. You create JS inline queries via inline code blocks:

`` `$= dv.current().file.mtime` ``

  
> **Change of Inline JS prefix**
> 
> You can change the `$=` to another token (like `dvjs:` or `$~`) in Dataviews' settings under "Codeblock Settings" > "Javascript Inline Query Prefix"

### Limitations
Unlike [[#Inline Syntax]], Inline JS queries do have access to everything a Dataview JS Query has available and can hence query and output multiple pages.