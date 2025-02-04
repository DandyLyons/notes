---
publish: true
docs: https://docs.godotengine.org/en/latest/classes/class_stringname.html#class-stringname
---
- **StringName**s are immutable strings designed for general-purpose representation of unique names (also called "string interning"). 
- Two **StringName**s with the same value **are the same object**. 
- Comparing them is extremely fast compared to regular [String](https://docs.godotengine.org/en/latest/classes/class_string.html#class-string)s.

## String <-> StringName conversion
Godot will tend to convert automatically between String and StringName

>You will usually pass a [String](https://docs.godotengine.org/en/latest/classes/class_string.html#class-string) to methods expecting a **StringName** and it will be automatically converted (often at compile time), but in rare cases you can construct a **StringName** ahead of time with the **StringName** constructor or, in GDScript, the literal syntax `&"example"`. Manually constructing a **StringName** allows you to control when the conversion from [String](https://docs.godotengine.org/en/latest/classes/class_string.html#class-string) occurs or to use the literal and prevent conversions entirely.

## StringName literals
To use a StringName literal attach `&` before a string literal. 

```gdscript
var string_name: StringName = &"Hello" 
```