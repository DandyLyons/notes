---
publish: true
---
the `@Export` Swift macro mimics the abilities of the [[@export in GDScript|@export]] GDScript keyword. It makes the property available and editable in the Inspector in the Godot Editor. 

## Open Questions
- Currently, I'm not sure how to make a property on a SwiftGodot class available inside of Godot, unless I use the `@Export` macro. However, this may/may not be what I want. I want the property to be available, gettable, settable, but not editable in the inspector. 