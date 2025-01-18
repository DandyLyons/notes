---
publish: true
aliases:
  - Dataview
title: Dataview
---


| GitHub       | [GitHub - blacksmithgu/obsidian-dataview: A data index and query language over Markdown files, for https://obsidian.md/.](https://github.com/blacksmithgu/obsidian-dataview) |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Docs         | [Dataview](https://blacksmithgu.github.io/obsidian-dataview/)                                                                                                                |
| Obsidian URL | obsidian://show-plugin?id=dataview                                                                                                                                           |

## Tutorials
- [Beginner tutorial for Obsidian Dataview - YouTube](https://www.youtube.com/watch?v=G8eOF61wmzI)
- Use [ChatGPT - Obsidian Oracle](https://chatgpt.com/g/g-b107MFpsV-obsidian-oracle) to help you generate Dataview queries and answer questions. 
## Making Queries
See [[syntaxes in Dataview]]. 
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
