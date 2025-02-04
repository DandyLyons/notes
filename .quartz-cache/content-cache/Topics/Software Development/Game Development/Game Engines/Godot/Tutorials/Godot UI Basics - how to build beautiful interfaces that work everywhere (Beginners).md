---
title: Godot UI Basics ### how to build beautiful interfaces that work everywhere (Beginners)
source: https://www.youtube.com/watch?v=1_OFJLyqlXI
media_link: https://www.youtube.com/watch?v=1_OFJLyqlXI
author:
  ### "[[Godotneers]]"
contentPublished: 2023-09-01
noteCreated: 2024-11-11
description: Hello Godotneers! Building a nice-looking user interface Godot that works across screen sizes and aspect ratios can be quite a daunting task. This video will...
tags:
  ### clippings
  ### video
takeaways:
---
![](https://www.youtube.com/watch?v=1_OFJLyqlXI)

Godot UI documentation: [https://docs.godotengine.org/en/stabl...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa05EVTZRN3JxWVZsR1kxekQ2RHdjZWRqZm0wQXxBQ3Jtc0trQzNhbnYtWm5zdERLVmZtWC1acXBMQVdpU0dvSE0tcy1RZ3Q1V21pb25YVk9SNUZHRjhxQ0RIZkxIMlIzeHg3d1gtQi0tYkltclE5bjVhNXM5Ylk3WThnOEtDZHd2Yks1S3JHVkg4dzE1XzlTTFZYTQ&q=https%3A%2F%2Fdocs.godotengine.org%2Fen%2Fstable%2Ftutorials%2Fui%2Findex.html&v=1_OFJLyqlXI) 


## My Notes
### [00:00](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=0s) Introduction
### [00:50](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=50s) Scene setup
### [01:27](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=87s) Building a small dashboard
### [04:17](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=257s) Setting up a reference resolution
- [04:34](https://www.youtube.com/watch?t=274&v=1_OFJLyqlXI): Go to Project > Project Settings... > Display > Window > Size > *Viewport Width and Viewport Height* 
	- This is the **reference resolution**
- Most users have the resolution **1920 x 1080**. 

### [06:09](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=369s) Separating the UI into a separate layer

- To display your HUD UI on top of the game, use a CanvasLayer
### [07:16](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=436s) Introduction to containers


### [07:56](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=476s) The 
- [08:47](https://www.youtube.com/watch?t=527&v=1_OFJLyqlXI) NOTE: Containers lay out UI components and do not lay out sprites (like `Node2D` subclasses) types. 
### [08:48](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=528s) Replacing sprites with TextureRects
### [11:22](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=682s) How containers do their work
### [14:33](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=873s) Auto-resizing with PanelContainer
### [15:36](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=936s) MarginContainer for adding borders
### [16:37](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=997s) Why using containers is important
### [17:05](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1025s) Using themes for a custom look
### [17:56](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1076s) Creating a custom look for labels
### [18:47](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1127s) Applying the theme to the UI
### [20:18](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1218s) Creating a custom PanelContainer
### [22:10](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1330s) Applying theme changes
### [22:35](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1355s) Creating a mission dialog
### [23:20](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1400s) Auto-wrapping label text
### [23:41](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1421s) Stacking components with VBoxContainer
### [24:29](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1469s) Creating a variant of the PanelContainer
### [25:50](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1550s) Using a variant in the UI
### [26:09](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1569s) Overriding built-in variations
### [26:51](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1611s) Centering label text
### [27:08](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1628s) Creating custom buttons
### [29:25](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1765s) Horizontal controls with HBoxContainer
### [29:54](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1794s) Controlling the size of controls
### [30:57](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1857s) The "expand" flag
### [32:36](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=1956s) Dividing available space
### [35:00](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=2100s) Sizing flags explained
### [36:55](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=2215s) Centering controls
### [37:17](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=2237s) CenterContainer
### [38:15](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=2295s) Using spacer controls
### [40:18](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=2418s) Handling changes in window size
### [40:43](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=2443s) Anchoring UI elements
### [42:01](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=2521s) Handling different resolutions
### [43:44](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=2624s) Handling different aspect ratios
### [45:45](https://www.youtube.com/watch?v=1_OFJLyqlXI&t=2745s) Conclusion




