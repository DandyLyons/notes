---
title: "Every Variant in Godot 4"
source: "https://www.youtube.com/watch?v=RM_ExxV-0Qo"
media_link: "https://www.youtube.com/watch?v=RM_ExxV-0Qo"
author:
  - "[[SDG Games]]"
contentPublished:
noteCreated: 2024-11-19
description: "In this video, we take a look at every Variant in the Godot game engine. Variants are the foundation for all types in Godot, so starting here will prepare us..."
tags:
  - "clippings"
  - "video"
takeaways:
---
![](https://www.youtube.com/watch?v=RM_ExxV-0Qo)

## Description
In this video, we take a look at every Variant in the Godot game engine. Variants are the foundation for all types in Godot, so starting here will prepare us...

## My Notes
### [00:00](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=0s) Intro
### [01:34](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=94s) Static Typing Vs Variants

### [02:54](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=174s) Floats vs Ints
### [06:48](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=408s) Boolean
### [07:14](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=434s) Strings
### [07:36](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=456s) What is a variant
A variant is a type that can dynamically change (e.g. from String to int). 

### [10:11](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=611s) Colors
### [10:39](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=639s) Vectors
### [13:18](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=798s) Arrays 
### [15:08](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=908s) Dictionary
### [16:32](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=992s) Packed Arrays

There are various array types in Godot that only work with one specific type: 
- `PackedByeArray`
- `PackedColorArray`
- `PackedStringArray`
- etc. 
### [18:57](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=1137s) Arrays vs PackedArrays
packed arrays are less flexible but are more optimized. They take up less space, and are more performant. 

**Recommendation**: Start with a "regular" `Array` and don't switch to a packed array unless you have a performance problem, or you know in advance that you will deal with very large datasets. 

See also: [Typed VS Packed array - Archive - Godot Forum](https://forum.godotengine.org/t/typed-vs-packed-array/3619)
### [23:37](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=1417s) Long winded explanation of strings and pointers

### [25:00](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=1500s) StringName
- See docs on [StringName](https://docs.godotengine.org/en/latest/classes/class_stringname.html#class-stringname) 

[26:14](https://www.youtube.com/watch?t=1574&v=RM_ExxV-0Qo): A StringName is like a String that acts like a singleton

StringName literal syntax
```gdscript
@export var string_name: StringName = &"Hello" 
```

### [28:03](https://www.youtube.com/watch?t=1683&v=RM_ExxV-0Qo) NodePath
[[NodePath]] literal syntax
```gdscript
@export var node_path: NodePath = ^"Hello" 
```


### [30:41](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=1841s) Objects

### [31:20](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=1880s) RID
### [32:17](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=1937s) Signals and Callables
### [36:27](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=2187s) Transformations - Rect2
- `Rect2` simple type representing a rectangle
	- uses `float` to represent values
	- has two `Vector2`s representing: 
		- origin: x and y of the top left corner
		- size: the width and height of the rect
- There is also a `Rect2i` which uses `int` instead

- **Use case**: rects are often used for collision detection. 

### [38:02](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=2282s) Transform2D
### [40:37](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=2437s) Rect2i and Transform2D demo
### [41:20](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=2480s) AABB
### [42:19](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=2539s) Basis 
### [43:35](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=2615s) Transform3D
### [46:50](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=2810s) Plane
### [47:26](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=2846s) Projections
### [48:05](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=2885s) Recap
### [48:37](https://www.youtube.com/watch?v=RM_ExxV-0Qo&t=2917s) Outro


### Corrections From the Author
Corrections:
[33:30](https://www.youtube.com/watch?t=2010&v=RM_ExxV-0Qo) - I was using the old approach to signals, it's now possible to use signals without strings at all:

`signal signal_name`
`signal_name.connect(function_name)`
`signal_name.emit()`

If you want to send arguments along, you can bind them to the function when connecting or emit them as comma separated list:

`signal_name.connect(function_name.bind(23423,"AAAAA"))`
`signal_name.emit(23423,"AAAAA")`

At [09:48](https://www.youtube.com/watch?t=588&v=RM_ExxV-0Qo), I said "strong typing," but should have said "static typing." Godot is dynamic, with the ability to be static.

### Comments
16:33 The best way to make a strongly typed Dictionary is to make and export your own class in another Godot script that can then be imported anywhere.