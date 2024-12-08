---
publish: true
---
This is an official browser extension which makes it easy to "clip" or save content from websites into your Obsidian vault. 

## Helpful Resources
- [Official site](https://obsidian.md/clipper) 
- [Official docs](https://help.obsidian.md/web-clipper) 
- [Official Roadmap](https://github.com/obsidianmd/obsidian-clipper?tab=readme-ov-file#roadmap) 
- 
### Templates
- [Official docs on templates](https://help.obsidian.md/web-clipper/templates) 
- [GH repo: web-clipper-templates](https://github.com/obsidian-community/web-clipper-templates/tree/main)
- [GH repo: kepano/clipper-templates](https://github.com/kepano/clipper-templates/tree/main/templates) 
#### Variables
See [docs](https://help.obsidian.md/web-clipper/variables#Preset+variables) 

| Variable          | Description                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------- |
| `{{author}}`      | Author of the page                                                                                              |
| `{{content}}`     | Article content, [highlights](https://help.obsidian.md/web-clipper/highlight), or selection, in Markdown format |
| `{{contentHtml}}` | Article content, [highlights](https://help.obsidian.md/web-clipper/highlight), or selection, in HTML format     |
| `{{date}}`        | Current date, can be formatted using the `date` filter                                                          |
| `{{description}}` | Description or excerpt                                                                                          |
| `{{domain}}`      | Domain                                                                                                          |
| `{{favicon}}`     | Favicon URL                                                                                                     |
| `{{fullHtml}}`    | Unprocessed HTML for the full page content                                                                      |
| `{{highlights}}`  | [Highlights](https://help.obsidian.md/web-clipper/highlight) with text and timestamps                           |
| `{{image}}`       | Social share image URL                                                                                          |
| `{{published}}`   | Published date, can be formatted using the `date` filter                                                        |
| `{{site}}`        | Site name or publisher                                                                                          |
| `{{title}}`       | Title of the page                                                                                               |
| `{{time}}`        | Current date and time                                                                                           |
| `{{url}}`         | Current URL                                                                                                     |
#### Variable Filters
See [docs](https://arc.net/l/quote/jwucjonw)
Filters allow you to modify [variables](https://help.obsidian.md/web-clipper/variables) in [Web Clipper templates](https://help.obsidian.md/web-clipper/templates). Filters are applied to variables using the syntax `{{variable|filter}}`.

- Filters work for any kind of [variable](https://help.obsidian.md/web-clipper/variables) including `prompt`, `meta`, `selector`, and `schema` variables.
- Filters can be chained, e.g. `{{variable|filter1|filter2}}`, and are applied in the order they are added.

### Interpreter
- [Official docs](https://help.obsidian.md/web-clipper/interpreter) 