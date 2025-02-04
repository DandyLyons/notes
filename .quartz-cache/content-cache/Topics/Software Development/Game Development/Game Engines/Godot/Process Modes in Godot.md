---
publish: true
---
See [docs](https://docs.godotengine.org/en/stable/tutorials/scripting/pausing_games.html#process-modes). 
## See Also
- [[Pausing in Godot]] 
## The Modes
This is what each mode tells a node to do:
- **Inherit**: Process depending on the state of the parent, grandparent, etc. The first parent that has a non-Inherit state.
- **Pausable**: Process the node (and its children in Inherit mode) only when the game is not paused.
- **WhenPaused**: Process the node (and its children in Inherit mode) _only_ when the game is paused.
- **Always**: Process the node (and its children in Inherit mode) no matter what. Paused or not, this node will process.
- **Disabled**: The node (and its children in Inherit mode) will not process at all.

## Altering in Code 

```gdscript
func _ready():
	process_mode = Node.PROCESS_MODE_PAUSABLE
```