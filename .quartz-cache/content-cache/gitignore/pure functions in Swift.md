
I'm writing a proposal for Swift Evolution. 

I'm attaching the template. Please fill it out with my proposal. 

I would like to propose adding pure functions as a first class feature to Swift. 

- the `pure` keyword can be added before `func` to mark a function as `pure`

```swift
pure func shouldKeep(article: Article) -> Bool {
	
}
```

- `pure` functions are always `Sendable` meaning they can be satisfy the `@Sendable` requirement. 

```swift
actor ArticlesList {
	func filteredArticles(_ isIncluded: @Sendable (Article) -> Bool) async -> [Article] {
		// ...
	}
}

let articleList = ArticleList()
articleList.filteredArticles(shouldKeep(article:))
```

