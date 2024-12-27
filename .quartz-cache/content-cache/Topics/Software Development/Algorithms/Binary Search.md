---
publish: true
---
## Algorithm
See: [Swift: Binary Search Algorithm (iOS Interview Prep) 2022 - YouTube](https://www.youtube.com/watch?v=GNNzTWedUrs) 
- Given: 
	- 1. array of values
	- 2. a target value
- Find: the index for the target value

- Precondition: The values must be presorted


### Pseudo code
1. Find the midpoint value 
2. `left` = start index
3. `right` = end index
4. Loop:
	1. `middleIndex` = midpoint between `left` and `right`
	2. lookup `middleValue` at `middleIndex`
	3. If: `middleValue` value > `target`: 
		1. then: decrement `right`
	4. else if: `middleValue` < `target`
		1. then: increment `left`
	5. else if `middleValue` == `target`
		1. then: return the index 