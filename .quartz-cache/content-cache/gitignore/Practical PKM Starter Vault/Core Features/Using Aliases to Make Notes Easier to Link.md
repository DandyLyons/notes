---
category: core features
tags:
  - links
---
Obsidian makes it easy to link to notes using internal links (the ones that start with `[[`) but occasionally you may find that a note could have multiple titles.

In these cases, you can use _aliases_ to provide multiple note titles for you to link to. This way, you can make notes more discoverable when using autocomplete to create the note link.

To add an alias, just add a line with `alias: [alias name]` in the YAML metadata section at the top of the note. For example, I have a note titled **MOC - Habits** that also has an alias of **Habits** so I can link to either title.

![[aliases.gif]]

The alias shows up in the autocomplete just like the real note title does, but has an additional arrow icon next to them to help you discern which results are actual note titles and which ones are aliases.