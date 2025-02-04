---
category: plugins & code
tags:
  - coreplugins
  - tags
---
You're probably already familiar with the concept of tagging and have seen them used in social media posts like this:

![[twitterhashtag.png]]

But when it comes to tags and Obsidian, there are actually a couple of ways you can implement them:

1. You can apply tags in a line in your note by using **#tag** (where "tag" is whatever tag you want to apply to the line)
2. You can apply a tag to the file itself in the system explorer (i.e. find the file on your Mac using Finder and apply a system-level tag, which doesn't show up in Obsidian)
3. You can apply a tag to an entire note in Obsidian note using YAML

YAML is frontmatter that you add to the top of a note that doesn't count as content in the note itself. You can create a YAML section by using `---` on a new line, then adding the frontmatter data, then closing the section with `---` again like so:

```
---
tags: sketchnotes, sermonnotes
---
```

This applies the tag to the entire note instead of a single line, and shows up in the _Tags_ pane (which I have located in the right sidebar). But when I click the button to go into _Reading Mode_ (or you have *Live Preview* enabled), you'll see that the YAML frontmatter gets transformed into a much more human-readable form using Obsidian's built-in *Properties* feature (assuming you have the *Properties* core plugin toggled on).

![[YAMLproperties.gif]]

This is my preferred way to use tags in Obsidian. Most of the tags I use (with the exception of the ones for journaling) are applied to the entire note using YAML this way.