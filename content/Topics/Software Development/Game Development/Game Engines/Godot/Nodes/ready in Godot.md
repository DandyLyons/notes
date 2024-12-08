---
publish: true
---
"*ready*" is a concept in [[Topics/Software Development/Game Development/Game Engines/Godot/index|Godot]] which is a part of the [[Node Lifecycle in Godot|Node Lifecycle]].  When a node is ready it will call the [`_ready()` method](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-ready) . After that method is called, then the [`ready` signal](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-signal-ready) is called. 

## See Also
- [[Node Lifecycle in Godot|Node Lifecycle]] 
## Docs
- [`_ready()` method](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-ready) on [[Topics/Software Development/Game Development/Game Engines/Godot/Nodes/index|Node]] 
- [`ready` signal](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-signal-ready) on [[Topics/Software Development/Game Development/Game Engines/Godot/Nodes/index|Node]] 
- [`NOTIFICATION_READY` notification](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-constant-notification-ready) on [[Topics/Software Development/Game Development/Game Engines/Godot/Nodes/index|Node]] 

## `_ready()` is called from bottom to top
> Once all nodes have been added in the scene tree, they receive the [NOTIFICATION_READY](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-constant-notification-ready) notification and their respective [_ready](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-ready) callbacks are triggered. For groups of nodes, the [_ready](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-ready) callback is called in reverse order, starting with the children and moving up to the parent nodes.
> 
> This means that when adding a node to the scene tree, the following order will be used for the callbacks: [_enter_tree](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-enter-tree) of the parent, [_enter_tree](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-enter-tree) of the children, [_ready](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-ready) of the children and finally [_ready](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-ready) of the parent (recursively for the entire scene tree). - From [docs](https://arc.net/l/quote/eduohkjh) 
