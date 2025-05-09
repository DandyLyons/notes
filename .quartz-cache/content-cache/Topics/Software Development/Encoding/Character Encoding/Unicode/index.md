---
publish: true
title: Unicode
aliases:
  - Unicode
---

![Unicode, in friendly terms: ASCII, UTF-8, code points, character encodings, and more - YouTube](https://www.youtube.com/watch?v=ut74oHojxqo)

> The Unicode Standard encodes **characters** rather than **glyphs**, which
> is to say the idea rather than any particular representation. For
> example, the code point U+0041 always represents Latin Capital
> Letter A, no matter which font is used to render it.
> • Abstract Characters are the smallest meaningful units within
> a writing system
> • Coded Characters assign a name and a code point to identify
> each abstract character
> • Character Encoding Forms determine how coded characters
> are represented by computers
> • Character Encoding Schemes specify how encoded
> representations are serialized into bytes
> - From [[Guide to Swift Strings]]
## Terminology
- In Unicode, a *grapheme* ≠ a code point ≠ a [[byte]]:
	- **Unicode unaware**: traditionally programming languages such as C or Python assume that 1 byte = 1 grapheme. This is not the case for unicode.
- Grapheme: a single unit of a human writing system
	-  think of a grapheme as what would go on a single Scrabble tile. 
	- similar to a character, but not exactly the same thing. 
	- In Unicode, a grapheme is represented by **one or more** code points (the actual number representing the grapheme)
		- e.g. `è` can be represented as 
			- `233`: Latin small letter E with Acute or,
			- `101`: Latin Small Letter E + `769`: Combining Acute Accent Modifier
	- Grapheme size in bytes:
		- In [[ASCII]] 1 grapheme  = 1 byte
		- In [[Topics/Software Development/Encoding/Character Encoding/Unicode/index]], 1 grapheme ≠ 1 byte
- **Code point**: A number assigned to grapheme[^1]
	- These numbers must then be encoded into binary via an encoding strategy such as [[UTF-8]], or UTF-32. 
	- Code points are expressed in the form `U+1234` where `1234` is the assigned [[hexadecimal]] number for that character.

## Normalization (Comparing Unicode Strings)
See: [Unicode equivalence - Wikipedia](https://en.wikipedia.org/wiki/Unicode_equivalence#Normalization)
Remember that Unicode is **not** a one-to-one mapping to visual symbols. This is for a variety of reasons. One reason is that there can be more than one way unicode representation (code point) of a particular symbol (glyph). For example, è can be represented as one code point ([“è” U+00E8 Latin Small Letter E with Grave](https://www.compart.com/en/unicode/U+00E8)) or two ([“e” U+0065 Latin Small Letter E](https://www.compart.com/en/unicode/U+0065) and [“◌́” U+0301 Combining Acute Accent](https://www.compart.com/en/unicode/U+0301)). Both of these code point combinations result in exactly the same glyph. In other words,  it looks virtually identical to a human, but completely different to a computer. This creates a problem. For example, if you are implementing a search engine then you will only find search results for the results that match your exact code points. 

This is why Unicode added **normalization**. See [normal forms](https://en.wikipedia.org/wiki/Unicode_equivalence#Normal_forms) 

![Special Character Normalization With NFD, NFC, NFKD, NFKC - YouTube](https://www.youtube.com/watch?v=ttLD4DiMpiQ)

## Docs
- [Collation Charts](https://www.unicode.org/charts/collation/) - Latin letter sorted by shape

## Tools

### Unicode Explorers
- [Unicode Explorer.com](https://unicode-explorer.com/)
	- Invisibles: [Regular and Unusual Space Characters - Unicode Explorer](https://unicode-explorer.com/articles/space-characters) 
- [Unicode - Compart](https://www.compart.com/en/unicode)
- [Unicode Explorer | FontSpace](https://www.fontspace.com/unicode/chars)
	- [Unicode Blocks | FontSpace](https://www.fontspace.com/unicode/block)
	- [Unicode Scripts | FontSpace](https://www.fontspace.com/unicode/script)
	- [Unicode Character Categories | FontSpace](https://www.fontspace.com/unicode/category)
- [SYMBL (◕‿◕) Symbols, Emojis, Characters, Scripts, Alphabets, Hieroglyphs and the entire Unicode](https://symbl.cc/en/) 
	- Extensive documentation on Unicode
	- Many powerful tools (e.g. Morse code converter, Braille converter)
### Unicode Analyzers
- [Unicode Text Analyzer | FontSpace](https://www.fontspace.com/unicode/analyzer#e=8J-RrvCfj73igI3imYDvuI8)
- [Decode Text - Unicode Explorer](https://unicode-explorer.com/tools/decode/) 

### Unicode Transformations
- [yaytext.com](https://yaytext.com/) 
- [Remove accents from text | Boxentriq](https://www.boxentriq.com/code-breaking/remove-accents)
- [Site Unreachable](https://lingojam.com/TextToEmojiLetters)

## Sources
- [[Guide to Swift Strings]]

# Footnotes

[^1]: Don't forget that each grapheme might be represented by **more than one** code point