---
publish: true
---
## Deep Dives
- [[Tweens are AMAZING in Godot 4.3]]

## Terminology

| Term                     | Code                                                                                                                    | Meaning                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **running**              | [`is_running()`](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-is-running)         | Whether the **Tween** is currently running, i.e. it wasn't paused and it's not finished.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **valid**                | `is_valid()`                                                                                                            | A valid **Tween** is a **Tween** contained by the scene tree (i.e. the array from [SceneTree.get_processed_tweens](https://docs.godotengine.org/en/stable/classes/class_scenetree.html#class-scenetree-method-get-processed-tweens) will contain this **Tween**). A **Tween** might become invalid when it has finished tweening, is killed, or when created with `Tween.new()`. Invalid **Tween**s can't have [Tweener](https://docs.godotengine.org/en/stable/classes/class_tweener.html#class-tweener)s appended.                                                                                                                                                                                                                                                                                                                                                                                        |
| **kill**<br>(invalidate) | [`kill()`](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-kill)                     | Aborts all tweening operations and invalidates the **Tween**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **play**                 | `play()`, `is_playing()`                                                                                                | Resumes a paused or stopped **Tween**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **pause**                |                                                                                                                         | Pauses the tweening. The animation can be resumed by using [play](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-play).<br>**Note:** If a Tween is paused and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [SceneTree.get_processed_tweens](https://docs.godotengine.org/en/stable/classes/class_scenetree.html#class-scenetree-method-get-processed-tweens).<br><br>See [[#Pausing and Pause Modes]]                                                                                                                                                                                                                                                                                                                                                      |
| `finished()` signal      | [`finished()` signal](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-signal-finished)      | Emitted when the **Tween** has finished all tweening. Never emitted when the **Tween** is set to infinite looping (see [set_loops](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-set-loops)).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **stop**                 |                                                                                                                         | Stops the tweening and resets the **Tween** to its initial state. This will not remove any appended [Tweener](https://docs.godotengine.org/en/stable/classes/class_tweener.html#class-tweener)s.<br><br>**Note:** If a Tween is stopped and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [SceneTree.get_processed_tweens](https://docs.godotengine.org/en/stable/classes/class_scenetree.html#class-scenetree-method-get-processed-tweens).                                                                                                                                                                                                                                                                                                                                                    |
| **Tweener**              |                                                                                                                         | Tweeners are objects that perform a specific animating task, e.g. interpolating a property or calling a method at a given time. A **Tweener** can't be created manually, you need to use a dedicated method from [Tween](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween), typically a method that starts with `tween_` (for example `tween_method()` and `tween_property()`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **bind**                 | [`tween.bind_node(node)`](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-bind-node) | Binds this **Tween** with the given `node`. **Tween**s are processed directly by the [SceneTree](https://docs.godotengine.org/en/stable/classes/class_scenetree.html#class-scenetree), so they run independently of the animated nodes. When you bind a [Node](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node) with the **Tween**, the **Tween** will halt the animation when the object is not inside tree and the **Tween** will be automatically killed when the bound object is freed. Also [TWEEN_PAUSE_BOUND](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-constant-tween-pause-bound) will make the pausing behavior dependent on the bound node.<br><br>For a shorter way to create and bind a **Tween**, you can use [Node.create_tween](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-method-create-tween). |

### Tweeners
|   |   |
|---|---|
|[CallbackTweener](https://docs.godotengine.org/en/stable/classes/class_callbacktweener.html#class-callbacktweener)|[tween_callback](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-tween-callback)(callback: [Callable](https://docs.godotengine.org/en/stable/classes/class_callable.html#class-callable))|
|[IntervalTweener](https://docs.godotengine.org/en/stable/classes/class_intervaltweener.html#class-intervaltweener)|[tween_interval](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-tween-interval)(time: [float](https://docs.godotengine.org/en/stable/classes/class_float.html#class-float))|
|[MethodTweener](https://docs.godotengine.org/en/stable/classes/class_methodtweener.html#class-methodtweener)|[tween_method](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-tween-method)(method: [Callable](https://docs.godotengine.org/en/stable/classes/class_callable.html#class-callable), from: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html#class-variant), to: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html#class-variant), duration: [float](https://docs.godotengine.org/en/stable/classes/class_float.html#class-float))|
|[PropertyTweener](https://docs.godotengine.org/en/stable/classes/class_propertytweener.html#class-propertytweener)|[tween_property](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-tween-property)(object: [Object](https://docs.godotengine.org/en/stable/classes/class_object.html#class-object), property: [NodePath](https://docs.godotengine.org/en/stable/classes/class_nodepath.html#class-nodepath), final_val: [Variant](https://docs.godotengine.org/en/stable/classes/class_variant.html#class-variant), duration: [float](https://docs.godotengine.org/en/stable/classes/class_float.html#class-float))|

## Easing and Transitions
- [Tween Interactive Cheat Sheet](https://vitorgus.github.io/Godot-Tween-Interactive-Cheat-Sheet/)
- See [[Tweens are AMAZING in Godot 4.3#[23 55](https //www.youtube.com/watch?v=sJQydvy3uT8&t=1435s) Transitions and Easing|Transitions and Easing]] 

## Tween Lifecycle

### Tweens Are Processed After All Nodes In The Current Frame
See: [Quote from “Tween — Godot Engine (stable) documentation in English”](https://arc.net/l/quote/asgxklsz) 
**Note:** The tween is processed after all of the nodes in the current frame, i.e. node's [Node._process](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-process) method would be called before the tween (or [Node._physics_process](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-physics-process) depending on the value passed to [set_process_mode](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-set-process-mode)).

### Pausing and Pause Modes
**See also**: 
- [`set_pause_mode(mode:)`](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-set-pause-mode) 
- [TWEEN_PAUSE_MODE](https://docs.godotengine.org/en/stable/classes/class_tween.html#enum-tween-tweenpausemode) 

## Conflicts
### Only Use One Tween Per Object Property
See: [Quote from “Tween — Godot Engine (stable) documentation in English”](https://arc.net/l/quote/pgahejso) 
You should avoid using more than one **Tween** per object's property. If two or more tweens animate one property at the same time, the last one created will take priority and assign the final value. If you want to interrupt and restart an animation, consider assigning the **Tween** to a variable:

```gdscript
var tween
func animate():
	if tween:
		tween.kill() # Abort the previous animation.
	tween = create_tween()
```

### Don't Re-use Tweens
See: [Quote from “Tween — Godot Engine (stable) documentation in English”](https://arc.net/l/quote/gnbugeoh) 
**Note:** Tweens are not designed to be re-used and trying to do so results in an undefined behavior. Create a new Tween for each animation and every time you replay an animation from start. Keep in mind that Tweens start immediately, so only create a Tween when you want to start animating.

## `get_tree().create_tween()` vs. `create_tween()`

There are three ways to create a Tween but only two are valid: 
1. `Tween.new()`: **This method is invalid**. 
2. `get_tree().create_tween()`: This is calling the `create_tween()` method on [[SceneTree class|SceneTree]]. 
3. `create_tween()`: When you see this in code, it is usually within a script of a [[Topics/Software Development/Game Development/Game Engines/Godot/Nodes/index|Node]] subclass. Therefore you are calling the `create_tween()` method from Node (implicitly you are calling `self.create_tween()` )


> [!star] How to decide
> The general rule of thumb is:
> 
> - Use `create_tween()` when the animation is specific to a node and should stop if the node is removed
> - Use `get_tree().create_tween()` when you need the animation to persist independently of node lifecycle or when managing animations globally


### 2. `get_tree().create_tween()` 
Remember this is a method on `SceneTree`. See [docs](https://docs.godotengine.org/en/stable/classes/class_scenetree.html#class-scenetree-method-create-tween). 

- This will create and return a new Tween. 
- This will **not** automatically kill the Tween when the animation is finished or the Node is freed. 
	- If you want the [Tween](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween) to be automatically killed when the [Node](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node) is freed, use [Node.create_tween](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-method-create-tween) or [Tween.bind_node](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-bind-node).

### 3. `create_tween()`
Remember this is a method on Node. See [docs](`get_tree().create_tween()` vs. `create_tween()`). 

- This will create and return a new Tween
- This will **also** bind the tween to this node (`self`)
	- This means that **the Tween will automatically be freed when the Node is freed**. 
	- See [[#Binding Tweens to Nodes]] for more info
- The Tween will **start automatically** on the next process frame or physics frame (depending on [TweenProcessMode](https://docs.godotengine.org/en/stable/classes/class_tween.html#enum-tween-tweenprocessmode)).

## Binding Tweens to Nodes
- See [Tween.bind_node](https://docs.godotengine.org/en/stable/classes/class_tween.html#class-tween-method-bind-node) for more info on Tweens bound to nodes.

## Tween Process Modes (Order of Operations)
See [docs](https://docs.godotengine.org/en/stable/classes/class_tween.html#enum-tween-tweenprocessmode). 

1. TWEEN_PROCESS_PHYSICS
	- The **Tween** updates after each physics frame (see [Node._physics_process](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-physics-process)).
2. TWEEN_PROCESS_IDLE
	- The **Tween** updates after each process frame (see [Node._process](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-process)).


