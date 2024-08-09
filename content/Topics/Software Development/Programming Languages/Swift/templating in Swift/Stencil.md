---
publish: true
date: 
aliases:
  - Stencil templating language
title: Stencil templating language
repo: https://github.com/stencilproject/Stencil
docs: https://stencil.fuller.li/en/latest/
related:
  - "[[Sourcery]]"
---
Stencil is a simple and powerful template language for Swift. It provides a syntax similar to Django and Mustache. If you're familiar with these, you will feel right at home with Stencil.

## Example

[](https://github.com/stencilproject/Stencil#example)

```html
There are {{ articles.count }} articles.

<ul>
  {% for article in articles %}
    <li>{{ article.title }} by {{ article.author }}</li>
  {% endfor %}
</ul>
```

```swift
import Stencil

struct Article {
  let title: String
  let author: String
}

let context = [
  "articles": [
    Article(title: "Migrating from OCUnit to XCTest", author: "Kyle Fuller"),
    Article(title: "Memory Management with ARC", author: "Kyle Fuller"),
  ]
]

let environment = Environment(loader: FileSystemLoader(paths: ["templates/"]))
let rendered = try environment.renderTemplate(name: "article_list.html", context: context)

print(rendered)
```