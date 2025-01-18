---
publish: true
---
Equivalent to `switch` in many other languages. 

## Docs
See [match (docs)](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html#match)

## Difference from `switch` in other languages
#### Crash-course for people who are familiar with switch statements[](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html#crash-course-for-people-who-are-familiar-with-switch-statements "Link to this heading")

1. Replace `switch` with `match`.
2. Remove `case`.
3. Remove any `break`s.
4. Change `default` to a single underscore.
## Syntax
```gdscript
match <test value>:
	<pattern(s)>:
		<block>
	<pattern(s)> when <pattern guard>:
		<block>
	<...>
```




