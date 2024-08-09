---
publish: true
---


**Docs:** [Templates | Tuist](https://docs.tuist.io/guide/project/templates.html#using-a-template)

> [!quote] [Templates | Tuist](https://docs.tuist.io/guide/project/templates.html#using-a-template)
> In projects with an established architecture, developers might want to bootstrap new components or features that are consistent with the project. With `tuist scaffold` you generate files, you can generate files from a template. You can define your own templates or use the ones that are vendored with Tuist. These are some scenarios where scaffolding might be useful:
> 
> - Create a new feature that follows a given architecture: `tuist scaffold viper --name MyFeature`.
> - Create new projects: `tuist scaffold feature-project --name Home`

## Types of templates
If `.string` and `.files` don't provide enough flexibility, you can leverage the [Stencil](https://stencil.fuller.li/en/latest/) templating language via the `.file` case. Besides that, you can also use additional filters defined here.

Using string interpolation, `\(nameAttribute)` above would resolve to . If you'd like to use Stencil filters in the template definition, you can use that interpolation manually and add any filters you like. For example, you might use `{ { name | lowercase } }` instead of `\(nameAttribute)` to get the lowercased value of the name attribute.

You can also use `.directory` which gives the possibility to copy entire folders to a given path.

> [!NOTE] PROJECT DESCRIPTION HELPERS
> Templates support the use of [project description helpers](https://docs.tuist.io/guide/project/code-sharing.html) to reuse code across templates.
