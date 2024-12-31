---
title: Using Obsidian as a Gaming Backlog Library
author:
  - Bryan Hogan
contentPublished: 
noteCreated: 2024-12-28
tags:
  - clippings
  - article
description: How to use Obsidian as a gaming backlog library. Get a long-lasting overview of games you want to and have played.
takeaways: 
Status: ✅ Read
url: https://bryanhogan.com/blog/obsidian-gaming-backlog
publish: true
---
FROM: https://bryanhogan.com/blog/obsidian-gaming-backlog

## Highlights
How it looks using way 1, the “Projects” plugin:

![Obsidian game library view using the "Projects" plugin](https://bryanhogan.com/_astro/Obsidian-Game-Library-Projects-Gallery-View.B8gtIR8N_2r73NG.webp)

How it looks using way 2, “dataview” plugin with custom styling via CSS snippets:

![Obsidian game library view using the "Dataview" plugin](https://bryanhogan.com/_astro/Obsidian-Game-Library-Dataview-wideview-Added.DNjtO74r_2hMDkG.webp)

## Using the “Projects” plugin

A simple way for managing your game entries is by using the “Projects” plugin.

Now you can click on the `Open projects` icon on the far left. You will get a view that should look somewhat like the following.

![Obsidian Projects Table view](https://bryanhogan.com/_astro/Obsidian-Game-Library-Projects-First-View.BuV8OVYW_14YRvP.webp)

## Using the “dataview” plugin with CSS snippets

Another way to display the game entries can be achieved by using the `Dataview` plugin and CSS snippets.

Then add the following code:

```plaintext
\`\`\`dataview
TABLE "![cover|20](" + cover + ")" AS "Cover", status
FROM "Games"
\`\`\`
```

How it should look in reading mode:

![Obsidian game overview note dataview query in read mode](https://bryanhogan.com/_astro/Obsidian-Game-Library-Dataview-Reading-Mode-Setup.D7VnmLbn_15ufvK.webp)

We will use two snippets: Cards and Wide Views.  
Download them: [Cards Snippet Download](https://bryanhogan.com/documents/Obsidian-Cards-Snippet.css) & [Wide Views Snippet Download](https://bryanhogan.com/documents/Obsidian-Wide-Views-Snippet.css).

But we haven’t used the `Wide Views` CSS snippet yet. So what do we use it for? Well, for, for wide views!

Include `wide-dataview` (and make sure both CSS snippets are active in the settings) and voilà! Less wasted space, I think this makes this view much nicer.

```plaintext
\`\`\`dataview
TABLE "![cover|20](" + cover + ")" AS "Cover", status
FROM "Games"
WHERE status = "Playing"
\`\`\`
```

- The [Game Search Plugin](https://obsidian.md/plugins?id=game-search). With it you can quickly make new game entries and automatically add metadata information such as release date, publisher, Metacritic score and more.

I don’t use the Game Search Plugin as I don’t find the information it adds useful, but I do use the [Book Search Plugin](https://obsidian.md/plugins?id=obsidian-book-search-plugin).

## My Notes