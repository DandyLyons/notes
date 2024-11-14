---
publish: true
---
## See Also
- [[The .gdextension file]] 
- [[Topics/Software Development/Game Development/Game Engines/Godot/GDExtension/index|GDExtension]]
## Docs
- [Setting up your extension - SwiftGodot Tutorials](https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/tutorials/swiftgodot/your-first-extension#Set-up-the-extension) 

## Steps
1. [[#Define you `.gdextension` file]]
2. [[#Build Your GDExtension in Terminal]] 
3. [[#Copy the build targets into your Godot project]] 

## Define you `.gdextension` file
Define your [[The .gdextension file|.gdextension file]] in [[TOML]] syntax. 
### Example  `.gdextension` file for SwiftGodot
```toml
[configuration]
entry_symbol = "swift_entry_point"
compatibility_minimum = 4.2
reloadable = true # specifies that the editor should reload the extension when the editor window loses and regains focus. See Godot issue #80284 for more details.
    # Note: If Godot is crashing, you may want to try turning off or removing this `reloadable` setting.


[libraries]
macos.debug = "res://bin/libSimpleRunnerDriver.dylib"


[dependencies]
macos.debug = {"res://bin/libSwiftGodot.dylib" : ""} # Used to copy the library into the application when exporting the project
# The name of the file corresponds to the built version of the dynamic library
```

## Build Your GDExtension in Terminal
See [docs tutorial Section 3](https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/tutorials/swiftgodot/your-first-extension#Set-up-the-extension) step 4. 

Run: 
```zsh
swift build --configuration debug
```

## Copy the build targets into your Godot project
See [docs tutorial Section 3](https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/tutorials/swiftgodot/your-first-extension#Set-up-the-extension) step 5 and 6. 

> [!Question] How do we automate this?
> There must be a way to automate this so that it is quicker, easier and less error prone. Perhaps we should use a makefile or a script? 

## Further Exploration
> [!Question] How does our GDExtension set up affect hot reloading? 
> It would be nice to be able to use [[Hot Reloading in SwiftGodot]]. I need to do more research to find out if this is currently viable and what the limitations are. 

