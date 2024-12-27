---
category: pkm 101
tags:
  - mindset
  - notes
  - links
---
One of the key features that make Obsidian great is _bidirectional linking_. This is different than traditional web or wiki-style links which provided a way to get from one note to another, but don't offer a return route. But in Obsidian, a link between two notes serves as a two-way street between them.

You can create a link between notes a couple of different ways.

First, when you are editing or creating a note, you can add a link to another note by putting the note title inside of `[[` characters like so:

```
[[note title]]
```

But you can also add links after the fact by using the _Unlinked Mentions_ section in the _Backlinks_ tool in the sidebar.

The _Backlinks_ section for a note will show 2 things:

1. Any mentions of the currently selected note that are already linked in other notes (and show up in the Local Graph)
2. Any other places in your entire Obsidian vault where the title of the note is used

The second is called an _Unlinked Mention_, and makes it easy to surface places in your vault where you may have missed an opportunity to link two notes together.

And the best part: to add the link, all you need to do is hover over the entry and click the _Link_ button.

![[bidirectionallinks.gif]]

This automatically adds the double brackets in the other note without leaving the note you're viewing, creating the bidirectional link between them.