---
publish: true
---
## When not to use Sendable
- [Non-Sendable types are cool too you know | massicotte.org](https://massicotte.org/non-sendable) 

## When not to use Sendable
- [Non-Sendable types are cool too you know | massicotte.org](https://massicotte.org/non-sendable)

- [Gwendal Roué on deciding if a protocol should be Sendable or not](https://hachyderm.io/@groue/112343128647886781)

>The first thing I did was lean heavily into making anything and everything `Sendable`. In hindsight, that was a bit of a mistake. Not disastrous, but I made a lot more work for myself. Not everything _needs_ to be sendable. Taking advantage of isolation, it is fine – sometimes notably more efficient and easier to reason about – to have and use non-sendable types within an isolation domain.
>- [Designing a Swift library with data-race safety](https://rhonabwy.com/2024/04/29/designing-a-swift-library-with-data-race-safety/)


## Deep Dives
- [Deep Dive into Sendable: Tim Condon](https://www.youtube.com/watch?v=-fvSx_tpZUw) 