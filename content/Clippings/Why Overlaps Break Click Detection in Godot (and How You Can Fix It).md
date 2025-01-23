---
title: Why Overlaps Break Click Detection in Godot (and How You Can Fix It)
source: https://www.youtube.com/watch?v=pk3tkcHZi2g
media_link: https://www.youtube.com/watch?v=pk3tkcHZi2g
author:
  - "[[Cashew OldDew]]"
contentPublished: 2025-01-13
noteCreated: 2025-01-23
description: "Wishlist Fangs & Faith Solitaire now: https://store.steampowered.com/app/3032430/Fangs__Faith_Solitaire/Hello everyone! You might want to make a game in whic..."
tags:
  - clippings
  - video
takeaways: 
subjects:
  - "[[click detection in Godot]]"
  - "[[draggable UI in Godot]]"
Status: 🙏🏼 Want To Read
publish: true
Youtube_Duration: 15:31
---
![](https://www.youtube.com/watch?v=pk3tkcHZi2g)

## Description
Wishlist Fangs & Faith Solitaire now: https://store.steampowered.com/app/3032430/Fangs__Faith_Solitaire/

Hello everyone! You might want to make a game in which you drag or select things with your mouse, but you'll soon find out that doing this is not as easy as one might expect, especially if there are overlapping areas. In this video we are taking a look at how to have a click event no propagate through multiple overlapping areas. While, at first, this might seem like a simple task, you'd quickly notice a nasty issue: clicking on an area emits the input event of all areas underneath that area. We explore how to fix this issue with control nodes and with intersecting points.

Resources:
Mouse filter property: https://docs.godotengine.org/en/stable/classes/class_control.html#class-control-property-mouse-filter
The intersect point function: https://docs.godotengine.org/en/stable/classes/class_physicsdirectspacestate2d.html#class-physicsdirectspacestate2d-method-intersect-point

--------------------
Github repository for this project.
TO BE UPDATED

Support me on Ko-Fi: https://ko-fi.com/cashewolddew
## My Notes

### [0:00](https://www.youtube.com/watch?v=pk3tkcHZi2g&t=0s) The problem...
- When a click is detected on a coordinate where the cards are overlapping, then both cards are picked up, instead of just the top one. 
- Old setup: The card is an [[Area2D]]. When the `_input_event` signal goes off, then the script sets the card's `isDragging` to True. 
### [1:57](https://www.youtube.com/watch?v=pk3tkcHZi2g&t=117s) Stopping click propagation on overlapping areas with Control Nodes
- Two ways of solving this issue: 
	1. Using a [[Control node in Godot]] 
		- Use a TextureRect instead of a Sprite2D
		- [03:05](https://www.youtube.com/watch?t=185&v=pk3tkcHZi2g): Centering the control node
		- [03:28](https://www.youtube.com/watch?t=208&v=pk3tkcHZi2g): Advantage of using Control over Area2D
			- it has a property called `mouse` which allows us to stop the propagation of the mouse event

### [5:31](https://www.youtube.com/watch?v=pk3tkcHZi2g&t=331s) The caveats of using Control Nodes
- [05:18](https://www.youtube.com/watch?t=318&v=pk3tkcHZi2g): Caveats: 
	1. The click detection is determined by the ordering in the scene tree, not the ordering property of the CanvasItem. 
		- In other words, even if the card is visually on top, this does not mean that it will be the one that receives the click detection. 
	2. [06:26](https://www.youtube.com/watch?t=386&v=pk3tkcHZi2g): If another control is above, and has a mouse filter set to `stop` then it will block click detection

### [7:27](https://www.youtube.com/watch?v=pk3tkcHZi2g&t=447s) Stopping click propagation on overlapping areas with Intersect Points
- Using an intersect point function: 
	- Setup: Using an [[Area2D]] like before (not a [[Control node in Godot|Control]]). 
