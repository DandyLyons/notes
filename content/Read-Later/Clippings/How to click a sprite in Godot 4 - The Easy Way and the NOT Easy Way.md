---
title: How to click a sprite in Godot 4 - The Easy Way and the NOT Easy Way
source: https://www.youtube.com/watch?v=zeYtjYPjCkg
media_link: https://www.youtube.com/watch?v=zeYtjYPjCkg
author:
  - "[[Real Robots]]"
contentPublished: 2024-05-20
noteCreated: 2024-11-29
description: Just a quick one I wanted to cover, hopefully there's still a few people out there who don't know how to do this so my effort won't be wasted :-)The best way...
tags:
  - clippings
  - video
takeaways:
---
![](https://www.youtube.com/watch?v=zeYtjYPjCkg&t=320s)

## Description
Just a quick one I wanted to cover, hopefully there's still a few people out there who don't know how to do this so my effort won't be wasted :-)The best way...

## My Notes
### [00:00](https://www.youtube.com/watch?v=zeYtjYPjCkg&t=0s) The code!  

```gdscript
extends Sprite2D

func _input(event):
	if event is InputEventMouseButton:
		if is_pixel_opaque(get_local_mouse_position()):
			print("sprite clicked")
```


> [!NOTE] Assessing this method
> **Pro**: Simpler graph of nodes. Easy to set up. 
> **Con:** Requires a custom script to be added and code to be added every time you want to use this method. It would be more convenient/reusable to simply add a "ClickDetector" node as a child.

### [00:37](https://www.youtube.com/watch?v=zeYtjYPjCkg&t=37s) But use the Action System instead! 

It's better not to hard code your inputs. Instead use the [[action system in Godot]]. 
### [01:20](https://www.youtube.com/watch?v=zeYtjYPjCkg&t=80s) Area2D and CollisionShape method 
- [[Area2D]]
- [[CollisionShape]] 

> [!NOTE] Assessing this strategy
> **Con:** [02:21](https://www.youtube.com/watch?t=141&v=zeYtjYPjCkg) Doesn't handle strange shapes very well. 

### [02:27](https://www.youtube.com/watch?v=zeYtjYPjCkg&t=147s) Making Polygon Colliders in the Editor


### [03:22](https://www.youtube.com/watch?v=zeYtjYPjCkg&t=202s) Making Polygon Colliders programmatically
### [06:34](https://www.youtube.com/watch?v=zeYtjYPjCkg&t=394s) Removing the debug lines