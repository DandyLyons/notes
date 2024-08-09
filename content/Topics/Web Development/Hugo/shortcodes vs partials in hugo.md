See [[Shortcodes in Hugo]] 

In Hugo, partials and shortcodes serve similar purposes of creating reusable code snippets, but they have some key differences in how and where they are used:

### Partials:

1. Used in template files (.html files in layouts directory)[1][2]
2. Accessed using the `partial` function in templates[1]
3. Can receive context scope as a parameter[2]
4. Typically used for reusable template components like headers, footers, or navigation menus[1]
5. Can return values and be used for data processing[4]

### Shortcodes:

1. Used in content files (.md files in content directory)[1][2]
2. Accessed using shortcode syntax like `{{< shortcode_name >}}` in Markdown content[1]
3. Can access page context directly[2]
4. Typically used for content-focused components like embedded videos, images, or other HTML widgets[1]
5. Cannot be used in template files[1]

## When to use each:

### Use partials when:
- You need to reuse template code across multiple layout files
- You want to process data and return values in templates
- You're working with site-wide components like headers or footers

### Use shortcodes when:
- You need to insert complex HTML or functionality directly in your Markdown content
- You want to provide easy-to-use content components for non-technical content authors
- You're working with content-specific elements like custom image formatting or embedded media

For example, use a partial for a site-wide navigation menu, and use a shortcode for inserting a specially formatted image gallery in a blog post.

In general, if the component is more related to the site's structure and layout, use a partial. If it's more about enhancing the content itself, use a shortcode.
