---
title: How to Use Signals in Godot 4 - Editor vs. Code
source: https://www.youtube.com/watch?v=Qlq8pBB2htg
media_link: https://www.youtube.com/watch?v=Qlq8pBB2htg
author:
  - "[[GDQuest]]"
contentPublished: 2023-12-14
noteCreated: 2024-11-07T16:12:44-07:00
description: "🗨 *GDQuest Discord Community* : https://discord.gg/87NNb3Z▶︎ *GODOT 4 COURSES* : https://school.gdquest.com/godot-4-early-access Early Access Starting Jan 3..."
tags:
  - clippings
  - video
takeaways: 
subjects:
  - "[[signals in Godot]]"
---
![How to Use Signals in Godot 4 - Editor vs. Code](https://www.youtube.com/watch?v=Qlq8pBB2htg)

## Description
🗨 *GDQuest Discord Community* : https://discord.gg/87NNb3Z▶︎ *GODOT 4 COURSES* : https://school.gdquest.com/godot-4-early-access Early Access Starting Jan 3...

## My Notes

### Signals Using Code [02:12](https://www.youtube.com/watch?t=132&v=Qlq8pBB2htg)

```GDScript
func _ready():
	# Subscribe to the pressed signal from the Button node
	%Button.pressed.connect(
	# define an anonymous lambda function
		func(): 
			%Character.visible = false # Hide the character when the signal is received
	)
```

### Signals Using Editor [05:00](https://www.youtube.com/watch?t=300&v=Qlq8pBB2htg)
```GDScript
# if this function is connected to a signal then there will be
# a green arrow next to it on the left. 
func _on_body_exited(body):
	%AnimationPlayer.play("close")
```