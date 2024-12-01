---
publish: true
docs: https://docs.godotengine.org/en/stable/classes/class_nodepath.html
---
See [docs](https://docs.godotengine.org/en/stable/classes/class_nodepath.html).
The **NodePath** built-in [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html#class-variant) type represents a path to a node or property in a hierarchy of nodes. It is designed to be efficiently passed into many built-in methods (such as [Node.get_node](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-method-get-node), [Object.set_indexed](https://docs.godotengine.org/en/stable/classes/class_object.html#class-object-method-set-indexed), [Tween.tween_property](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-tween-property), etc.) without a hard dependence on the node or property they point to.

## See Also
- [[StringName]] 
- [[Scene Unique Nodes]] 



## NodePath shorthand
There are also two constructs that look like literals, but actually are not:

| **Example**   | **Description**                         |
| ------------- | --------------------------------------- |
| `$NodePath`   | Shorthand for `get_node("NodePath")`    |
| `%UniqueNode` | Shorthand for `get_node("%UniqueNode")` |

## NodePath literals
```gdscript
@export var node_path: NodePath = ^"Button" 
```

## NodePath Syntax

A node path is represented as a [String](https://docs.godotengine.org/en/stable/classes/class_string.html#class-string) composed of slash-separated (`/`) node names and colon-separated (`:`) property names (also called "subnames"). Similar to a filesystem path, `".."` and `"."` are special node names. They refer to the parent node and the current node, respectively.

You can also use `%` in a node path string. For more info see [[Scene Unique Nodes]]. 

The following examples are paths relative to the current node:

```gdscript
^"A"     # Points to the direct child A.
^"A/B"   # Points to A's child B.
^"."     # Points to the current node.
^".."    # Points to the parent node.
^"../C"  # Points to the sibling node C.
^"../.." # Points to the grandparent node.
```

A leading slash means the path is absolute, and begins from the [SceneTree](https://docs.godotengine.org/en/stable/classes/class_scenetree.html#class-scenetree):

```gdscript
^"/root"            # Points to the SceneTree's root Window.
^"/root/Title"      # May point to the main scene's root node named "Title".
^"/root/Global"     # May point to an autoloaded node or scene named "Global".
```

Despite their name, node paths may also point to a property:

```gdscript
^":position"           # Points to this object's position.
^":position:x"         # Points to this object's position in the x axis.
^"Camera3D:rotation:y" # Points to the child Camera3D and its y rotation.
^"/root:size:x"        # Points to the root Window and its width.
```

In some situations, it's possible to omit the leading `:` when pointing to an object's property. As an example, this is the case with [Object.set_indexed](https://docs.godotengine.org/en/stable/classes/class_object.html#class-object-method-set-indexed) and [Tween.tween_property](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-tween-property), as those methods call [get_as_property_path](https://docs.godotengine.org/en/stable/classes/class_nodepath.html#class-nodepath-method-get-as-property-path) under the hood. However, it's generally recommended to keep the `:` prefix.

Node paths cannot check whether they are valid and may point to nodes or properties that do not exist. Their meaning depends entirely on the context in which they're used.

You usually do not have to worry about the **NodePath** type, as strings are automatically converted to the type when necessary. There are still times when defining node paths is useful. For example, exported **NodePath** properties allow you to easily select any node within the currently edited scene. They are also automatically updated when moving, renaming or deleting nodes in the scene tree editor. See also [@GDScript.@export_node_path](https://docs.godotengine.org/en/stable/classes/class_%40gdscript.html#class-gdscript-annotation-export-node-path).

