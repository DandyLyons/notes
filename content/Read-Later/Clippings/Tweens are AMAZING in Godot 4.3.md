---
title: Tweens are AMAZING in Godot 4.3
source: https://www.youtube.com/watch?v=sJQydvy3uT8
media_link: https://www.youtube.com/watch?v=sJQydvy3uT8
author:
  - "[[Cashew OldDew]]"
contentPublished: 2024-06-26
noteCreated: 2024-11-20
description: "DISCLAIMER: This video was filmed in Godot 4.2.2, but I changed the title to Godot 4.3 as nothing between those versions affected the features presented in t..."
tags:
  - clippings
  - video
takeaways: 
subjects:
  - "[[tweens in Godot]]"
---
![](https://www.youtube.com/watch?v=sJQydvy3uT8)

## Description
DISCLAIMER: This video was filmed in Godot 4.2.2, but I changed the title to Godot 4.3 as nothing between those versions affected the features presented in t...

## My Notes


### [0:00](https://www.youtube.com/watch?v=sJQydvy3uT8&t=0s) Basic Tweens 

```gdscript
var tween = create_tween() # Lives as long as the node
var global_tween = get_tree().create_tween() # Lives as long as the scene 
```

```gdscript
# move to the right over 2 seconds
tween.tween_property(self, "position", position + Vector2.RIGHT * 200, 2)
```

[03:11](https://www.youtube.com/watch?t=191&v=sJQydvy3uT8)
```gdscript
tween.tween_property(self, "position:x", position.x + 200, 2)
```

[03:56](https://www.youtube.com/watch?t=236&v=sJQydvy3uT8)
```gdscript
tween.tween_property(self, "position:x", 200, 2).as_relative()
```

#### Repeating tween
[04:49](https://www.youtube.com/watch?t=289&v=sJQydvy3uT8)
```gdscript
var tween = create_tween().set_loops() # loop indefinitely
var tween = create_tween().set_loops(5) # loop 5 times
```

[06:16](https://www.youtube.com/watch?t=376&v=sJQydvy3uT8)
Animate horizontally from x:-200 to x:1200 over 2. 
```gdscript
tween.tween_property(self, "position:x", 1200, 2).from(-200)
```
### [6:51](https://www.youtube.com/watch?v=sJQydvy3uT8&t=411s) Advanced Tweens

```gdscript
var tween = get_tree().create_tween()
# Shrink the character to nothing over 3 seconds. 
tween.tween_property(self, "scale", Vector2.ZERO, 3)
# At this point the character still exists in the tree, but is 
# too small to see.
```
[09:37](https://www.youtube.com/watch?t=577&v=sJQydvy3uT8)
```gdscript
tween.tween_property(self, "scale", Vector2.ZERO, 3)

tween.tween_callback(queue_free)
# after the tween is finished, remove self from the scene tree. 
```

[10:11](https://www.youtube.com/watch?t=611&v=sJQydvy3uT8)
```gdscript
tween.tween_property(self, "scale", Vector2.ZERO, 3)
tween.tween_callback(shrunk.bind("Bye Bye"))
# Prints "Bye Bye" after the tween finishes.

func shrunk(message):
	print(message)
```

[10:46](https://www.youtube.com/watch?t=646&v=sJQydvy3uT8)
```gdscript
tween.tween_interval(2) # pause for 2 seconds before continuing onto the next step in this tween's animation
```

[11:02](https://www.youtube.com/watch?t=662&v=sJQydvy3uT8)
```gdscript
tween.tween_method(shrunk, 0, 200, 3)
# Repeatedly call shrunk method passing in values from 0 to 200
# over the duration of 3 seconds
```
### [13:07](https://www.youtube.com/watch?v=sJQydvy3uT8&t=787s) Tween parallelism
```gdscript 
# runs each tween one after another
var tween = create_tween() # right THEN down

 # runs each tween at the same time
var tween = create_tween().set_parallel(true) # diagonal down-right

tween.tween_property(self, "position:x", 200, 2) # move left
tween.tween_property(self, "position:y", 200, 2) # move down
```

### [16:00](https://www.youtube.com/watch?v=sJQydvy3uT8&t=960s) Animating multiple nodes
### [17:55](https://www.youtube.com/watch?v=sJQydvy3uT8&t=1075s) Tweens in practice - Triggering tween from input events

### [23:55](https://www.youtube.com/watch?v=sJQydvy3uT8&t=1435s) Transitions and Easing 

- Transition: a mathematical function that the tween should follow
- Easing: how quickly the tween should begin to follow that function
- [25:32](https://www.youtube.com/watch?t=1532&v=sJQydvy3uT8): [Tween Interactive Cheat Sheet](https://vitorgus.github.io/Godot-Tween-Interactive-Cheat-Sheet/)
