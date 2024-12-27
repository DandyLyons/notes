---
url: https://quartz.jzhao.xyz/
publish: true
aliases:
  - Quartz
---



## My Explorations


> [!tip]- Tip
> Symbols: 
> - ✅: I did this and it worked
> - ☑️: I have not tried this yet. 


### ☑️ How to add commenting on your website? 
- [Discord thread: Comments - Remark42](https://discord.com/channels/927628110009098281/1150498860666466354) 

### ☑️ How do I make a social preview? 
When a URL is posted onto a social media site such as Facebook or X, it will automatically generate a pretty preview. Typically this will include an image, a headline, and a sentence or two of the content. 

I don't know yet how to do this. 

#### Further exploration
- [Meta Tags — Preview, Edit and Generate](https://metatags.io/?url=https%3A%2F%2Fnotes.lucacordes.xyz%2F) 
- [Discord](https://discord.com/channels/927628110009098281/927628110009098284/1209919327558574151)

### ✅: How do I make a URL redirect? 
- [[URL Redirects in Quartz]]

### ☑️ How do I show both "created date" and "modified date"? 
- [Discord: What's the best way to add both date of publication and last modified date under the title?](https://discord.com/channels/927628110009098281/1136918563400200202/1171037494201028639) 
- [Discord thread](https://discord.com/channels/927628110009098281/1136918563400200202) 

### ☑️ How do I order the folders in my Explorer section? 
- [Discord - I'm finding a way to manually change the order of pages in the Explorer. How can I do that?](https://discord.com/channels/927628110009098281/927628110009098284/1226734691441180692)


### How do I implement RSS feed filtering? 
Problem: I would like to generate an RSS feed, via Quartz that includes some, but not all of the pages. 

#### Further exploration
- [Discord - RSS Feed Filtering](https://discord.com/channels/927628110009098281/1149699636362235997/1149699684542189690)

### How do I implement opt-in publishing across the entire vault? 
Problem: I don't want to have a separate quartz vault and personal vault. I want just one vault, and I only want to publish select files to quartz. 


#### Further exploration
- [Discord - opt-in publish across entire vault](https://discord.com/channels/927628110009098281/1218592581311795245) 
- [Using Quartz & Github Publisher](https://flowerbed.bluerose.garden/Using-Quartz-&-Github-Publisher) 
- [Publish to Quartz Repo](https://garden.gilbertsanchez.com/how-to/publish-to-quartz-repo) 

### ☑️ How to customize how/if Obsidian properties are displayed? 
How Quartz renders metadata (from Obsidian frontmatter, i.e. yaml frontmatter), can be customized in `ContentMeta.tsx`. 

#### Discussion
- [Discord](https://discord.com/channels/927628110009098281/1217054488733421648/1217054488733421648) : Conversation about metadata properties. 

### ✅ How do I make "Folder Notes"? 
A "Folder Note" is a concept that is not built in directly into Quartz or Obsidian. I personally would like to have notes that are [[Notion]]-like. In Notion, there is no distinction between a note and a folder. A note can hold multiple notes inside of it just like a folder. This makes it very easy to organize notes into complex, deeply nested hierarchical relationships (while still maintaining the freedom of non-hierarchical relationships using bi-directional links and tags). Unfortunately it's not built in. 
  
Still I've found a few techniques that get me to something close to what I like. 

By default Quartz will create a page for each folder. This page is simply a list of all the notes in that folder. Furthermore, you can create an `index.md` to override the default page that is created by Quartz. However, you'll want to override the `title` property, or else the top heading level on your Quartz page will be `index`. I also prefer to override the `aliases` property. This way, even though my Obsidian vault is flooded with notes named `index`, I can still look up each note by its alias name. 

Here's an example of the YAML: 

```
aliases:
  - MyNote
title: MyNote
```

#### Further Explorations
- [GitHub - HananoshikaYomaru/Obsidian-Frontmatter-Generator: A plugin for Obsidian that generates frontmatter for notes](https://github.com/HananoshikaYomaru/Obsidian-Frontmatter-Generator) 
	- One tedium I'm currently facing is that Quartz doesn't seem to have a concept of "folder notes". Perhaps, this plugin could be used to derive the title and alias from the parent folder name. 

## Known Limitations
*May not be up to date.*

### No Dataview support
[[Dataview]] is an immensely popular plugin for Obsidian that enables a ton of killer features.

Unfortunately, Quartz does not render [[Dataview]] queries or content rendered by other [[Obsidian]] plugins. I believe this is also a problem for other Obsidian static site generators, such as Obsidian Publish. 

#### Workarounds
- There is an `obsidian-run` plugin which you can download on GitHub. It executes the dataview queries and then outputs actual markdown. I believe this could potentially "pre-render" dataview, thus eliminating the problem. 
	- [GitHub - HananoshikaYomaru/obsidian-run: Generate markdown from dataview query and javascript.](https://github.com/HananoshikaYomaru/obsidian-run)  