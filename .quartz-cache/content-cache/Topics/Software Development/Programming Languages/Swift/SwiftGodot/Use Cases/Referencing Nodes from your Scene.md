---
docs: https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/documentation/swiftgodot/bindingnodes
publish: true
---
You will find yourself referencing nodes from a scene in your code. In [[Topics/Software Development/Programming Languages/GDScript/index|GDScript]], that is usually achieved by using the dollar sign and the name of the object you want to reference (e.g. `$MyNode`).

With SwiftGodot, you can achieve the same behavior by using: 
1. [[#the `SceneTreeMacro` macro]] or
2. [[#the `BindNode` property wrapper]][^1]. 

## the `SceneTreeMacro` macro
For more see [[@SceneTree macro]]

You typically use the `path` parameter to specify the path to the node in your scene that you want to reference:

```swift
@Godot
class Main: Node {
    @SceneTree(path: "CharacterBody2D") var player: PlayerController?
    @SceneTree(path: "locations/spawnpoint") var spawnpoint: Node2D?
    @SceneTree(path: "Telepoint") var teleportArea: Area2D?
}
```
## the `BindNode` property wrapper
For more see [[@BindNode property wrapper]]

BindNode is an older version, but is not as convenient as using the [[@SceneTree macro]].

In your class declaration, use the `BindNode` property wrapper like this to reference the nodes that you created with the Godot Editor:

```swift
@Godot
class Main: Node {
    @BindNode(withPath:"timer") var startTimer: SwiftGodot.Timer
    @BindNode(withPath:"music") var music: AudioStreamPlayer
    @BindNode(withPath:"mobTimer") var mobTimer: SwiftGodot.Timer


    func newGame () {
        startTimer.start ()
    }
}
```



[^1]: Use this if you are not using Macros