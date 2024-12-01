---
publish: true
title: Using Swift in VS Code
aliases:
  - Using Swift in VS Code
---
You can write and build Swift code in [[Topics/Software Development/IDEs/VS Code/index]]. Make sure to download the [official Swift extension](https://marketplace.visualstudio.com/items?itemName=sswg.swift-lang) inside of VS Code. 

## Use Cases
- [[Expanding Swift macros in VS Code]] 

## Demo
- [[Video - Building Swift Packages in VSCode - Tim Condon - Swift Heroes 2022]] 

## Docs
- [Swift.org - Configuring VS Code for Swift Development](https://www.swift.org/documentation/articles/getting-started-with-vscode-swift.html)
- [Tasks in Visual Studio Code](https://code.visualstudio.com/docs/editor/tasks) 
The VS Code Swift extension uses [SourceKit-LSP](https://github.com/swiftlang/sourcekit-lsp) to power language features. SourceKit-LSP provides the following features in the editor. Use these links to see the VS Code documentation for each topic:

- [Code completion](https://code.visualstudio.com/docs/editor/intellisense)
- [Go to definition](https://code.visualstudio.com/docs/editor/editingevolved#_go-to-definition)
- [Find all references](https://code.visualstudio.com/Docs/editor/editingevolved#_peek)
- [Rename refactoring](https://code.visualstudio.com/docs/editor/refactoring#_rename-symbol)
- [Diagnostics](https://code.visualstudio.com/docs/editor/editingevolved#_errors-warnings)
- [Quick Fixes](https://code.visualstudio.com/docs/editor/editingevolved#_code-action)


> [!NOTE] Must use `swift build` before you can use language features
> Before language features can be used you must perform a `swift build` command on your project either on the command line or using a task in VS Code. This populates the index in SourceKit-LSP.


## How to build
To build Swift code in Visual Studio Code, you need to set up a task that will run the Swift compiler. Here's how you can do it:

1. Open the Command Palette with `Cmd+Shift+P`.
2. Type "Tasks: Configure Default Build Task" and select it.
3. Select "Create tasks.json file from template", and then "Others".
4. Replace the content of the generated `tasks.json` file with the following:

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "swift build",
            "type": "shell",
            "command": "swift build",
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "presentation": {
                "reveal": "always"
            },
            "problemMatcher": []
        }
    ]
}
```

This task will run the `swift build` command whenever you run the Build Task (`Cmd+Shift+B`).