---
category: plugins & code
tags:
  - embed
---
You can actually embed just about any web app inside of an Obsidian note using an iFrame. This can be useful if you want to view web data from inside your Obsidian vault. For example, I have a note called _Focused Planning_ which is simply an embedded Google Sheet.

![[embediframe.png]]

I can make edits to the Google Sheet right from this note in Obsidian.

Here's the code you need to embed a web URL in an Obsidian note:

`<iframe src="URL" style="position: absolute; width: 100%; height: 500px;"></iframe>`

You can modify the width and height by using either a percentage or a number of pixels depending on your preference. And if you want to invert the color of the website (like I did in the Google Sheet above), you can add an additional **filter: invert(1)** property, like so:

` <iframe src="URL" style="position: absolute; width: 100%; height: 500px; filter: invert(1)"></iframe>`

It's not perfect, but it's a lot less jarring than a white embedded website in a dark Obsidian note.