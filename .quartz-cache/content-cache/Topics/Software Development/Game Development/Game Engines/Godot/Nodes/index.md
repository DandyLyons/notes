---
publish: true
title: Nodes in Godot
aliases:
  - Nodes in Godot
  - Node
docs: https://docs.godotengine.org/en/stable/classes/class_node.html
---
![The 60 Most Useful Godot Nodes - in 6 MINUTES (+FREE cheatsheet!) - YouTube](https://www.youtube.com/watch?v=caLxyBIvHzE)

![All 219 Godot Nodes Explained In 42 Minutes ! - YouTube](https://www.youtube.com/watch?v=tO2gthp45MA&pp=ygULZ29kb3Qgbm9kZXM%3D)

## See Also
- [[Node Lifecycle in Godot|Node Lifecycle]] 

## Methods on the Node class
See [Node docs](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-input)

### _input(event: InputEvent)
See [docs](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-input)  

Called when there is an input event. The input event propagates up through the node tree until a node consumes it.

**NOTE**: This method is only called if: 
1. the node is present in the scene tree (it's not an orphan)
2. if input processing is enabled (can be toggled with [set_process_input](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-method-set-process-input))
3. the input has not been consumed by a prior node
	- To consume the input event and stop it propagating further to other nodes, [Viewport.set_input_as_handled](https://docs.godotengine.org/en/stable/classes/class_viewport.html#class-viewport-method-set-input-as-handled) can be called.
	- For gameplay input, [_unhandled_input](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-unhandled-input) and [_unhandled_key_input](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-unhandled-key-input) are usually a better fit as they allow the GUI to intercept the events first.
