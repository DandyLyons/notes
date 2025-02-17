---
id: a7565ba8-1510-48c9-b0bb-14ad28c27237
publish: true
---
## Docs
- [Internal links - Obsidian Help](https://help.obsidian.md/Linking+notes+and+files/Internal+links)
- [Aliases - Obsidian Help](https://help.obsidian.md/Linking+notes+and+files/Aliases)
- [Embed files - Obsidian Help](https://help.obsidian.md/Linking+notes+and+files/Embed+files)
## Usage
### Internal Links
Obsidian supports the following link formats:

- Markdown: `[Three laws of motion](Three%20laws%20of%20motion.md)`
	- Markdown (simpler formatting): `[Three laws of motion](<Three laws of motion.md>)` 
- Wikilink: `[[Three laws of motion]]`
	- Wikilink with alias: `[[Three laws of motion|3 laws of motion]]` 
- Heading Wikilink: 
	- **heading in another note**: `[[Three laws of motion#first law]]`
	- **heading in the same note**: `[[#first law]]` 
- Link to a block: 
	- `[[Three laws of motion#^37066d]]`

### External Links
- External link: `[Google](https://www.google.com)` 
- External link to internal file:
	- **Copy Obsidian URL**: `[Three laws of motion](obsidian://open?vault=content&file=Three%20laws%20of%20motion)`  
	- **Advanced URI: Copy URI for Current File**: 
		- **With UUID**: `[Three laws of motion](obsidian://adv-uri?vault=content&uid=6e80cd59-8be7-4bce-a8ab-b1752d7a9ff1)`
		- **With Human Readable ID**: `[Three laws of motion](obsidian://adv-uri?vault=content&uid=beaver)` 
### Aliases
- Wikilink with alias: `[[Three laws of motion|3 laws of motion]]` 
- Markdown with alias: 
	- `[3 laws of motion](Three%20laws%20of%20motion.md)` 
### Embed Files
- precede any link with `!` 
- Another internal file
	- A Section of another file (picked by heading)
	- A "Block" of another file
- Fantastic for embedding: 
	- YouTube videos
	- Images
	- PDF Files
	- Webpages: 
		- [[Auto Link Title]] 
		- [[Link Embed]] plugin
		- [[Auto Embed]] plugin: Adds support for embeds of Notion, Reddit, Mastodon and other sites. 

```embed
title: "GitHub - DandyLyons/DandyLyons.github.io"
image: "https://opengraph.githubassets.com/c0611ff8d3f48fc6063750a6dd57f27c71dc2d9e1d9c78e371dd94c7e819ef71/DandyLyons/DandyLyons.github.io"
description: "Contribute to DandyLyons/DandyLyons.github.io development by creating an account on GitHub."
url: "https://github.com/DandyLyons/DandyLyons.github.io"
```
