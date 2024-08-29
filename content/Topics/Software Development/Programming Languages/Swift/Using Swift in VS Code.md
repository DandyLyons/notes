---
publish: true
---
You can write and build Swift code in [[VS Code]]. Make sure to download the [official Swift extension](https://marketplace.visualstudio.com/items?itemName=sswg.swift-lang) inside of VS Code. 

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