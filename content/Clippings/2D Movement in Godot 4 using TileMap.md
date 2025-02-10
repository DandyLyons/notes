---
title: 2D Movement in Godot 4 using TileMap
source: https://www.youtube.com/watch?v=9u1Dq6h7sGU
media_link: https://www.youtube.com/watch?v=9u1Dq6h7sGU
author:
  - "[[Retrobright]]"
contentPublished: 2023-09-07
noteCreated: 2025-01-28
description: "Assets: https://www.kenney.nl/assets/tiny-dungeonIn this video we take a look at how to implement 2D movement based on TileMap cells in combination with custom data layers and collision shapes."
tags:
  - clippings
  - video
takeaways: 
subjects:
  - "[[tile maps in Godot]]"
Status: INTERESTING
publish: true
Youtube_Duration: 19:26
---
![](https://www.youtube.com/watch?v=9u1Dq6h7sGU)

## Description
Assets: https://www.kenney.nl/assets/tiny-dungeon

In this video we take a look at how to implement 2D movement based on TileMap cells in combination with custom data layers and collision shapes.

## My Notes

### Next Steps
- After this tutorial check out: 
	- [[Point & click 2D grid movement in Godot 4 using AStarGrid2D]] 

### Initial Setup [00:00-00:60]
* [00:00](https://www.youtube.com/watch?t=0) Tutorial introduction: Creating character movement on a tile map using custom data layers and raycasting
* [00:23](https://www.youtube.com/watch?t=23) Created new 2D main scene and imported tilemap (link in video description)
* [00:37](https://www.youtube.com/watch?t=37) Project settings: 160x160 screen size, scaled 4x
* [00:49](https://www.youtube.com/watch?t=49) Set stretch mode to Canvas items and texture filter to nearest for pixel art
### Tilemap Configuration [01:00-02:59]
* [01:00](https://www.youtube.com/watch?t=60) Added tilemap and new tileset
* [01:19](https://www.youtube.com/watch?t=79) Created custom data layer (Boolean) to define walkable tiles
* [01:29](https://www.youtube.com/watch?t=89) Selected and marked walkable floor tiles in tileset
* [02:07](https://www.youtube.com/watch?t=127) Created player node (Node2D) with Sprite
* [02:17](https://www.youtube.com/watch?t=137) Used atlas Sprite with 16x16 pixel grid snap
* [02:51](https://www.youtube.com/watch?t=171) Added camera to Sprite for player tracking

### Input Setup and Movement Logic [03:00-05:34]
* [03:06](https://www.youtube.com/watch?t=186) Created input map for player movement (WASD controls)
* [03:53](https://www.youtube.com/watch?t=233) Implemented function to handle player movement with Vector2 direction
* [04:56](https://www.youtube.com/watch?t=296) Movement implementation steps: (`func move(direction: Vector2)`)
  - Get current tile position
  - Get target tile position
  - Check custom data layer for walkability
  - Move player if valid

### Position Calculation and Movement [05:34-09:00]
* [05:52](https://www.youtube.com/watch?t=352) Getting current tile position using tilemap's local_to_map function
* [06:19](https://www.youtube.com/watch?t=379) Calculating target tile position by combining current position with direction
* [07:25](https://www.youtube.com/watch?t=445) Fetching tile data to check walkability
* [08:28](https://www.youtube.com/watch?t=508) Converting map position to local position for player movement

### Animation and Movement States [09:00-13:27]
* [09:04](https://www.youtube.com/watch?t=544) Added movement animation system
* [09:57](https://www.youtube.com/watch?t=597) Implemented isMoving state to prevent input during movement
* [11:48](https://www.youtube.com/watch?t=708) Added physics_process function for movement handling
* [12:54](https://www.youtube.com/watch?t=774) Implemented smooth movement using move_towards function

### Collision Detection [13:27-19:25]
* [14:17](https://www.youtube.com/watch?t=857) Created enemy entity with collision area
* [15:31](https://www.youtube.com/watch?t=931) Added Area2D for collision detection
* [15:53](https://www.youtube.com/watch?t=953) Set up raycast for collision detection (16 pixels length)
* [17:08](https://www.youtube.com/watch?t=1028) Implemented raycast target position calculation
* [18:19](https://www.youtube.com/watch?t=1099) Added force_raycast_update() to ensure immediate collision detection
* [18:37](https://www.youtube.com/watch?t=1117) Implemented collision check before movement

## Transcript

