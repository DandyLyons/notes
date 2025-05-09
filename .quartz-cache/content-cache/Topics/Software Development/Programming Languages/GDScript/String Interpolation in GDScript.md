---
publish: true
---
String interpolation in [[Topics/Software Development/Programming Languages/GDScript/index|GDScript]]. 

**Docs**: [GDScript format strings — Godot Engine (stable) documentation in English](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_format_string.html) 
## Cheatsheet
### Usage in GDScript[¶](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_format_string.html#usage-in-gdscript "Permalink to this headline")

Examine this concrete GDScript example:

#### Define a format string with placeholder '%s'
```GDScript
var format_string = "We're waiting for %s."
```

#### Using the '%' operator, the placeholder is replaced with the desired value
```GDScript
var actual_string = format_string % "Godot"
print(actual_string)
```
#### Output: "We're waiting for Godot."

Placeholders always start with a `%`, but the next character or characters, the _format specifier_, determines how the given value is converted to a string.

The `%s` seen in the example above is the simplest placeholder and works for most use cases: it converts the value by the same method by which an implicit String conversion or `str()` would convert it. Strings remain unchanged, Booleans turn into either `"True"` or `"False"`, an integral or real number becomes a decimal, other types usually return their data in a human-readable string.

There is also another way to format text in GDScript, namely the `String.format()` method. It replaces all occurrences of a key in the string with the corresponding value. The method can handle arrays or dictionaries for the key/value pairs.

Arrays can be used as key, index, or mixed style (see below examples). Order only matters when the index or mixed style of Array is used.

A quick example in GDScript:

#### Define a format string
```GDScript
var format_string = "We're waiting for {str}"
```

#### Using the 'format' method, replace the 'str' placeholder
```GDScript
var actual_string = format_string.format({"str": "Godot"})
```

```GDScript
print(actual_string)
```
#### Output: "We're waiting for Godot"

There are other [format specifiers](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_format_string.html#format-specifiers), but they are only applicable when using the `%` operator.

### Multiple placeholders[¶](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_format_string.html#multiple-placeholders "Permalink to this headline")

Format strings may contain multiple placeholders. In such a case, the values are handed in the form of an array, one value per placeholder (unless using a format specifier with `*`, see [dynamic padding](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_format_string.html#dynamic-padding)):

```GDScript
var format_string = "%s was reluctant to learn %s, but now he enjoys it."
var actual_string = format_string % ["Estragon", "GDScript"]

print(actual_string)
```
#### Output: "Estragon was reluctant to learn GDScript, but now he enjoys it."

Note the values are inserted in order. Remember all placeholders must be replaced at once, so there must be an appropriate number of values.