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
subjects:
  - "[[click detection in Godot]]"
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
- [[CollisionShape2D]]  

> [!NOTE] Assessing this strategy
> **Con:** [02:21](https://www.youtube.com/watch?t=141&v=zeYtjYPjCkg) Doesn't handle strange shapes very well. 

### [02:27](https://www.youtube.com/watch?v=zeYtjYPjCkg&t=147s) Making Polygon Colliders in the Editor
- NOTE: You have to **left-click** to see the drop down menu. 

#### Adjusting the CollisionPolygon2D

1. Select your Sprite2D node in the scene tree.
2. Click on the Sprite2D menu at the top of the 2D viewport.
3. Choose "Create CollisionPolygon2D Sibling" from the dropdown menu
In the preview window that appears, you can adjust three main settings:
1. **Simplification:** Lower this value to create a more detailed collision shape that better matches your pixel art sprite. ([Docs](https://docs.godotengine.org/en/stable/tutorials/physics/collision_shapes_2d.html))
2. **Shrink (Pixels):** Adjust this if you want the collision shape to be slightly smaller than the visible sprite.
3. **Grow (Pixels):** Increase this if you want the collision shape to extend beyond the sprite's edges.

**For small pixel art sprites, try the following:**

- Set Simplification to 0 or a very low value for maximum accuracy.
- Keep Shrink and Grow at 0 initially.
- Click "Update Preview" to see the changes in real-time

If the generated shape still doesn't match your sprite perfectly, you can manually edit the CollisionPolygon2D after creation:

1. Select the generated CollisionPolygon2D node.
2. In the 2D viewport, you'll see editable points on the polygon.
3. Click and drag these points to adjust the shape manually.
4. Right-click to add new points if needed.


### [03:22](https://www.youtube.com/watch?v=zeYtjYPjCkg&t=202s) Making Polygon Colliders programmatically
### [06:34](https://www.youtube.com/watch?v=zeYtjYPjCkg&t=394s) Removing the debug lines