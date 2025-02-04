---
publish: true
---
**Docs**: [Directory structure | Tuist](https://docs.tuist.io/guide/project/directory-structure.html)

```
Tuist/
  Config.swift
  Package.swift
  ProjectDescriptionHelpers/
Projects/
  App/
    Project.swift
  Feature/
    Project.swift
Workspace.swift
```

- **Tuist directory:** This directory has two purposes. First, it signals **where the root of the project is**. This allows constructing paths relative to the root of the project, and also also running Tuist commands from any directory within the project. Second, it's the container for the following files:
    
    - **Config.swift:** This file contains configuration for Tuist that's shared across all the projects, workspaces, and environments. For example, it can be used to disable automatic generation of schemes, or to define the deployment target of the projects.
    - **ProjectDescriptionHelpers:** This directory contains Swift code that's shared across all the manifest files. Manifest files can `import ProjectDescriptionHelpers` to use the code defined in this directory. Sharing code is useful to avoid duplications and ensure consistency across the projects.
    - **Package.swift:** This file contains Swift Package dependencies for Tuist to integrate them using Xcode projects and targets (like [CocoaPods](https://cococapods/)) that are configurable and optimizable. Learn more [here](doc:dependencies).
- **Root directory**: The root directory of your project that also contains the `Tuist` directory.
    
    - **Workspace.swift:** This manifest represents an Xcode workspace. It's used to group other projects and can also add additional files and schemes.
    - **Project.swift:** This manifest represents an Xcode project. It's used to define the targets that are part of the project, and their dependencies.

When interacting with the above project, commads expect to find either a `Workspace.swift` or a `Project.swift` file in the working directory or the directory indicated via the `--path` flag. The manifest should be in a directory or subdirectory of a directory containing a `Tuist` directory, which represents the root of the project.