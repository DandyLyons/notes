---
title: Godot 4 Tutorial - Exportable Node Paths
source: https://www.youtube.com/watch?v=5ztwXNLa2-0
media_link: https://www.youtube.com/watch?v=5ztwXNLa2-0
author:
  - "[[Game Gems]]"
contentPublished: 2023-10-03
noteCreated: 2024-11-19
description: Learn how to leverage the NodePath class to create unbreakable Unity-style object references in Godot.Godot NodePath documentation:https://docs.godotengine.o...
tags:
  - clippings
  - video
takeaways:
---
![](https://www.youtube.com/watch?v=5ztwXNLa2-0)

## Description
Learn how to leverage the NodePath class to create unbreakable Unity-style object references in Godot.Godot NodePath documentation:https://docs.godotengine.o...

## My Notes

### See also
- [[NodePath]]

### NodePath Examples
[00:28](https://www.youtube.com/watch?t=28&v=5ztwXNLa2-0)
```gdscript
get_node("path/to/your/node")
$"path/to/your/node"
```
[00:41](https://www.youtube.com/watch?t=41&v=5ztwXNLa2-0): Godot converts your string into a NodePath class: 
So `$"Game World/Player"` becomes `NodePath("Game World/Player")`

### Auto-Updating NodePaths
- [00:55](https://www.youtube.com/watch?t=55&v=5ztwXNLa2-0): NodePaths do not auto update. 
	- They point to a location where a node is. 
	- However if that node moves, the NodePath won't be updated and now it is a broken reference. 
- [01:27](https://www.youtube.com/watch?t=87&v=5ztwXNLa2-0): In the editor, NodePaths are automatically updated, but they are never updated at runtime.

```gdscript
@export var ui: NodePath
# this NodePath will auto update when a change is made in the editor. 
```
