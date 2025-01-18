---
title: Godot 4 and GDScript - Part 3 (the lifecycle)
source: https://www.youtube.com/watch?v=yGXZFSs0jt8
media_link: https://www.youtube.com/watch?v=yGXZFSs0jt8
author:
  - "[[FencerDevLog]]"
contentPublished: 2023-10-06
noteCreated: 2024-11-26
description: "📖 Godot 4 book: https://filiprachunek.gumroad.com/l/godot4💡 Get exclusive content on Patreon: https://www.patreon.com/FencerDevLog🚀 Space Shooter tutorial..."
tags:
  - clippings
  - video
takeaways: 
subjects:
  - "[[Node Lifecycle in Godot]]"
publish: true
---
![](https://www.youtube.com/watch?v=yGXZFSs0jt8)

## Description
📖 Godot 4 book: https://filiprachunek.gumroad.com/l/godot4💡 Get exclusive content on Patreon: https://www.patreon.com/FencerDevLog🚀 Space Shooter tutorial...

## My Notes

- [00:36](https://www.youtube.com/watch?t=36&v=yGXZFSs0jt8): 
	- A game is composed of [[scenes in Godot|scenes]] 
	- scenes are created using a tree of [[Topics/Software Development/Game Development/Game Engines/Godot/Nodes/index|nodes]]  that define logic in our game and everything that should happen
- [00:57](https://www.youtube.com/watch?t=57&v=yGXZFSs0jt8): `_` underscore methods like: `_ready()`
	- These are `virtual` functions, provided by the library. 
	- By default they do nothing. 
	- they are designed to be overridden by you and the engine will call them at the appropriate time. 
- `_init()`[02:14](https://www.youtube.com/watch?t=134&v=yGXZFSs0jt8): 
	- Called when the node is initialized. 
	- called with `MyNodeType.new()`
- `_enter_tree()`[02:55](https://www.youtube.com/watch?t=175&v=yGXZFSs0jt8): 
	- Called when the node is added to the scene tree
	- We are guaranteed that the node has been added to the tree, but it may not be ready for use yet. 
- [03:23](https://www.youtube.com/watch?t=203&v=yGXZFSs0jt8) `_ready()`
	- called when all child nodes have been initialized and are ready
	- [04:17](https://www.youtube.com/watch?t=257&v=yGXZFSs0jt8): 
		- `_enter_tree()` is called on each node from trunk to leaf
		- `_ready()` is called from leaf to trunk
			- This is the opposite order from `_enter_tree()`
- [04:52](https://www.youtube.com/watch?t=292&v=yGXZFSs0jt8): `_exit_tree()`: 
	- called when a node exits the tree, for example: 
		- after `remove_child()`
		- after `change_scene_to_file("res://scene.tscn")`
		- after `queue_free()`
	- [06:34](https://www.youtube.com/watch?t=394&v=yGXZFSs0jt8) how to ensure that a thread is terminated correctly: 
```gdscript
func _exit_tree():
	if thread.is_alive():
		thread.wait_to_finish()
```

- [05:20](https://www.youtube.com/watch?t=320&v=yGXZFSs0jt8): `_process(delta)`: 
	- called once every frame: 
	- delta is the elapsed time since the last frame
- [05:51](https://www.youtube.com/watch?t=351&v=yGXZFSs0jt8): `_physics_process(delta)`: 
	- called a fixed number of times per second. Usually 60 times per second
- [06:59](https://www.youtube.com/watch?t=419&v=yGXZFSs0jt8) `_input(_event):`
	- this will be invoked for each input received. 
	- It's usually better to use `_unhandled_input(event)`
- [08:06](https://www.youtube.com/watch?t=486&v=yGXZFSs0jt8)`_notification(what)`: 
	- Use this to respond to miscellaneous, less common notifications
	- Here is how to pause the game when the player clicks outside the window: 
```gdscript
func _notification(what):
	if what == MainLoop.NOTIFICATION_APPLICATION_FOCUS_OUT:
		pause_game()
```
