---
publish: true
aliases:
  - Books
title: Books
---
%%
```dataview
TABLE status, authors
FROM "Topics/Inputs/Books"
SORT status DESC
WHERE file.name != "index"
```

%%