---
publish: true
title: Variants in Godot
aliases:
  - Variants in Godot
docs: https://docs.godotengine.org/en/stable/classes/class_variant.html
---
Docs: [Variant — Godot Engine (stable) documentation in English](https://docs.godotengine.org/en/stable/classes/class_variant.html) 

A Variant:

- Can store almost any datatype.
- Can perform operations between many variants. GDScript uses Variant as its atomic/native datatype.
- Can be hashed, so it can be compared quickly to other variants.
- Can be used to convert safely between datatypes.
- Can be used to abstract calling methods and their arguments. Godot exports all its functions through variants.
- Can be used to defer calls or move data between threads.
- Can be serialized as binary and stored to disk, or transferred via network.
- Can be serialized to text and use it for printing values and editable settings.
- Can work as an exported property, so the editor can edit it universally.
- Can be used for dictionaries, arrays, parsers, etc.

**Containers (Array and Dictionary):** Both are implemented using variants. A [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html#class-dictionary) can match any datatype used as key to any other datatype. An [Array](https://docs.godotengine.org/en/stable/classes/class_array.html#class-array) just holds an array of Variants. Of course, a Variant can also hold a [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html#class-dictionary) and an [Array](https://docs.godotengine.org/en/stable/classes/class_array.html#class-array) inside, making it even more flexible.
## Deep Dives
- [[Every Variant in Godot 4]] 
	- [[Every Variant in Godot 4#[07 36](https //www.youtube.com/watch?v=RM_ExxV-0Qo&t=456s) What is a variant|What is a variant?]] 

## Size Considerations
According to the docs, a Variant is "only 20 bytes". Whereas an `int` is 8 bytes (64 bits). So if you don't statically type your int, then it will take up nearly twice as much space in memory. 

```gdscript
var num1 = 0 # variant, 20 bytes
var num2: int = 0 # int, 8 bytes
```
