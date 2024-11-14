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

See also: [[#Using a Build Script]]. 

### Define you `.gdextension` file
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

### Build Your GDExtension in Terminal
See [docs tutorial Section 3](https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/tutorials/swiftgodot/your-first-extension#Set-up-the-extension) step 4. 

Run: 
```zsh
swift build --configuration debug
```

### Copy the build targets into your Godot project
See [docs tutorial Section 3](https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/tutorials/swiftgodot/your-first-extension#Set-up-the-extension) step 5 and 6. 

> [!Question] How do we automate this?
> There must be a way to automate this so that it is quicker, easier and less error prone. Perhaps we should use a makefile or a script?  See [[#Using a Build Script]]. 

## Using a Build Script 
Here is an example build script[^1] which can be used to copy the build targets into your Godot project. And here is an [explanation](https://www.perplexity.ai/search/you-are-an-expert-at-godot-exp-IWU2FwreQgqGUpR8V0MjoQ) of how the script works.

```sh
#!/bin/sh
SWIFTBUILD="/usr/bin/xcrun swift build -c $1"
GODOT_BIN_PATH="./godot/bin/"
BUILD_OUTPUTDIR=""

DoBuild () {
	local SPECIFIC_SWIFTBUILD="$SWIFTBUILD $1"
	local SWIFTBUILD_GETOUTPUT="$SPECIFIC_SWIFTBUILD --show-bin-path"
	BUILD_OUTPUTDIR=$($SWIFTBUILD_GETOUTPUT)
	 
	if $SWIFTBUILD; then
		# Remove the generated files because their presence bothers VSCode
		rm EntryPoint.generated.*
		echo "Build successful"
	else
		exit
	fi
}

CopyResult () {
	local OUTPUTDIR=$1
	mkdir -p "$GODOT_OUTPUT_PATH"
	echo "Copy output to $GODOT_OUTPUT_PATH"
	rsync --checksum "$OUTPUTDIR"/libSanctuaryDriver.dylib "$GODOT_OUTPUT_PATH"
	rsync --checksum "$OUTPUTDIR"/libSwiftGodot.dylib "$GODOT_OUTPUT_PATH"
}

StandardOutputPath () {
	local OUTPUTDIR=$1
	if [[ "$OUTPUTDIR" =~ ([^/]+/+[^/]+)/*$ ]]; then
		LAST_TWO_DIRECTORIES=$BASH_REMATCH
		GODOT_OUTPUT_PATH="$GODOT_BIN_PATH$LAST_TWO_DIRECTORIES"
	fi
}


case $2 in
	mac)
		if [ $1 == "debug" ]; then
			DoBuild "--triple arm64-apple-macosx"
			StandardOutputPath $BUILD_OUTPUTDIR
			CopyResult $BUILD_OUTPUTDIR
		fi
		if [ $1 == "release" ]; then
			UNIVERSAL_OUTPUTDIR="./.build/apple/Products/Release"
			DoBuild "--triple arm64-apple-macosx"
			ARM_OUTPUTDIR=$BUILD_OUTPUTDIR
			DoBuild "--triple x86_64-apple-macosx"
			INTEL_OUTPUTDIR=$BUILD_OUTPUTDIR
			mkdir -p "$UNIVERSAL_OUTPUTDIR"
			echo "Creating Universal binaries…"
			lipo -create -output "$UNIVERSAL_OUTPUTDIR"/libSanctuaryDriver.dylib "$ARM_OUTPUTDIR"/libSanctuaryDriver.dylib "$INTEL_OUTPUTDIR"/libSanctuaryDriver.dylib
			lipo -create -output "$UNIVERSAL_OUTPUTDIR"/libSwiftGodot.dylib "$ARM_OUTPUTDIR"/libSanctuaryDriver.dylib "$INTEL_OUTPUTDIR"/libSwiftGodot.dylib
			GODOT_OUTPUT_PATH="$GODOT_BIN_PATH/universal-apple-macosx/release"
			CopyResult $UNIVERSAL_OUTPUTDIR
		fi
	;;
	*)
		echo "Second argument much be platform - currently only 'mac' is supported."
	;;
esac

```

And this is the `.gdextension` file that the script was designed to work with. 

```toml
[configuration]
entry_symbol = "swift_entry_point"
compatibility_minimum = 4.2
reloadable = false
[libraries]
macos.debug = "res://bin/arm64-apple-macosx/debug/libSanctuaryDriver.dylib"
macos.release = "res://bin/universal-apple-macosx/release/libSanctuaryDriver.dylib"
[dependencies]
macos.debug = {"res://bin/arm64-apple-macosx/debug/libSwiftGodot.dylib" : ""}
macos.release = {"res://bin/universal-apple-macosx/release/libSwiftGodot.dylib" : ""}
```
## Further Exploration
> [!Question] How does our GDExtension set up affect hot reloading? 
> It would be nice to be able to use [[Hot Reloading in SwiftGodot]]. I need to do more research to find out if this is currently viable and what the limitations are. 

[^1]: Thanks to Chris Backas for sharing his script. 