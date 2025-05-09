---
id: 62bfd0a4-0258-45b7-8be8-390f0211925d
PublishDate: 2025-02-25
title: "Actually Useful Obsidian: Links"
subjects:
  - "[[Using Links in Obsidian]]"
url: 
ContentStatus: 🗓️ Scheduled
blog_series: Actually Useful Obsidian
---
%% TEMPLATE: [Content Plan TEMPLATE](Content%20Plan%20TEMPLATE.md) %%
## Checklist
- [ ] Proofread
	- [ ] Check all code is working. 
	- [ ] Check all links are working. 
- [ ] Set `draft` frontmatter to `false`
- [ ] Deploy Push commit to `deploy-netlify` branch
	- [ ] Check that deploy was successful
	- [ ] Copy URL
- [ ] Manually Publish the Netlify deploy at [Deploys \| dandylyons \| Netlify](https://app.netlify.com/sites/dandylyons/deploys)[^1]
- [ ] Validate social preview metadata
	- [ ] [Social Share Preview – Check social media link previews](https://socialsharepreview.com/) 
		- Generate social preview image using [placid](https://placid.app/tools/free-open-graph-image-generator) 
- [ ] Write social media post
	- [ ] Generate social media image 
		- Try using ray.so in raycast
			- [Codeshot](Codeshot.md)  
	- [ ] Generate image alt text: [Free AI Alt Text Generator for Images](https://popupsmart.com/tools/ai-alt-text-generator) 
- [ ] Schedule social media post on Buffer (Mastodon, Bluesky, X)
- [ ] Schedule next content from [Content for DandyLyons.net](Content%20for%20DandyLyons.net) 

## Sources
- 

## The Content


### The Power of Links

### External Links
- External link: `[Google](https://www.google.com)` 
- precede any link with `!` 
- Link shortcut: 
	- 1. Highlight text
	- 2. Use Obsidian Command: *Insert Markdown link*
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
### Non-Graph Links: External Links to Internal Files
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
---

# Actually Useful Obsidian: Links

Ever felt overwhelmed by your growing collection of notes? You're not alone. While many note-taking apps let you create endless documents, Obsidian's true power lies in how it connects them. In this guide, we'll explore how Obsidian's linking features can transform your scattered notes into a powerful knowledge network.


## The Power of Links: Your Personal Web of Knowledge


### Creating Your First Links

Let's start with the basics. There are several ways to create links in Obsidian:

1. **Quick Linking**: Type `[[` and start typing - Obsidian will suggest existing notes
2. **Aliased Links**: Use `[[Original Note|Display Text]]` to show different text than the note's title
3. **Command Palette**: Use `⌘ P` and search for "Add internal link"

```markdown
Example Note:
Today I learned about [[photosynthesis|how plants make food]]. This connects to my notes on [[cellular respiration]] and [[energy cycles]].
```

### Beyond Basic Links

But Obsidian's linking goes far beyond simple connections. You can:
- Link to specific headings: `[[Note#Heading]]`
- Link to specific blocks: `[[Note^block-id]]`
- Create links with custom display text: `[Visible Text](obsidian://note)`

[Continue with rest of article...]




---
# Footnotes

[^1]: Currently I have Netlify set up so that my site will NOT auto-publish. This means if I push to `deploy-netlify` it will build, but it will not publish until I manually publish it. 
