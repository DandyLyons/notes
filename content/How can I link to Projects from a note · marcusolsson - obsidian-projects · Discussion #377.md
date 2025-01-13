Since Projects stores all its configuration in the plugin configuration, data.json, you can't link to a Project from a note using internal links.

A workaround is to use the Advanced URI plugin, which lets you create links to commands.

Install Obsidian Advanced URI from Community plugins.
In the Command palette, select Advanced URI: copy URI for command.
Select <Don't specify a file>.
Select Projects: Show projects.
In a note, enter [Show projects](<paste the copied URI>).
From 1.13.0, you can also enable commands to show specific projects and views. To enable a command:

Open Settings.
Select Projects in the sidebar.
Under Commands, enable the projects and views you want to create commands for.
The command palette now has an additional Show command for each project and view that you enabled. Note that you can use Advanced URI: copy URI for command to create links for each one.