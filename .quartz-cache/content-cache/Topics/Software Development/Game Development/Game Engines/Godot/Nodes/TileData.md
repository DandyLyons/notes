---
publish: true
---
Settings for a single tile in a [TileSet](https://docs.godotengine.org/en/stable/classes/class_tileset.html#class-tileset).

| Docs | [TileData — Godot Engine (stable) documentation in English](https://docs.godotengine.org/en/stable/classes/class_tiledata.html) |
| ---- | ------------------------------------------------------------------------------------------------------------------------------- |
|      |                                                                                                                                 |

## Use Cases
Accessing data of a tile from a [[TileMap]]. 
```gdscript
var position: := Vector2i(0, 0)
var layerIndex := 1

var tileMap: TileMap
tileMap.get_cell_data_at(layerIdx, position)
```
