---
publish: true
date: 2024-04-05
aliases:
  - Movies
title: Movies
---
These are movies that I find interesting and want to collect my thoughts on for one reason or another. 


%% DATAVIEW_PUBLISHER: start
```dataview
TABLE WITHOUT ID title, year, director, writer
FROM "Topics/Inputs/Movies"
WHERE file.name != "index"
	AND title != null
```
%%

| title                          |
| ------------------------------ |
| Dawn of the Planet of the Apes |
| The Dark Knight                |
| Citizen Kane                   |

%% DATAVIEW_PUBLISHER: end %%