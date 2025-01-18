---
category: core features
tags:
  - tags
---
You can add a tag in Obsidian a couple of ways:

1. You can add a tag to a line by using the **#** character and the name of the tag (i.e. #obsidian)
2. You can add a tag to a note document inside of YAML metadata

With either method, Obsidian supports nested tags (or sub-tags). With nested tags, a tag nested below another tag will actually apply _both_ tags when used. For example, I have a #**journal** tag and several other tags nested below that (**#win**, **#entry**, and **#gratitude**).

![[nestedtags.png]]
In this case, applying the **#entry** applies the **#journal** tag as well. And both of these tags are visible in the sidebar with the _Tag Pane_ core plugin enabled.