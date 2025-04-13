---
title: "Data models - using data to create extensible, maintainable games in Godot"
source: "https://www.youtube.com/watch?v=4vAkTHeoORk"
media_link: "https://www.youtube.com/watch?v=4vAkTHeoORk"
author:
  - "[[Godotneers]]"
contentPublished: "2024-01-28"
noteCreated: "2024-11-30"
description: "Hello Godotneers! Every game revolves around data. Your game may have items, unit types, crafting recipes, dialogue, quests and a lot more. Handling all this..."
tags:
  - "clippings"
  - "video"
takeaways:
publish: true
Status: "👀 Reading"
---
![](https://www.youtube.com/watch?v=4vAkTHeoORk&t=4935s)

## Description
Hello Godotneers! Every game revolves around data. Your game may have items, unit types, crafting recipes, dialogue, quests and a lot more. Handling all this...

## My Notes


### [00:00](https://www.youtube.com/watch?v=4vAkTHeoORk&t=0s) Introduction
- This video focuses on how to make data models in Godot more composable and reusable. 

### [01:18](https://www.youtube.com/watch?v=4vAkTHeoORk&t=78s) A database of items
- [05:04](https://www.youtube.com/watch?t=304&v=4vAkTHeoORk)This is a **data model**. It just hold data. 
	- It is not concerned with how the data is shown or used. 
- [05:21](https://www.youtube.com/watch?t=321&v=4vAkTHeoORk): Using a Dictionary as a database of items.

```gdscript
class_name Items
const Database = {
	"pickaxe": {
		"name": "Pickaxe"
	}
}
```

[06:46](https://www.youtube.com/watch?t=406&v=4vAkTHeoORk)
```gdscript
extends Node3D
func _on_area_3d_body_entered(body):
	if body.has_method("on_item_picked_up"):
		body.on_item_picked_up("pickaxe") # problem: this pickaxe ID is hard coded, so this code only works for pickaxes.
		queue_free() # make the pickaxe disappear on the world because the character picked it up
```

[07:58](https://www.youtube.com/watch?t=478&v=4vAkTHeoORk)
```gdscript
func on_item_picked_up(item_id: String):
	print("I got a ", Items.Database[item_id].name)
```

[09:38](https://www.youtube.com/watch?t=578&v=4vAkTHeoORk)
```gdscript
extends Node3D

@export var item_id: String
func _on_area_3d_body_entered(body):
	if body.has_method("on_item_picked_up"):
		body.on_item_picked_up(item_id) 
		queue_free() 
```

[09:44](https://www.youtube.com/watch?t=584&v=4vAkTHeoORk)
**How do we tell our pickup object which 3D model to display in the world?** 
```gdscript
class_name Items
const Database = {
	"pickaxe": {
		"name": "Pickaxe",
		"scene": "res://elements/pickaxe/pickaxe.glb" # tip: you can drag in your 3D asset and Godot will input the string for the path
	}
}
```

[10:44](https://www.youtube.com/watch?t=644&v=4vAkTHeoORk): 
```gdscript
extends Node3D

@export var item_id: String

func _ready():
	var scene = load(Items.Database[item_id].scene)
	var instance = scene.instantiate()
	# now the scene is loaded at runtime in code
	# so we don't need it in the Scene tree in the Godot editor
	add_child(instance)

func _on_area_3d_body_entered(body):
	if body.has_method("on_item_picked_up"):
		body.on_item_picked_up(item_id) 
		queue_free() 
```

[11:49](https://www.youtube.com/watch?t=709&v=4vAkTHeoORk)
```gdscript
class_name Items
const Database = {
	"pickaxe": {
		"name": "Pickaxe",
		"scene": "res://elements/pickaxe/pickaxe.glb" # tip: you can drag in your 3D asset and Godot will input the string for the path
	},
	"sword": {
		"name": "Sword",
		"scene": "res://elements/sword/sword.glb"
	}
}
```

- [13:15](https://www.youtube.com/watch?t=795&v=4vAkTHeoORk): **cons of this approach**: 
	- typos. These are all strings
	- Hardcoded scene paths. 
	- Hard to maintain this dictionary as it gets larger. 


### [14:09](https://www.youtube.com/watch?v=4vAkTHeoORk&t=849s) Using resources for game data
-  Godot has a built in feature for modeling static data sources called [[resources in Godot|Resource]]. 
	- You can also create custom Resources. 

[14:47](https://www.youtube.com/watch?t=887&v=4vAkTHeoORk)
```gdscript
class_name Item extends Resource
@export var name: String
@export var scene: PackedScene # this is better than using a String
```

[15:43](https://www.youtube.com/watch?t=943&v=4vAkTHeoORk): In the **FileSystem** you can add a [[resources in Godot|Resource]] by right-clicking a folder and choosing **Create New Resource**. 

[16:55](https://www.youtube.com/watch?t=1015&v=4vAkTHeoORk): 
```gdscript
extends Node3D
@export var item: Item

func _ready():
	var instance = item.scene.instantiate()
	add_child(instance)

func _on_area_3d_body_entered(body):
	if body.has_method("on_item_picked_up"):
		body.on_item_picked_up(item) 
		queue_free() 
```

[18:03](https://www.youtube.com/watch?t=1083&v=4vAkTHeoORk): 
```gdscript
func on_item_picked_up(item: Item):
	print("I got a ", Items.Database[item].name)
```

### [20:16](https://www.youtube.com/watch?v=4vAkTHeoORk&t=1216s) Building an inventory dialog
- [20:43](https://www.youtube.com/watch?t=1243&v=4vAkTHeoORk): What should we extend? 
	- Could be a [[Topics/Software Development/Game Development/Game Engines/Godot/Nodes/index|Nodes in Godot|Node]] but we don't need any Node functionality. 
	- We just need a simple object, which is `RefCounted`. But this is the default anyway, so we can leave it out. 

```gdscript
class_name Inventory 

var _content: Array[Item] = []

func add_item(item: Item):
	_content.append(item)
func remove_item(item: Item):
	_content.erase(item)
func get_items() -> Array[Item]:
	return _content
```

[22:25](https://www.youtube.com/watch?t=1345&v=4vAkTHeoORk): 
```gdscript
class_name Player extends CharacterBody3D
# ...
var inventory := Inventory.new()
func on_item_picked_up(item: Item):
	inventory.add_item(item)
```

[23:00](https://www.youtube.com/watch?t=1380&v=4vAkTHeoORk): inventory_dialog.tscn

[26:20](https://www.youtube.com/watch?t=1580&v=4vAkTHeoORk): 
```gdscript
# inventory_dialog.gd
class_name InventoryDialog extends PanelContainer

@export var slot_scene: PackedScene
@onready var grid_container: GridContainer = %GridContainer

func open(inventory: Inventory):
	show()
	
	for item in inventory.get_items():
		var slot = slot_scene.instantiate()
		grid_container.add_child(slot)

func _on_close_button_pressed():
	self.hide()

```

[30:48](https://www.youtube.com/watch?t=1848&v=4vAkTHeoORk): 
```gdscript
class_name Item extends Resource
@export var name: String
@export var scene: PackedScene 
@export var icon: Texture2D # NEW
```

[31:29](https://www.youtube.com/watch?t=1889&v=4vAkTHeoORk): InventoryDialog should show the item slots, but it should be unaware of item slot's child components, so lets create a `ItemSlot` class to handle this
[31:26](https://www.youtube.com/watch?t=1886&v=4vAkTHeoORk): 
```gdscript
class_name ItemSlot extends PanelContainer

@onready var texture_rect: TextureRect = %TextureRect
func display(item: Item):
	texture_rect.texture = item.icon
```

[32:50](https://www.youtube.com/watch?t=1970&v=4vAkTHeoORk): 
```gdscript
func open(inventory: Inventory):
	show()
	
	for item in inventory.get_items():
		var slot = slot_scene.instantiate()
		grid_container.add_child(slot)
# IMPORTANT: Add the node as a child first and THEN call display()
		slot.display(item)
```

[33:21](https://www.youtube.com/watch?t=2001&v=4vAkTHeoORk): Adding the UI to the scene: 

[34:34](https://www.youtube.com/watch?t=2074&v=4vAkTHeoORk): Code to show the inventory dialog: 
```gdscript
# ui_root.gd
extends CanvasLayer

@onready var player: Player = %Player
@onready var inventory_dialog: InventoryDialog = %InventoryDialog

func _unhandled_input(event):
	if event.is_action_released("inventory"): 
# "inventory" is from the Input Map
		inventory_dialog.open(player.inventory)
```

[35:42](https://www.youtube.com/watch?t=2142&v=4vAkTHeoORk): Setting up the [[Input mapping in Godot|Input Map]]. 

[37:02](https://www.youtube.com/watch?t=2222&v=4vAkTHeoORk): inventory_dialog.gd
```gdscript
func open(inventory: Inventory):
	show()
	Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
		
# PROBLEM: Items are only added, never removed.
	for item in inventory.get_items():
		var slot = slot_scene.instantiate()
		grid_container.add_child(slot)
# IMPORTANT: Add the node as a child first and THEN call display()
		slot.display(item)
func _on_close_button_pressed():
	hide()
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
```

[38:36](https://www.youtube.com/watch?t=2316&v=4vAkTHeoORk): 
```gdscript
func open(inventory: Inventory):
	show()
	Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
		
	for child in grid_container.get_children():
		child.queue_free()
		
	for item in inventory.get_items():
		var slot = slot_scene.instantiate()
		grid_container.add_child(slot)
# IMPORTANT: Add the node as a child first and THEN call display()
		slot.display(item)
func _on_close_button_pressed():
	hide()
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
```

### [39:28](https://www.youtube.com/watch?t=2368&v=4vAkTHeoORk):  Review
![[Screenshot 2024-11-30 at 4.27.14 PM.webp]]
### [40:41](https://www.youtube.com/watch?v=4vAkTHeoORk&t=2441s) Creating a crafting system

[42:14](https://www.youtube.com/watch?t=2534&v=4vAkTHeoORk): recipe.gd
```gdscript
class_name Recipe extends Resource

@export var name: String
@export var ingredients: Array[Item] = []
@export var results: Array[Item] = []
```

[44:57](https://www.youtube.com/watch?t=2697&v=4vAkTHeoORk): crafting_dialong.tscn:
[50:56](https://www.youtube.com/watch?t=3056&v=4vAkTHeoORk): crafting_dialong.gd
```gdscript
class_name CraftingDialong extends PanelContainer

@export var slot_scene: PackedScene
@onready var recipe_list: ItemList = %RecipeList
@onready var ingredients_container: GridContainer = %IngredientsContainer
@onready var results_container: GridContainer = %ResultsContainer

func open(recipes: Array[Recipe], inventory: Inventory):
	show()
	Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
	recipe_list.clear()
	for recipe in recipes:
		recipe_list.add_item(recipe.name)
	
	
func _on_close_button_pressed():
	hide()
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
```

[53:50](https://www.youtube.com/watch?t=3230&v=4vAkTHeoORk): Connect to item_selected(index: int) signal from GridContainer
```gdscript
func _on_recipe_list_item_selected(index: int):
	# we need to first get the recipe itself
	
```
[54:48](https://www.youtube.com/watch?t=3288&v=4vAkTHeoORk): 
```gdscript
class_name CraftingDialong extends PanelContainer
# ...
func open(recipes: Array[Recipe], inventory: Inventory):
	show()
	Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
	recipe_list.clear()
	for recipe in recipes:
		var index: int = recipe_list.add_item(recipe.name)
		recipe_list.set_item_metadata(index, recipe) # 👈🏼
func _on_recipe_list_item_selected(index: int):
	# we need to first get the recipe itself
	var recipe = recipe_list.get_item_metadata(index)
	

func _on_close_button_pressed():
	hide()
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
```

[56:17](https://www.youtube.com/watch?t=3377&v=4vAkTHeoORk): ItemGrid.gd
```gdscript
class_name ItemGrid extends GridContainer

@export var slot_scene: PackedScene

func display(items: Array[Item]):
	for child in get_children():
		child.queue_free()
	
	for item in items:
		var slot = slot_scene.instantiate()
		add_child(slot)
		slot.display(item)
```

```gdscript
# inventory_dialog.gd
class_name InventoryDialog extends PanelContainer

@export var slot_scene: PackedScene
@onready var grid_container: GridContainer = %GridContainer

func open(inventory: Inventory):
	show()
	Input.mouse_mode = Input.MOUSE_MODE_VISIBLE

	grid_container.display(inventory.get_items())
	

func _on_close_button_pressed():
	self.hide()
	Input.mouse_mode = Input.MOUSE_MODE_CAPUTRED
```
### [1:12:57](https://www.youtube.com/watch?v=4vAkTHeoORk&t=4377s) Loading resources dynamically

[1:13:34](https://www.youtube.com/watch?t=4414&v=4vAkTHeoORk): Load all the resources in a folder
```gdscript
var _all_recipes: Array[Recipe] = []
func _ready():
# Get all the files in this folder
	for file in DirAccess.get_files_at("res://data/recipes")
		var resource_file = "res://data/recipes/" + file
		var recipe: Recipe = load(resource_file) as Recipe
		_all_recipes.append(recipe)

func _unhandled_input(event):
	if event.is_action_released("inventory"):
		inventory_dialog.open(player.inventory)
	if event.is_action_released("crafting"):
		crafting_dialog.open(_all_recipes, player.inventory)
```
[1:15:26](https://www.youtube.com/watch?t=4526&v=4vAkTHeoORk): Exporting the game to windows

### Godot Resource Group plugin

> [!NOTE] Why Use a Resource Database
> PROBLEM: The files don't load when exported, because when Godot exports the files, they are organized and so all the file paths break. 
> Solution: **Godot Resource Groups** plugin


[1:20:30](https://www.youtube.com/watch?t=4830&v=4vAkTHeoORk): 
```gdscript
# ui_root.gd

# ...
@export var all_recipes: ResourceGroup
@onready var _all_recipes: Array[Recipe] = []

func _ready():
	all_recipes.load_all_into(_all_recipes)
```

### [1:22:15](https://www.youtube.com/watch?v=4vAkTHeoORk&t=4935s) Maintaining a resource database

> [!NOTE] [1:24:13](https://www.youtube.com/watch?t=5053&v=4vAkTHeoORk): *Edit Resources as Table 2*  plugin
> This plugin allows you to edit many resources at the same time in a table view, like a spreadsheet. 
### [1:27:08](https://www.youtube.com/watch?v=4vAkTHeoORk&t=5228s) Conclusion

