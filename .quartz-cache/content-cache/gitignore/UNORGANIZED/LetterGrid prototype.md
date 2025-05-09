This is a prototype for [[VorTexT]]. 

## Requirements
- [x] Each letter tile should be able to animate moving from one space to another
	- [w] Implemented `GridSpace` which holds a position that can be moved to
	- [w] Implemented `GridPiece` which has convenience functions for moving animated to other positions (`moveToPosition(pos: Vector2)`)
		- [i] A movement can be by either **duration** or **speed**. 
- [ ] Implement grid board as a [[TileMap]] using tutorial [[Grid-Based Placement Using Code Using Godot 4.0!]] 
- [ ] Implement moving letter squares using physics and TileMap using tutorial [[2D Movement in Godot 4 using TileMap]] 
- [ ] Should have a model using `XYGridResource`. 
	- [?] I'm not sure if these 👇🏼 should be one `XYGridResource` or separate ones.
	- [ ] Should hold the spaces that can be moved to. 
		- [?] Hold onto a `GridSpace`? 
	- [ ] Should hold a model of the state of each grid piece (including the letter, and any relevant state of the letter tile, e.g. if/if not the letter is currently found in a word)
	- [ ] Implement `func moveToSpace(space: GridSpace)` 