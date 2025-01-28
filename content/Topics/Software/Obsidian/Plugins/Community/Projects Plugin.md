---
publish: true
---

| GitHub         | [GitHub - marcusolsson/obsidian-projects: Plain text project planning in Obsidian](https://github.com/marcusolsson/obsidian-projects) |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Docs           |                                                                                                                                       |
| Obsidian URL   | [obsidian://show-plugin?id=obsidian-projects](obsidian://show-plugin?id=obsidian-projects)                                            |
| Forum (GitHub) | [marcusolsson/obsidian-projects · Discussions · GitHub](https://github.com/marcusolsson/obsidian-projects/discussions)                |

Allows you to manage projects with a UI that is similar to the tables in [[AirTable]] and [[Notion]]. 

- The [announcement blog post](https://marcusolsson.dev/announcing-obsidian-projects/#install-the-obsidian-projects-plugin). 
## Demo
![Fetching Title#w1jb](https://www.youtube.com/watch?v=aFfREf9IQ7Q)

See my notes on this video [[Video Tutorial - Obsidian Projects Plugin|here]]. 

## Use cases
- Running a content publishing calendar: 
	- [[Obsidian For Content Creators (ft. Projects Plugin)]] 
	- Great for planning/scheduling recurring projects like YouTube videos. 
- Editing metadata of many notes at the same time. 
	- Obsidian allows you to store metadata of notes in [[properties in Obsidian|properties]]. 
	- This plugin makes it easy to edit many properties across many files at the same time and see them side-by-side. 
- This plugin pairs very nicely with the [[Journals Plugin]] and makes it very easy to navigate between them. 
## Links
- [Active issues](https://github.com/marcusolsson/obsidian-projects/issues?q=is%3Aopen+is%3Aissue+sort%3Areactions-%2B1-desc+label%3Alifecycle%2Factive): Issues that are actively being worked on.
- [Prioritized backlog](https://github.com/marcusolsson/obsidian-projects/issues?q=is%3Aopen+is%3Aissue+label%3Apriority%2Fhigh+sort%3Areactions-%2B1-desc+): Issues we'll be working on next.
- [Backlog](https://github.com/marcusolsson/obsidian-projects/issues?q=is%3Aopen+is%3Aissue+label%3Alifecycle%2Fbacklog+sort%3Areactions-%2B1-desc): Issues anyone can start working on (please let us know before you do).
- [Ideas](https://github.com/marcusolsson/obsidian-projects/issues?q=is%3Aopen+is%3Aissue+label%3Alifecycle%2Fidea+sort%3Areactions-%2B1-desc): Promising issues that haven't made it to the backlog yet.
## Design Philosophy
When developing any software, you are often faced with difficult choices. To help guide design decisions, this project adheres to the following principles:

- **Leave no trace:** The plugin must not leave any plugin-specific configuration in the notes, such as custom front matter properties. Notes may be shared with colleagues and teams who don't use Obsidian. If the user stops using this plugin, they shouldn't have to clean up all their notes.
- **Keep it native:** The plugin should look and feel like it's native to Obsidian. The plugin should also prefer native Web APIs over custom components whenever possible.
- **Stability over features:** This plugin is geared towards professionals with high demands on reliability. Any bug reports and usability issues will be prioritized over new features.
## Tips
### How to link to a project: 
> From: [How can I link to Projects from a note? · marcusolsson/obsidian-projects · Discussion #377 · GitHub](https://github.com/marcusolsson/obsidian-projects/discussions/377#discussion-4772762) 
> Since Projects stores all its configuration in the plugin configuration, `data.json`, you can't link to a Project from a note using internal links.
> 
> A workaround is to use the [Advanced URI](https://github.com/Vinzent03/obsidian-advanced-uri) plugin, which lets you create links to commands.
> 
> 1. Install [Obsidian Advanced URI](https://github.com/Vinzent03/obsidian-advanced-uri) from Community plugins.
> 2. In the **Command palette**, select **Advanced URI: copy URI for command**.
> 3. Select **<Don't specify a file>**.
> 4. Select **Projects: Show projects**.
> 5. In a note, enter `[Show projects](<paste the copied URI>)`.
> 
> From 1.13.0, you can also enable commands to show specific projects and views. To enable a command:
> 
> 1. Open **Settings**.
> 2. Select **Projects** in the sidebar.
> 3. Under **Commands**, enable the projects and views you want to create commands for.
> 
> The command palette now has an additional Show command for each project and view that you enabled. Note that you can use **Advanced URI: copy URI for command** to create links for each one.

## Templates
### Supported Variables
![[Projects Plugin.png]]
### Embeddable Views
![[Projects Plugin-1.png]]