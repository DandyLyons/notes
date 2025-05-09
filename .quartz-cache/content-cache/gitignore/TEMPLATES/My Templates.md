---
publish: false
---

```dataview
LIST
FROM ""
WHERE contains(file.name, "TEMPLATE")
SORT file.name
LIMIT 1000
```
