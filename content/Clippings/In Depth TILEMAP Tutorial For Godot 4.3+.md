---
title: In Depth TILEMAP Tutorial For Godot 4.3+
source: https://www.youtube.com/watch?v=ZutpG0_CYrQ
media_link: https://www.youtube.com/watch?v=ZutpG0_CYrQ
author:
  - "[[DevWorm]]"
contentPublished: 2024-08-29
noteCreated: 2025-01-27
description: The TileMap and TileMapLayer nodes are so powerful, and it is important to learn how to use the Godot tilemap, and get the most out of it when developing in Godot 4.3+. So today I have create a comple
tags:
  - clippings
  - video
takeaways: 
subjects:
  - "[[tile maps in Godot]]"
Status: 👀 Reading
publish: true
Youtube_Duration: 39:13
---
![](https://www.youtube.com/watch?v=ZutpG0_CYrQ)

## Description
The TileMap and TileMapLayer nodes are so powerful, and it is important to learn how to use the Godot tilemap, and get the most out of it when developing in Godot 4.3+. So today I have create a complete tilemap tutorial which should cover everything you need to know about the tilemap system like animating tiles, terrains or auto tiling, collisions, custom tiles, tile map layering, and so much more. I hope this video is able to help you out. If you come across any issues or have any questions then please let me know in the comments and Ill get back to you!!  

Join the Game Dev’s Paradise on Discord: https://discord.gg/TYWkqSYRHm



Thank you so much for watching, I really hope this video helped.

if you did enjoy or this video was helpful then all I ask is if you could please subscribe to help out the channel. It means so much and I love your feedback in the comments. I’ll look forward to getting back to you soon! Again thanks so much and I would love to see you again!

These Tutorials take a lot of time to create and I’m working on becoming a better Teacher and learning how to explain Godot things in a better way, if you’d like to support this journey to expand knowledge and help other game dev’s learn to create their own games then please.. Become a Member! It would mean the world and you’ll help me out so much! Thank you!

have a great rest of your day and of course be safe :)

      - thanks DevWorm

## My Notes
### See also
- [[tile maps in Godot]] 
### [0:00](https://www.youtube.com/watch?v=ZutpG0_CYrQ&t=0s) Intro
[Link to Art Used in this Tutorial](https://analogstudios.itch.io/fantasy/download/eyJleHBpcmVzIjoxNzI0NzI1MzQ5LCJpZCI6MTE0OTIxOX0%3d.XRkw%2bVrgdqcGEOHAU%2bgZZyXE5Yc%3d) 
### [0:25](https://www.youtube.com/watch?v=ZutpG0_CYrQ&t=25s) [[TileMap]] Basics
- You can do layering in a vanilla TileMap, but it is better to do it in TileMapLayer. 
- [01:44](https://www.youtube.com/watch?t=104&v=ZutpG0_CYrQ): Creating a [[TileSet]] 
	- The TileSet is like a palette of tiles that you can reuse throughout your TileMap. 
	- The TileSet basically cuts your image into a bunch of square tiles. 
	- Then you can paint these tiles onto your TileMap.
- [03:26](https://www.youtube.com/watch?t=206&v=ZutpG0_CYrQ): Painting tiles onto a TileMap
- [06:22](https://www.youtube.com/watch?t=382&v=ZutpG0_CYrQ): THE PROBLEM: Adding an item tile onto a land tile
- [06:46](https://www.youtube.com/watch?t=406&v=ZutpG0_CYrQ): THE OLD WAY: The layering tab on [[TileMap]]. 
	- It's better to use [[TileMapLayer]] for layers in the future. 
- [07:47](https://www.youtube.com/watch?t=467&v=ZutpG0_CYrQ): Combining two tiles into one. 
	- [08:29](https://www.youtube.com/watch?t=509&v=ZutpG0_CYrQ): After combining the tiles you need to update the origin. 
	- Click on Paint tab > Texture Origin
- [10:36](https://www.youtube.com/watch?t=636&v=ZutpG0_CYrQ): Adding [[Collisions in Godot|collisions]] to your tiles: 
	- In Inspector > TileMap > Physics Layer
### [15:03](https://www.youtube.com/watch?v=ZutpG0_CYrQ&t=903s) [[TileMapLayer]] Node Tutorial
- [15:31](https://www.youtube.com/watch?t=931&v=ZutpG0_CYrQ): Extracting layers in a [[TileMap]] into individual [[TileMapLayer]] nodes. 
	- A TileMapLayer is a TileMap with only one layer. 
	- [17:20](https://www.youtube.com/watch?t=1040&v=ZutpG0_CYrQ): Use "Kinematic Body" is the same thing as "Collision Enable"
### [20:36](https://www.youtube.com/watch?v=ZutpG0_CYrQ&t=1236s) Benefits of The TileMapLayer Node
- TileMapLayer has better performance
- You can group layers which makes organization easier. 
### [22:09](https://www.youtube.com/watch?v=ZutpG0_CYrQ&t=1329s) Tile Animation Tutorial
- 
### [30:11](https://www.youtube.com/watch?v=ZutpG0_CYrQ&t=1811s) Auto Tiling / Terrains Tutorial
- NEW WAY 
	- Add in a terrain Set TileSet to the 
### [37:21](https://www.youtube.com/watch?v=ZutpG0_CYrQ&t=2241s) Tutorial Recap
## Transcript

