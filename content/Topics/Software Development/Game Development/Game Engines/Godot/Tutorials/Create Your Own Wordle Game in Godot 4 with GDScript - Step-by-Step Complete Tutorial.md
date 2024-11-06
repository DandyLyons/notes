---
title: Create Your Own Wordle Game in Godot 4 with GDScript - Step-by-Step Complete Tutorial
source: https://www.youtube.com/watch?v=-4i4revpNBU
media_link: https://www.youtube.com/watch?v=-4i4revpNBU
author:
  - "[[CyberPotato]]"
contentPublished: 2024-02-28
noteCreated: 2024-11-04T14:18:20-07:00
description: Welcome to my comprehensive guide on building your very own Wordle game using Godot 4 and GDScript! If you're passionate about game development and love puzz...
tags:
  - clippings
  - video
  - tutorial
takeaways: 
publish: true
---
![Create Your Own Wordle Game in Godot 4 with GDScript - Step-by-Step Complete Tutorial](https://www.youtube.com/watch?v=-4i4revpNBU&t=1802s)

## Description
Welcome to my comprehensive guide on building your very own Wordle game using Godot 4 and GDScript! If you're passionate about game development and love puzz...

**Godot version**: 4.3 (dev beta)
**Final Project**: [GitHub - wojciech-bilicki/WordleTutorial](https://github.com/wojciech-bilicki/WordleTutorial) 

## 📝 Timestamps: 
00:00:00 - Intro
00:00:51 - Letter tile
00:23:27 - Rows setup
00:26:15 - Keyboard button
00:44:49 - Setting up the keyboard
01:01:11 - Keyboard signals
01:12:03 - Rows Controller
01:33:52 - Applying the validation results
01:49:46 - Results UI. Bug fixing
## My Notes

**Final result**: [00:05](https://www.youtube.com/watch?t=5&v=-4i4revpNBU)

## Letter Tiles [00:46](https://www.youtube.com/watch?t=46&v=-4i4revpNBU)
- [01:58](https://www.youtube.com/watch?t=118&v=-4i4revpNBU): Setting up main node
- [02:26](https://www.youtube.com/watch?t=146&v=-4i4revpNBU) Set up clear color
- [04:27](https://www.youtube.com/watch?t=267&v=-4i4revpNBU): Rows (VBoxContainer)
- [04:46](https://www.youtube.com/watch?t=286&v=-4i4revpNBU) Row (HBoxContainer) Scene
- [05:27](https://www.youtube.com/watch?t=327&v=-4i4revpNBU) LetterTile (Panel)
	- [06:32](https://www.youtube.com/watch?t=392&v=-4i4revpNBU): Label
		- Adding colors for the letter tiles. 
			- We'll be using an enum to hold the different letter tile states. 
			- [07:37](https://www.youtube.com/watch?t=457&v=-4i4revpNBU) These directions are out of date: 
				- There is no longer a Autoload tab at the top of Project Settings. It looks like it has been moved to Project Settings -> Global. See docs [here](https://docs.godotengine.org/en/stable/tutorials/scripting/singletons_autoload.html#:~:text=To%20autoload%20a%20scene%20or%20script%2C%20start%20from%20the%20menu%20and%20navigate%20to%20Project%20%3E%20Project%20Settings%20%3E%20Globals%20%3E%20Autoload.). 
			- [10:08](https://www.youtube.com/watch?t=608&v=-4i4revpNBU) Theming the letter tiles to match the enum state
			- - [17:33](https://www.youtube.com/watch?t=1053&v=-4i4revpNBU) letter_tile.theme
				- 