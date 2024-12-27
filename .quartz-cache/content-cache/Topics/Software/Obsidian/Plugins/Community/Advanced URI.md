---
publish: true
---

| GitHub       | [GitHub - Vinzent03/obsidian-advanced-uri: Advanced modes for Obsidian URI](https://github.com/Vinzent03/obsidian-advanced-uri) |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Docs         |                                                                                                                                 |
| Obsidian URL | obsidian://show-plugin?id=obsidian-advanced-uri                                                                                 |


## Use Cases

### Call a Command
From: [Commands | Obsidian Advanced URI](https://vinzent03.github.io/obsidian-advanced-uri/actions/commands) 

#### Example
Close specific tab by its filepath:

```url
obsidian://advanced-uri?vault=<your-vault>&filepath=<your-file>&commandid=workspace%253Aclose
```

To explain this example: It first switches to the tab specified by `filepath` and then executes the command `Close current tab` by its ID. Resulting in the ability to close any tab by its filepath.
