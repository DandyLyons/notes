---
publish: true
aliases:
  - SPM
date:
---
## Cheat Sheets
- [The Missing SPM Syntax Cheatsheet @ SwiftToolkit.dev](https://swifttoolkit.dev/posts/spm-cheatsheet)

## Deep Dives
- [Swift Package Manager: understand resolve, reset and update](https://blog.eidinger.info/swift-package-manager-understand-resolve-reset-and-update) by [[Marco Eidinger]]

## Dependencies
### Visualizing Dependencies
In highly modularized code, you can have dozens of modules with a complex web of dependencies. These dependencies can be visualized using the [[GraphViz]] [[GraphViz#Dot Language|Dot Language]]. 

To do so, in your terminal, navigate to the directory that contains your `Package.swift` file. Then run: 
```zsh
swift package show-dependencies --format dot > dependencies.dot
```

SPM will analyze the modules in your package and create a GraphViz dependency graph and store it in the `dependencies.dot` file. Then run: 
```zsh
dot -Tpng dependencies.dot -o dependencies.png
```

Now dot will create a visual graph of your dependencies in a `.png` file! 


> [!tip] Tools available
> There are many tools available to customize the look of your visual graph such as [Graphviz Online](https://dreampuf.github.io/GraphvizOnline/). These can be very helpful for adding extra features to your graph such as color coding the types of your modules (test targets, macros, executables etc.). 
