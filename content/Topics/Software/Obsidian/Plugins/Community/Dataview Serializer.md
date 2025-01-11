---
publish: true
---

| GitHub       | [GitHub - dsebastien/obsidian-dataview-serializer: Obsidian plugin that gives you the power of Dataview, but generates Markdown, making it compatible with Obsidian Publish, and making the links appear on the Graph.](https://github.com/dsebastien/obsidian-dataview-serializer) |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Docs         | [Obsidian Dataview Serializer](https://developassion.gitbook.io/obsidian-dataview-serializer/usage)                                                                                                                                                                                 |
| Obsidian URL | [Link](obsidian://show-plugin?id=dataview-serializer)                                                                                                                                                                                                                               |

## Usage
1. Define in the plugin settings for which folders should be watched for dataview queries.
2. Run command *Dataview Serializer: Scan and serialize all Dataview queries* 
3. Dataview query will be replaced with markdown (see below). 
### Syntax
Here's an example query:

```
<!-- QueryToSerialize: LIST FROM #quotes WHERE public_note = true SORT file.name ASC -->
```

If the above line is present in one of your notes, this plugin will detect it, and will replace it by the following:

```
<!-- QueryToSerialize: LIST FROM #quotes WHERE public_note = true SORT file.name ASC -->
<!-- SerializedQuery: LIST FROM #quotes WHERE public_note = true SORT file.name ASC -->
- [[20 years from now, the only people who will remember that you worked late are your kids]]
- [[A beautiful book is a victory won in all the battlefields of human thought.md|A beautiful book is a victory won in all the battlefields of human thought]]
- [[A busy mind accelerates the perceived passage of time. Buy more time by cultivating peace of mind]]
...
<!-- SerializedQuery: END -->
```

As you can see above, the result of the query gets added as Markdown below the query. Notice that the serialized version is surrounded by `<!-- SerializedQuery: <query> -->` and `<!-- SerializedQuery END -->`. Those allow the plugin to know what to replace. They should not be removed.

Whenever you update that note, the query will be executed and serialized, replacing the previous serialized version.

WARNING: For now, the queries can only be put on a single line. Take a look at [this issue](https://github.com/dsebastien/obsidian-dataview-serializer/issues/12) for details/updates.