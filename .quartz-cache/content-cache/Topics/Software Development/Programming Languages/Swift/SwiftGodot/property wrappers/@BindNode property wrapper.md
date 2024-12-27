---
publish: true
---
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

If you omit the `withPath` parameter, depending on your system, the result might not resolve at runtime.