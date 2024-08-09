---
title: Xcode
publish: true
aliases:
  - Xcode
---
![WWDC24: Xcode essentials | Apple - YouTube](https://www.youtube.com/watch?v=EN7-6Oj7cL0)

[65 tips to use Xcode like a PRO 👨🏻‍💻👩🏽‍💻 - YouTube](https://www.youtube.com/watch?v=sF5CO58oh4o)

## Tools for Xcode
- [Xcode Releases | xcodereleases.com](https://xcodereleases.com/) 
- [[Topics/Software Development/Apple Platforms/Xcode/Tuist/index|Tuist]] 
## Xcode Lingo

- [Xcode templates, projects, targets, schemes and workspaces - YouTube](https://www.youtube.com/watch?v=iComTMVqgXA) 
- [Xcode Frameworks and Workspaces - YouTube](https://www.youtube.com/watch?v=l7KnJfDiWns) 

### Modules, Frameworks, and Libraries
Source: [Xcode Modules, Framework and Libraries Comparison - Justin Eghtedari](https://codedstuff.com/xcode-modules-framework-and-libraries-comparison/) 

|                                                     | Module     | Framework  | Library                                    |
| --------------------------------------------------- | ---------- | ---------- | ------------------------------------------ |
| Can contain resources? (Non-code, e.g. Images etc.) | Yes        | Yes        | No                                         |
| Linking time                                        | Runtime    | Runtime    | Compile time (static)<br>Runtime (dynamic) |
| Example file types                                  | .framework | .framework | .a (static)<br>.dylib (dynamic)            |
| Can be embedded?                                    | Yes        | Yes        | No (static)<br>No (dynamic)                |
| Shared between extensions?                          | Yes        | Yes        | No                                         |
| Decreases app size?                                 | Maybe      | Maybe      | No (static)<br>Maybe (dynamic)             |
| Faster startup?                                     | No         | No         | Yes (static)                               |
