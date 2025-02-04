---
category: core features
tags: 
 - notes
---
Awhile back, there was a plugin for Obsidian called _Admonitions_ that allowed you to add colorful callout blocks in your Obsidian notes. But as of version 0.14.0, these are now baked directly into Obsidian.

I use these all the time to break up longer notes and make them more colorful. For example, here's a screenshot of my course notes from [Ali Abdaal's Part-Time YouTuber Academy](https://ptya.samcart.com/referral/IKjWOptt/HM7SxVjPbTlTjy18).

![[callouts.png]]

To add these to your notes, simply use the following formatting:

```
> [!INFO] Callout title
> Text to be included in the callout
```

The **>** character at the beginning of the line denotes the callout formatting, but as you can see in the screenshot above there are lots of different types:

- note
- abstract, summary, tldr
- info, todo
- tip, hint, important
- success, check, done
- question, help, faq
- warning, caution, attention
- failure, fail, missing
- danger, error
- bug
- example
- quote, cite

If you want to see what all of these look like, here's a reference note with all of the codes: [[Callout Examples]]

To use a different callout type, just switch `[!INFO]` to whatever callout type you'd like (i.e. `[!SUCCESS]` will create the green check mark example above).

All callouts support Markdown formatting, so you can add styling and even links to your callouts if you'd like.

You can also make your callouts foldable by adding either a **+** or **-** immediately after the `[!INFO]` (i.e. `[!INFO]+` if you want it expanded by default, or `[!INFO]-` if you want it folded by default.