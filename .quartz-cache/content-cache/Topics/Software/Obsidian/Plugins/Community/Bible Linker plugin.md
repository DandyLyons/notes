---
publish: true
---

| GitHub       |                                                       |
| ------------ | ----------------------------------------------------- |
| Docs         |                                                       |
| Obsidian URL | [🔗](obsidian://show-plugin?id=obsidian-bible-linker) |
## Getting Started
- [[Obsidian Bible Link Plugin Link Multiple Bible Verses With Ease  biblestudy biblekasten#Final Solution Using the Obsidian Bible Linker Plugin]] 

## Setup
- **Verses**: In my Bible vault, all verses are marked with a heading like `v1` meaning verse 1. Because of this I need to tell the plugin to add a `v` before every verse number. 
	- Bible Link Plugin Settings -> "Link Bible Verses Command" -> "Verse Prefix"
## Usage


| **Insert Reference**       |     |
| -------------------------- | --- |
| **Link Type**              |     |
| **Each link on new line?** |     |

- **Result**:  
- **Result (Code)**:

### Basic

| **Insert Reference**       | `Gen-01:1-5` |
| -------------------------- | ------------ |
| **Link Type**              | Basic        |
| **Each link on new line?** | no           |

- **Result**:  [[Gen-01#v1]][[Gen-01#v2]][[Gen-01#v3]][[Gen-01#v4]][[Gen-01#v5]]
- **Result (Code)**: `[[Gen-01#v1]][[Gen-01#v2]][[Gen-01#v3]][[Gen-01#v4]][[Gen-01#v5]]`





### Embedded


| **Insert Reference**       | `John-01:1-5` |
| -------------------------- | ------------- |
| **Link Type**              | Embedded      |
| **Each link on new line?** | yes           |
#### Result

![[John-01#v1]]
![[John-01#v2]]
![[John-01#v3]]
![[John-01#v4]]
![[John-01#v5]]



---
## Requirements

Requires you to have bible in markdown in your vault, with similar structure to [Obsidian bible study kit](https://forum.obsidian.md/t/bible-study-in-obsidian-kit-including-the-bible-in-markdown/12503) - that is:

- 1 file = 1 chapter
- All verses of given chapter are present
- Verse is marked with heading (any level), verse text is on the next line after said heading

### Example File

```md
# Name of chapter (or some other text)

... 

# v1
1st verse text

###### 2
2nd verse text

### verse 3
3rd verse text
```