---
publish: true
docs: https://docs.godotengine.org/en/stable/tutorials/2d/custom_drawing_in_2d.html#
---
## Docs
- [Custom drawing in 2D — Godot Engine (stable) documentation in English](https://docs.godotengine.org/en/stable/tutorials/2d/custom_drawing_in_2d.html#) 

## Deep Dives
![How do I draw in 2D in Godot? (the basics) - YouTube](https://www.youtube.com/watch?v=cRyaazgIz6s) 

## Layering
In this section we'll talk about what is "in front" and what is "behind". 

Each subsequent drawing operation inside of `_draw()` is layered on top of the previous ones. For example:
```gdscript
func _draw():
    draw_rect(Rect2(100, 100, 100, 100), Color.RED)
    draw_rect(Rect2(100, 100, 100, 100), Color.BLUE)
```

In this case, the blue rectangle will be drawn on top of the red rectangle, effectively covering it completely.

If you need more control over the drawing order, you can:
1. Organize your drawing commands within the `_draw()` function to achieve the desired layering.
2. Use multiple nodes with different z-index values for more complex layering scenarios.
3. Utilize CanvasLayer nodes for managing different rendering layers in your scene