---
publish: true
aliases:
  - Node Lifecycle
---
## Order

### Inserting a node into the scene tree
As far as I can tell from the docs this is the order of events when **creating a new node and adding it**: 
1. the constructor (`MyObject.new()`)
2. `_init()`
3. `_enter_tree()`
	- (This happens after the node is added to the [[Scene Tree]] using `add_Child()`)
4. [[ready in Godot]] 
	- This happens after every child node[^3] has been initialized, added to the scene, tree and has already called `_ready()`. 


> [!NOTE] `_init()` **usually** is called after the constructor finishes
> It seems that we should assume that `_init()` will be called **after** the constructor, but unfortunately Godot doesn't seem to guarantee the order? Read this from the [docs](https://arc.net/l/quote/jsbknxdp)
>
>"*`_init()` is Called when the object's script is instantiated, oftentimes after the object is initialized in memory (through `Object.new()` in GDScript, or `new GodotObject` in C#). It can be also defined to take in parameters. This method is similar to a constructor in most programming languages.*"

### Instantiating a scene
As for as I can tell from the docs, this is the order of events when **instantiating a scene and adding it**[^1]: 
1. **Initial value assignment:** the property is assigned its initialization value, or its default value if one is not specified. **If a setter exists, it is not used.**[^2]
2. **``_init()`` assignment:** the property's value is replaced by any assignments made in `_init()`, triggering the setter.
3. **Exported value assignment:** an exported property's value is again replaced by any value set in the Inspector, triggering the setter.

[^1]: See [docs here](https://docs.godotengine.org/en/stable/tutorials/best_practices/godot_notifications.html#init-vs-initialization-vs-export) 
[^2]: This appears to only be true when using GDScript. When the setter is defined another language such as Swift or C# then the setter appears to follow whatever the language determines. 
### GDScript Example
```gdscript
# test is initialized to "one", without triggering the setter.
@export var test: String = "one":
	set(value):
		test = value + "!"

func _init():
	# Triggers the setter, changing test's value from "one" to "two!".
	test = "two"

# If someone sets test to "three" from the Inspector, it would trigger
# the setter, changing test's value from "two!" to "three!".
```

### Gotcha: Setting a Resource type in the inspector and leaving all its properties at default values
> [!quote] 
> **From:** [Godot notifications — Godot Engine (stable) documentation in English](https://docs.godotengine.org/en/stable/tutorials/best_practices/godot_notifications.html#init-vs-initialization-vs-export) @ User-contributed notes:
> 
> There's a gotcha with object initialization. When setting Resource types in the inspector, and leaving all its [@exported](https://github.com/exported) Variant data members (for example) at default values, the default values will overwrite values set in its _init() function as if they were set via the inspector. Example below:  
([https://docs.godotengine.org/en/stable/tutorials/best_practices/godot_notifications.html#init-vs-initialization-vs-export](https://docs.godotengine.org/en/stable/tutorials/best_practices/godot_notifications.html#init-vs-initialization-vs-export))
> 
> ```gdscript
> class_name MyResource extends Resource
> @export var my_int: int = -1
> 
> func _init() -> void:
>   if my_int < 0: my_int = 2
> 
> 
> class_name MyNode extends Node
> @export var my_resource := MyResource.new()
> ```
> 
> If my_resource is set in the inspector, MyResource.my_int will be -1. If my_resource isn't set via inspector, it will be 2.
>
>**Work-around**: Implement a private initialization() function that you [[`call_deferred()` in Godot|call_deferred()]] at the end of the _init() function. The deferred function will execute after the [@export](https://github.com/export) properties are initialized so are overwritten.

## Docs
- [`_init` vs. initialization vs. export](https://docs.godotengine.org/en/stable/tutorials/best_practices/godot_notifications.html#init-vs-initialization-vs-export) 
- [_ready vs. _enter_tree vs. NOTIFICATION_PARENTED](https://docs.godotengine.org/en/stable/tutorials/best_practices/godot_notifications.html#ready-vs-enter-tree-vs-notification-parented)

## See Also
- [[Godot 4 and GDScript - Part 3 (the lifecycle)]]  
[^3]: recursively