---
title: Daniel's Dev Diary
aliases:
  - Daniel's Dev Diary
publish: true
---
## [[2024-08-09]]

- [[job copilot]] So the current plan is to:
	- create initializers on my types so that they can convert back and forth to [[SwiftyJSONResum]]. 
	- My models will only be persisted with my own types. 
	- Users will be able to import or export JSON resume
- 12:00: I'm just having way too many build errors: 
	- **As much as I love tuist, I'm thinking of migrating out of it.** There are too many downsides and the upsides aren't relevant to my current needs
	- upsides: 
		- minimize git merge conflicts by relying less on xcodeproj: 
			- [[Topics/Software Development/Apple Platforms/Xcode/Tuist/index|Tuist]] handles this great, but so does SPM. 
		- reduce build times with binary caches: 
			- This is one of my favorite features, and saves so much time. But it has downsides which almost entirely negate it's helpfulness. 
				- 1. If a macro module is cached, then you lose the ability to expand the macro in Xcode
					- There's a workaround, to preserve expansion, but it requires not caching the macro. This workaround works, but tuist doesn't have a way to say *cache everything except this*. Instead, you either cache everything, or you manually tell it what to cache. 
				- 2. There are edge cases where caches don't behave as expected, so I end up constantly doubting my caches and then turning them off. 
				- 3. Xcode already reduces build times by caching through Derived Data. If I'm constantly doubting tuist's caching then why not just use Xcode's caching
				- 4. tuist caching can be uploaded to the cloud, so that it only has to be built once and then can be downloaded in the future. This is really helpful for teams, but I'm solo atm. 
		- Tuist has features that are great for code collaboration but I'm solo right now.
	- downsides: 
		- extra complexity: Xcode's build system is already very complex, but now you have to figure out how to map every xcode functionality to a tuist project definition.
		- Dynamic vs. Static libraries: You need to decide if your modules should be dynamic or static. Xcode and SPM handle a lot of this complexity for you (which is kind of irritating because it's non-deterministic and not very predictable). Tuist takes a different approach, which is by default it's all static, and you have to explicitly say what you want to be dynamic. I like this approach because it is deterministic, but I don't like this approach because I still have large knowledge gaps over how to decide what should be static or dynamic. 
		- **Build "weirdness"**: With tuist, I am constantly getting build and linker errors that I don't understand. **Certainly much of this is due to user error, but it feels like I need to be deeply knowledgeable of the build system just to get anything working.** I'm spending more time fighting broken builds, than actually iterating on something. 
- 9:19: I've managed to port much of my project from tuist to SPM: 
	- It took me a while to remember that in SPM you need to declare a target, and then redeclare a product. Why?? What is the point of this extra step. It seems pointless. 
		- More confusing yet, Xcode takes your product, and then makes a scheme? There are so many abstraction layers for seemingly no reason. 