---
category: apps & services
tags:
  - yaml
  - filemanagement
  - workflows
---
YAML stands for Yet Another Markup Language. It's the text in-between the 3 dashes that you add at the top of a note in Obsidian which allows you to attach metadata (like tags) to the note itself. 

(Obsidian's *Properties* give you a user interface for this, though under the hood it's still just plain text YAML.)

But there's a lot more you can do with this metadata than just add document-level tags. You can create values of all kinds, and use things like [Dataview](https://github.com/blacksmithgu/obsidian-dataview) to organize and display them. In this case, I have a **status** field with a value of **published** that I can use to filter articles I'm working on from articles that I've finished.

![[YAML.png]]
But because this metadata is just plain text, you can also use [Hazel](https://www.noodlesoft.com/) to look at the contents and move the file automatically if it detects a specific text string.

For example, I have a Hazel rule setup that

1. Looks for _Contents_ that _contain_ the text string **status: published**
2. If it finds it, Hazel will automatically _Move_ the file to an **Archive** folder

Here's what the rule looks like:

![[hazel.png]]
This allows me to make a single change in the YAML metadata and Hazel automatically moves the file for me into the appropriate sub-folder so it doesn't clutter up my File Explorer in Obsidian.