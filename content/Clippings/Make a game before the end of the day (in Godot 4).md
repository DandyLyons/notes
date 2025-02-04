---
title: "Make a game before the end of the day (in Godot 4)"
source: "https://www.youtube.com/watch?v=PjN9w_egTeA&list=PL9FzW-m48fn1iR6WL4mjXtGi8P4TaPIAp&index=104"
media_link: "https://www.youtube.com/watch?v=PjN9w_egTeA&list=PL9FzW-m48fn1iR6WL4mjXtGi8P4TaPIAp&index=104"
author:
  - "[[Heartbeast]]"
contentPublished: "2024-02-26"
noteCreated: "2025-01-06"
description: "Thanks for watching this tutorial video about how to make a game in Godot before the end of the day! Take this mini course and finish your first game.Here is the github repo to the project: https://"
tags:
  - "clippings"
  - "video"
takeaways:
subjects:
Status: "DROPPED"
publish: true
Youtube_Duration: "1:22:11"
---
![](https://www.youtube.com/watch?v=PjN9w_egTeA&list=PL9FzW-m48fn1iR6WL4mjXtGi8P4TaPIAp&index=104)

## Description
Thanks for watching this tutorial video about how to make a game in Godot before the end of the day! Take this mini course and finish your first game.

Here is the github repo to the project: https://github.com/uheartbeast/make-your-first-game-mini-course/tree/main

If you are interested in taking a deeper dive into the Godot game engine you can buy my 1-bit Godot Course at this link: https://www.heartgamedev.com/1-bit-godot-course-youtube

Twitter: https://twitter.com/uheartbeast

Thank you all so much for your support!

## My Notes
- [00:00](https://www.youtube.com/watch?v=PjN9w_egTeA&t=0): Agenda
	- You should be able to finish this project before the end of the day. 
- [01:39](https://www.youtube.com/watch?t=99&v=PjN9w_egTeA): Start of tutorial: Installing Godot
- [02:03](https://www.youtube.com/watch?t=123&v=PjN9w_egTeA): Creating a project
- [03:42](https://www.youtube.com/watch?t=222&v=PjN9w_egTeA): Downloading assets
- [04:43](https://www.youtube.com/watch?t=283&v=PjN9w_egTeA): Project settings
	- Texture Filter: Nearest (for pixel art)
	- [05:31](https://www.youtube.com/watch?t=331&v=PjN9w_egTeA): Viewport dimensions
	- [06:25](https://www.youtube.com/watch?t=385&v=PjN9w_egTeA): Scale window size to stretch it larger
		- Under "stretch > Mode > viewport"
		- See also [28:00](https://www.youtube.com/watch?t=1680&v=PjN9w_egTeA) 
	- [07:08](https://www.youtube.com/watch?t=428&v=PjN9w_egTeA): Also look for Window width override
- [08:02](https://www.youtube.com/watch?t=482&v=PjN9w_egTeA): Explanation of [[Topics/Software Development/Game Development/Game Engines/Godot/Nodes/index|Nodes in Godot]]. 
- 9:00: Adding background sprite
- [11:47](https://www.youtube.com/watch?t=707&v=PjN9w_egTeA): [[StaticBody2D]] used for objects that are not going to move, but need collision. e.g. wall
	- [[CharacterBody2D]] player controlled character
		- the balloon
	- [[RigidBody2D]]: physics controlled object
		- sawblades
- 14:14: Defining wall collision objects
- 14:45: Duplicating nodes (how to make unique)
	- By default duplicated nodes will share resources, so editing one will affect the other. 
	- In this example, go into the [[CollisionShape2D]], click the **Shape** in the inspector and click *Make Unique*
- [16:31](https://www.youtube.com/watch?t=991&v=PjN9w_egTeA): Defining balloon playable character
	- [18:56](https://www.youtube.com/watch?t=1136&v=PjN9w_egTeA): How to turn Snapping on
- [19:01](https://www.youtube.com/watch?t=1141&v=PjN9w_egTeA): Locking nodes and their children
- [20:33](https://www.youtube.com/watch?t=1233&v=PjN9w_egTeA): Script for balloon object: 
- [27:57](https://www.youtube.com/watch?t=1677&v=PjN9w_egTeA): Fix *jittery* movement
	- Switch Stretch Mode from *viewport* to *canvas items*
		- **viewport** means "snap items to pixels"
- [28:59](https://www.youtube.com/watch?t=1739&v=PjN9w_egTeA): Creating sawblades ([[RigidBody2D]]). 
	- **Damping mode**: [32:53](https://www.youtube.com/watch?t=1973&v=PjN9w_egTeA): *Replace* means that when it collides with another object, it will change directions without losing speed. 
- [33:29](https://www.youtube.com/watch?t=2009&v=PjN9w_egTeA): [[Collisions in Godot#Collision Layers]]
	- Edit layer names
	- >[34:29](https://www.youtube.com/watch?t=2069&v=PjN9w_egTeA): *The **layer** is where you are and the **mask** is what you're looking to.*
	- *My understanding*: 
		- The **layer** is like **who the object will talk to**. (i.e. output)
		- The **mask** is like **who the object will listen to** (i.e. input)
- [35:47](https://www.youtube.com/watch?t=2147&v=PjN9w_egTeA): Making the sawblades spin with [[AnimationPlayer]] 
	- Rotating 90 deg. every second and looping the animation. 
- [39:39](https://www.youtube.com/watch?t=2379&v=PjN9w_egTeA): The ballon's hurtbox
	- **There are multiple types of collisions**: touches and overlaps. 
- [47:31](https://www.youtube.com/watch?t=2851&v=PjN9w_egTeA): Telegraphing the position and direction of new saw blades that will be spawned
- [1:04:40](https://www.youtube.com/watch?t=3880&v=PjN9w_egTeA): Defining the spawn zone of new saw blades: 
- 1:10:00: Creating an Events singleton in autoload
- [1:13:23](https://www.youtube.com/watch?t=4403&v=PjN9w_egTeA): Adding a UI
- [1:18:06](https://www.youtube.com/watch?t=4686&v=PjN9w_egTeA): How to export a project