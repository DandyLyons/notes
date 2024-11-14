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