---
publish: true
---
See Docs: [Using Custom Types](https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/documentation/swiftgodot/customtypes) 

## Overview

Creating a subclass of a Godot type involves a few steps:

1. [Subclassing an existing Godot type](https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/documentation/swiftgodot/customtypes#Subclassing-a-Godot-Type) with the usual Swift syntax.
2. [Registering your type with Godot](https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/documentation/swiftgodot/customtypes#Register-Your-Type), so users can create instances of it and configure it from the user interface.
3. Augment the type with your own custom behaviors.
4. [Expose your properties, methods and signals to the Godot Editor.](https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/documentation/swiftgodot/customtypes#Surfacing-Methods-Properties-and-Signals) 
5. [[Setting up your SwiftGodot GDExtension]] by defining it in [[The .gdextension file]] 

## Type Levels
A custom swift type can be registered at different levels. See docs for [GDExtension.InitializationLevel](https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/documentation/swiftgodot/gdextension/initializationlevel) using the macro `initSwiftExtension(cdecl:coreTypes:editorTypes:sceneTypes:serverTypes:)` (see [docs](initSwiftExtension(cdecl:coreTypes:editorTypes:sceneTypes:serverTypes:))). 


When Godot initializes your extension it does so in stages and you get a chance to register the types that you want to expose to the Godot engine for each stage ([`GDExtension.InitializationLevel`](https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/documentation/swiftgodot/gdextension/initializationlevel)).

For example, to initialize a Swift extension to Godot with some custom types to use in the editor, and some other types to use on the scene.

```swift
class MySprite: Sprite2D { ... }
class MyControl: Control { ... }


#initSwiftExtension(cdecl: "myextension_entry_point",
                    editorTypes: [MyEditorPlugin.self],  
                    sceneTypes: [MySprite.self, MyControl.self])
```