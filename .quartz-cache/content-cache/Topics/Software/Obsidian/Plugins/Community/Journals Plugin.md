---
repo: https://github.com/srg-kostyrko/obsidian-journal
docs: 
url: obsidian://show-plugin?id=journals
publish: true
---

| GitHub       | https://github.com/srg-kostyrko/obsidian-journal |
| ------------ | ------------------------------------------------ |
| Docs         |                                                  |
| Obsidian URL | obsidian://show-plugin?id=journals               |

## Syntax
- [Supported Code Blocks](https://github.com/srg-kostyrko/obsidian-journal#supported-code-blocks) 

## Compatibility with other plugins
- `Daily notes` core plugin - this plugin intends to be a replacement for it. Notes created through Daily notes will not be connected to any journal so it is advised to disable this plugin.
- `Periodic Notes` community plugin - this plugin was initially inspired by Periodic notes that seem to abandoned and aims to be a replacement for it.
- `Calendar` community plugin - starting 1.1.0 this plugin has calendar view similar to calendar plugin. It does not have all the features of calendar plugin as of now, but will gradually catch up.
- [[Templater plugin]] community plugin - starting with 1.3.0 plugin supports Templater templates in its settings. Journal plugin variables are replaced first and can be used inside templater commands.

### Templater caveats
There can be cases when Templater starts interfering with plugin actions resulting in partially broken note or journal related data removed from [[Frontmatter]]. The best setup to avoid such problems would be:

- template configured in journal plugin settings
- `Trigger Templater on new file creation` is disabled
- OR `Trigger Templater on new file creation` is enabled, `Enable Folder Templates` is enabled, **NO** Folder template is configured

This ensures that only journal plugin is processing note template thus avoiding conflicts with templater plugin (journal plugin will use templater itself under the hood to process templater commands).

## Supported variables
From [here](https://github.com/srg-kostyrko/obsidian-journal#supported-variables)
There variables can be used in note name template, note storage path, content of template note.
- `{{journal_name}}` - name of journal note belongs to
- `{{note_name}}` - name of note
- `{{start_date}}` - first day of week, month, quarter, year or interval depending on note type, formatted using date format from settings. Format can be overridden using following syntax `{{start_date:format}}` where format is string using [[Moment.js]] (like `{{start_date:YYYY-MM-DD}}`). You can do date manipulations using [Moment.js manipulation rules](https://momentjs.com/docs/#/manipulating/add/), e.g. `{{start_date+5d:format}}` to add 5 days.
- `{{end_date}}` - last day of week, month, quarter, year or interval depending on note type, formatting rules are the same as in `{{start_date}}`, as well as the calculations
- `{{date}}` - alias to `{{start_date}}`
- `{{index}}` - available for interval based journals indicating index of interval (like financial quarter or spring number)