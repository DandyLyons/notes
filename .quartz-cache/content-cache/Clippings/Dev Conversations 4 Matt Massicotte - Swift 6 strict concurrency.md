---
title: "Dev Conversations #4: Matt Massicotte - Swift 6 strict concurrency"
source: "https://www.youtube.com/watch?v=oMg2OjO3LLI"
media_link: "https://www.youtube.com/watch?v=oMg2OjO3LLI"
author:
  - "[[Swift Toolkit]]"
contentPublished: "2024-11-27"
noteCreated: "2024-12-19"
description: "The adoption of strict concurrency in Swift is not an easy process in some projects. Implicit assumptions we usually make are often challenged by the compiler, and we don't know how to solve them in m"
tags:
  - "clippings"
  - "video"
takeaways:
subjects:
Status: "✅ Read"
publish: true
Youtube_Duration: "29:09"
people:
  - "[[Matt Massicote]]"
---
![](https://www.youtube.com/watch?v=oMg2OjO3LLI)

## Description
The adoption of strict concurrency in Swift is not an easy process in some projects. Implicit assumptions we usually make are often challenged by the compiler, and we don't know how to solve them in many cases - leading to frustration among us, developers. The amount of keywords also doesn't help: tasks, sendability, isolation domains and boundaries, actors, preconcurrency, and the list goes on.

If you've been active on Mastodon, in the iOS development world, there's a person that is frequently mentioned in questions or errors about Swift's strict concurrency: Matt Massicotte. While working on his open-source projects, he recognized the opportunity to migrate them and deepen his understanding of structured concurrency.

In this 4th episode of Dev Conversations, he joins us to talk about his experience with Apple platforms even before the introduction of OS X; a bit about his work on improving the iPhone's battery life in the late 2000s, and also the early days at Crashlytics.

But the main focus of the conversation is Swift 6's strict concurrency. We discuss the factors one should consider before adopting it, the feelings we face when encountering enigmatic errors, and also suggest practical solutions and strategies to upgrade to strict checking with peace of mind.

You can find the full post at https://swifttoolkit.dev/posts/dc-matt-massicotte


## My Notes
### 00:00 Intro
### 04:06 Learning Swift Concurrency
- Many blog posts about Swift concurrency are incorrect because Swift concurrency warnings were off by default, so those blog posts are not based on the compiler feedback. 
### 09:14 Migration: Bridging the Gap

- What is your motivation for using Swift 6 language mode? 
	- ⭐: I don't advise switching to Swift 6 language mode until you have a compelling reason to use it. 
### 11:43 Tips for Large Projects
- Gradually opt-into Swift 6 language mode module by module. 
	- Start with small, newer modules. 
- [13:55](https://www.youtube.com/watch?t=835&v=oMg2OjO3LLI): [[@preconcurrency in Swift]] : 
	- useful when you have a core library and want to add concurrency annotations, but don't want to force clients to update their code to adopt modern concurrency
	- `@preconcurrency` is poorly understood by the community
	- SwiftUI uses `@preconcurrency`. 
	- Mental model: Think of `@preconcurrency` as *introducing truth into your codebase*
		- Example use case: Annotate a method with `@MainActor` so that the user knows the reality that this is main actor isolated, 
			- but also annotate `@preconcurrency` so that the user doesn't HAVE to migrate their codebase yet. 
	- [15:06](https://www.youtube.com/watch?t=906&v=oMg2OjO3LLI): [[@preconcurrency in Swift]] has two different meanings depending on: 
		- if you are using an API: 
			- `@preconcurrency import`
		- if your are **vending** an API: 
			- e.g. annotating your API with `@preconcurrency`
### 16:35 Foundation Types and Apple's APIs
- 20:00 : [[Combine]] was not annotated for the new concurrency system
### 24:58 Opting in to Strict Concurrency
- 25:23 Swift 6 language mode vs compiler
### 26:13 More Resources


## Transcript

