---
aliases:
  - "`await` keyword"
---

> [!tip]- Historical Context
> `await` is a relatively recent keyword in [[Topics/Software Development/Programming Languages/GDScript/index|GDScript]]. 
> Before, the [[`yield` in GDScript|yield keyword]]  was used. 


![AWAIT! Use the New Keyword in GDScript - Godot 4 - YouTube](https://www.youtube.com/watch?v=zumZ2Y9mPNQ) 

```gdscript
func _on_button_pressed() -> void:
	$SlimeSkin.hurt()
	await $SlimeSkin.animation_finished
	# 👆🏼 `animation_finished` is a signal. 
	# We are waiting until the signal is emitted.
	%Button.disabled = true
	%Button.text = "Can't hurt me!"
```