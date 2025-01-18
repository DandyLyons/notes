---
title: "Change Input Map During Gameplay In Godot 4.0!"
source: "https://www.youtube.com/watch?v=FlpP2Otz_Rc"
media_link: "https://www.youtube.com/watch?v=FlpP2Otz_Rc"
author:
  - "[[Coding Quests]]"
contentPublished:
noteCreated: 2024-11-20
description: "Hi, thanks for watching our video about 2D/3D Tutorials in Godot 4.0!In this video we'll walk you through:- How To Change InputMap During Gameplay In Godot 4..."
tags:
  - "clippings"
  - "video"
takeaways:
---
![](https://www.youtube.com/watch?v=FlpP2Otz_Rc)

## Description
Hi, thanks for watching our video about 2D/3D Tutorials in Godot 4.0!In this video we'll walk you through:- How To Change InputMap During Gameplay In Godot 4...

## My Notes


```gdscript
func _process(delta):
	print(InputMap.action_get_events("inventory"))

func _input(event):
	InputMap.action_erase_events("inventory")
```