---
category: plugins & code
tags:
  - templates
  - coreplugins
---
One thing we didn't cover in the [[Obsidian University/Obsidian Tips/Plugins & Code/Using Templates]] tip was the use of *template snippets*, which allow you to replace text with values like the current date or time.

I use this in almost every template I have, as I like to have a datestamp for when the template was used in the creation of a note. For example, this template snippet will change to the current date when the note is created.

![[meetingtemplate.png]]
There are 3 types of template snippets you can use:

- **{{title}}** - places the note title
- **{{date}}** - places the current date using the default formatting in the Templates plugin settings
- **{{time}}** - places the current time using the default formatting in the Templates plugin settings

You can also override the default settings by using a colon and then set the format you want to use, like in the above example where I used **{{date:YYYY-MM-DD}}**.