---
publish: true
title: GDExtension
aliases:
  - GDExtension
---

**GDExtension** is a Godot-specific technology that lets the engine interact with native [shared libraries](https://en.wikipedia.org/wiki/Library_(computing)#Shared_libraries) at run-time. You can use it to run native code without compiling it with the engine.

GDExtension is _not_ a scripting language and has no relation to [[Topics/Software Development/Programming Languages/GDScript/index|GDScript]].

## Docs
- [What is GDExtension?](https://docs.godotengine.org/en/stable/tutorials/scripting/gdextension/what_is_gdextension.html#doc-what-is-gdnative-third-party-bindings) 
- [[The .gdextension file]] 
## Limitations
- Not compatible with pre-Godot 4
- GDExtension add-ons compiled for a given Godot version are only guaranteed to work with the same minor release series. For example, a GDExtension add-on compiled for Godot 4.0 will only work with Godot 4.0, 4.0.1, 4.0.2.
- GDExtension add-ons are also only compatible with engine builds that use the level of floating-point precision the extension was compiled for. This means that if you use an engine build with double-precision floats, the extension must also be compiled for double-precision floats. See [Large world coordinates](https://docs.godotengine.org/en/stable/tutorials/physics/large_world_coordinates.html#doc-large-world-coordinates) for details.

> [!Warning] GDExtensions are experimental
> Our long-term goal is that GDExtensions targeting an earlier version of Godot will work in later minor versions, but not vice-versa. For example, a GDExtension targeting Godot 4.2 should work just fine in Godot 4.3, but one targeting Godot 4.3 won't work in Godot 4.2.
> 
> However, GDExtension is currently _experimental_, which means that we may break compatibility in order to fix major bugs or include critical features. For example, GDExtensions created for Godot 4.0 aren't compatible with Godot 4.1 (see [Updating your GDExtension for 4.1](https://docs.godotengine.org/en/stable/tutorials/migrating/upgrading_to_godot_4.1.html#updating-your-gdextension-for-godot-4-1)).

