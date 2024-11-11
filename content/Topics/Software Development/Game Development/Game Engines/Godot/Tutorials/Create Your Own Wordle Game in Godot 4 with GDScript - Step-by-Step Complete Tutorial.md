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

### UI Layout
- Letter Tiles [00:46](https://www.youtube.com/watch?t=46&v=-4i4revpNBU)
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
			- [17:33](https://www.youtube.com/watch?t=1053&v=-4i4revpNBU) letter_tile.theme
- [23:12](https://www.youtube.com/watch?t=1392&v=-4i4revpNBU)Row:
- [26:14](https://www.youtube.com/watch?t=1574&v=-4i4revpNBU) Keyboard: 
	- [27:04](https://www.youtube.com/watch?t=1624&v=-4i4revpNBU) KeyboardButton:
- [32:36](https://www.youtube.com/watch?t=1956&v=-4i4revpNBU): keyboard_button.gd
- [45:03](https://www.youtube.com/watch?t=2703&v=-4i4revpNBU): Wordpool:  
- [53:30](https://www.youtube.com/watch?t=3210&v=-4i4revpNBU): special_button.gd
- [55:46](https://www.youtube.com/watch?t=3346&v=-4i4revpNBU): Backspace button
	- How to add assets to your project [32:36](https://www.youtube.com/watch?t=1956&v=-4i4revpNBU): keyboard_button.gd
- [45:03](https://www.youtube.com/watch?t=2703&v=-4i4revpNBU): Wordpool:  
- [53:30](https://www.youtube.com/watch?t=3210&v=-4i4revpNBU): special_button.gd
- [55:46](https://www.youtube.com/watch?t=3346&v=-4i4revpNBU): Backspace button
	- How to add assets to your project  
	- [57:02](https://www.youtube.com/watch?t=3422&v=-4i4revpNBU): Displaying an image in a TextureButton 
- [58:42](https://www.youtube.com/watch?t=3522&v=-4i4revpNBU): Laying out the entire keyboard:

### Signals [1:01:04](https://www.youtube.com/watch?t=3664&v=-4i4revpNBU)
 - see [[signals in Godot]] 
- [1:03:50](https://www.youtube.com/watch?t=3830&v=-4i4revpNBU): Connecting signal from UI Keyboard buttons to Keyboard controller
- [1:07:33](https://www.youtube.com/watch?t=4053&v=-4i4revpNBU): Connect Keyboard to parent 
- [1:12:03](https://www.youtube.com/watch?t=4323&v=-4i4revpNBU): Rows controller
	- [1:15:23](https://www.youtube.com/watch?t=4523&v=-4i4revpNBU): Implement `on_keyboard_letter_pressed(letter)`
	-  [1:17:11](https://www.youtube.com/watch?t=4631&v=-4i4revpNBU): Implement `_on_keyboard_backspace_pressed()`
	-   [1:18 :38](https://www.youtube.com/watch?t=4718&v=-4i4revpNBU): Implement `_on_keyboard_enter_pressed()`  
	- [1:19:39](https://www.youtube.com/watch?t=4779&v=-4i4revpNBU): ValidationAlert panel node 
	- [1:23:26](https://www.youtube.com/watch?t=5006&v=-4i4revpNBU): `validate_lenght()`
	- [1:25:22](https://www.youtube.com/watch?t=5122&v=-4i4revpNBU): ValidationAlert script

### Validation Results
- In this section we will tackle how to update the UI of our ResultGrid (rows) when the word is found. 
	- We need to mark the tiles as wrong, correct right placement etc. 
- [1:33:50](https://www.youtube.com/watch?t=5630&v=-4i4revpNBU): on_valid_word
- [1:36:26](https://www.youtube.com/watch?t=5786&v=-4i4revpNBU): `validate_word(word_to_check: String, letters: Array[LetterTile]) -> Array[Enums.State]:`   
- [1:45:17](https://www.youtube.com/watch?t=6317&v=-4i4revpNBU): Update the state for the keyboard
	- [1:45:42](https://www.youtube.com/watch?t=6342&v=-4i4revpNBU): implement `on_letters_validated(used_letters, validation_result):` 
		- [1:47:50](https://www.youtube.com/watch?t=6470&v=-4i4revpNBU): Explanation: We're iterating over all the keys in the keyboard and updating the model for each. 

### Handling when the user wins or loses a game [1:49:40](https://www.youtube.com/watch?t=6580&v=-4i4revpNBU) 
-  In `rows_controller.gd` implement `on_win()`  and `on_lose()`
- [1:51:03](https://www.youtube.com/watch?t=6663&v=-4i4revpNBU): Figure out if the player won or lost in `on_word_valid():`  
- [1:52:23](https://www.youtube.com/watch?t=6743&v=-4i4revpNBU): 🤣 "I will be demonitized".  

### [1:55:01](https://www.youtube.com/watch?t=6901&v=-4i4revpNBU) UI Element to let player know they won or lost

- Connect play again button: [2:01:24](https://www.youtube.com/watch?t=7284&v=-4i4revpNBU) 
- Implement `func show_results(hasWon: bool, word: String, number_of_moves: int):`
- 