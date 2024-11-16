---
publish: true
---
This is the manifest that tells Godot how to load a [[Topics/Software Development/Game Development/Game Engines/Godot/GDExtension/index|GDExtension]]. 
## Docs
- [The .gdextension file](https://docs.godotengine.org/en/stable/tutorials/scripting/gdextension/gdextension_file.html) 

## Syntax 
> [!question] Syntax
> What is the syntax of the text within a `.gdextension` file? It looks like [[TOML]], but I haven't found anything in the docs to confirm this. 
## Example

```toml
[libraries]

macos.debug = "res://bin/libgdexample.macos.template_debug.framework"
macos.release = "res://bin/libgdexample.macos.template_release.framework"
windows.debug.x86_32 = "res://bin/libgdexample.windows.template_debug.x86_32.dll"
windows.release.x86_32 = "res://bin/libgdexample.windows.template_release.x86_32.dll"
windows.debug.x86_64 = "res://bin/libgdexample.windows.template_debug.x86_64.dll"
windows.release.x86_64 = "res://bin/libgdexample.windows.template_release.x86_64.dll"
linux.debug.x86_64 = "res://bin/libgdexample.linux.template_debug.x86_64.so"
linux.release.x86_64 = "res://bin/libgdexample.linux.template_release.x86_64.so"
linux.debug.arm64 = "res://bin/libgdexample.linux.template_debug.arm64.so"
linux.release.arm64 = "res://bin/libgdexample.linux.template_release.arm64.so"
linux.debug.rv64 = "res://bin/libgdexample.linux.template_debug.rv64.so"
linux.release.rv64 = "res://bin/libgdexample.linux.template_release.rv64.so"
```

## Feature Flags
The `.gdextension` file can define configurations to be applied based on certain [[Feature Tags]]. 


> [!question] Order?
> Does the order of the feature tags in a .gdextension file matter? For example, is there a difference between `macos.debug.arm64` and `macos.arm64.debug`? 




## Sections

### Configuration Section


### Libraries Section
From [docs](https://docs.godotengine.org/en/stable/tutorials/scripting/gdextension/gdextension_file.html#libraries-section). 

In this section you can set the paths to the compiled binaries of your GDExtension libraries. By specifying feature flags you can filter which version should be loaded and exported with your game depending on which feature flags are active. Every feature flag must match to Godot's feature flags or your custom export flags to be loaded in an exported game. For instance `macos.debug` means that it will be loaded if Godot has both the `macos` and `debug` flag active. Each line of the section is evaluated from top to bottom.

Here is an example of what that can look like:
```toml
[libraries]

macos.debug = "res://bin/libgdexample.macos.template_debug.framework"
macos.release = "res://bin/libgdexample.macos.template_release.framework"
windows.debug.x86_32 = "res://bin/libgdexample.windows.template_debug.x86_32.dll"
windows.release.x86_32 = "res://bin/libgdexample.windows.template_release.x86_32.dll"
windows.debug.x86_64 = "res://bin/libgdexample.windows.template_debug.x86_64.dll"
windows.release.x86_64 = "res://bin/libgdexample.windows.template_release.x86_64.dll"
linux.debug.x86_64 = "res://bin/libgdexample.linux.template_debug.x86_64.so"
linux.release.x86_64 = "res://bin/libgdexample.linux.template_release.x86_64.so"
linux.debug.arm64 = "res://bin/libgdexample.linux.template_debug.arm64.so"
linux.release.arm64 = "res://bin/libgdexample.linux.template_release.arm64.so"
linux.debug.rv64 = "res://bin/libgdexample.linux.template_debug.rv64.so"
linux.release.rv64 = "res://bin/libgdexample.linux.template_release.rv64.so"
```

Here are lists of some of the available built-in options (for more look at the [feature tags](https://docs.godotengine.org/en/stable/tutorials/export/feature_tags.html#doc-feature-tags)):

#### Running system[¶](https://docs.godotengine.org/en/stable/tutorials/scripting/gdextension/gdextension_file.html#running-system "Permalink to this headline")

|Flag|Description|
|---|---|
|**windows**|Windows operating system|
|**macos**|Mac operating system|
|**linux**|Linux operating system|
|**bsd**|BSD operating system|
|**linuxbsd**|Linux or BSD operating system|
|**android**|Android operating system|
|**ios**|iOS operating system|
|**web**|Web browser|
### Icons Section

### Dependencies Section
From [docs](https://docs.godotengine.org/en/stable/tutorials/scripting/gdextension/gdextension_file.html#dependencies-section). 

In this section you set the paths of the GDExtension dependencies. This is used internally to export the dependencies when exporting your game executable. You are able to set which dependency is loaded depending on the feature flags of the exported executable. In addition, you are able to set an optional subdirectory to move your dependencies into. If no path is supplied Godot will move the libraries into the same directory as your game executable.

> [!warning] MacOS Libraries are different
> In MacOS it is necessary to have shared libraries inside a folder called `Frameworks` with a directory structure like this: `Game.app/Contents/Frameworks`.


```toml

[dependencies]

macos.debug = {
    "res://bin/libdependency.macos.template_debug.framework" : "Contents/Frameworks"
}
macos.release = {
    "res://bin/libdependency.macos.template_release.framework" : "Contents/Frameworks"
}
windows.debug = {
    "res://bin/libdependency.windows.template_debug.x86_64.dll" : "",
    "res://bin/libdependency.windows.template_debug.x86_32.dll" : ""
}
windows.release = {
    "res://bin/libdependency.windows.template_release.x86_64.dll" : "",
    "res://bin/libdependency.windows.template_release.x86_32.dll" : ""
}
linux.debug = {
    "res://bin/libdependency.linux.template_debug.x86_64.so" : "",
    "res://bin/libdependency.linux.template_debug.arm64.so" : "",
    "res://bin/libdependency.linux.template_debug.rv64.so" : ""
}
linux.release = {
    "res://bin/libdependency.linux.template_release.x86_64.so" : "",
    "res://bin/libdependency.linux.template_release.arm64.so" : "",
    "res://bin/libdependency.linux.template_release.rv64.so" : ""
}
```
