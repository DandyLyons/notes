---
category: plugins & code
tags:
  - journaling
  - communityplugins
---
In addition to the [Daily Questions](https://www.youtube.com/watch?v=3Ev0E-5u5WI) I mentioned in a previous tip, I also have a couple different sections that I frequently capture text to in my Daily Notes:

1. **Entries** - where I log things after significant events
2. **Learnings** - where I capture things I've learned that I think are cool
3. **Gratitude** - where I express gratitude for something different (and specific)

Each of these is set up in my Daily Notes template as a separate section with a distinct second-level header. I capture things to each section in the form of bullets, using the format **- text**.

But this gets a lot easier with the [QuickAdd](https://github.com/chhoumann/quickadd) community plugin, which allows me to capture text from any note and log it in the appropriate section in my daily note.

For example, let's say I'm at my Home note. I can open the Command Palette with **⌘-P**, launch the **QuickAdd: Wins** command, capture my text, then when I navigate to my Daily Note the learning will be in the appropriate section.

![[quickaddwins.gif]]

Here's how I set this up:

- I created a **Capture** macro in the QuickAdd settings
- I captured to my current Daily Note using the `YYYY-MM-DD `date formatting template covered in a previous tip inside my Daily Notes folder using the string `Daily Notes/{{DATE:gggg-MM-DD}}.md`
- I toggled on **Insert After** and designated the Learnings section with **## Wins**
- I used a specific capture format of `- {{VALUE}} #journal/win \n` to create the bullet point, insert the captured text, automatically apply a tag of _journal/learnings_, and create a new line

You'll also need to make sure that the lightning bolt icon is toggled on if you want the QuickAdd macro to show up in the Command Palette as a command.

![[quickaddsetting.png]]

I've created similar QuickAdd macros for _Journal Entries_ and _Gratitude._ This way, I can quickly add journaling info to my Daily Note from anywhere in Obsidian.