---
publish: true
---
## Workflows
### Filtering

```gdscript
var childNodes: Array[Node] = get_children()
# 👇🏼 notice how we are NOT assigning a type to childCells. 
# When I add a type here, I get a runtime crash. 
# I have not figured out how to get GDScripts's type system to realize 
# the underlying type. 
var childCells = childNodes.filter(func(node):
# filter out all the objects that are not of type GDGridBoardCell
	return node is GDGridBoardCell 
) 
```
