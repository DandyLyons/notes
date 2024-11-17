---
publish: true
docs: https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/documentation/swiftgodot/scenetree(path:)
---
> [!disambiguation] Disambiguation
> Not to be confused with [[SceneTree class]]

**see [docs](https://swiftpackageindex.com/migueldeicaza/swiftgodot/main/documentation/swiftgodot/scenetree(path:))**

You typically use the `path` parameter to specify the path to the node in your scene that you want to reference:

```swift
@Godot
class Main: Node {
    @SceneTree(path: "CharacterBody2D") var player: PlayerController?
    @SceneTree(path: "locations/spawnpoint") var spawnpoint: Node2D?
    @SceneTree(path: "Telepoint") var teleportArea: Area2D?
}
```