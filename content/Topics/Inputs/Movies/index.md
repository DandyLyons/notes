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

| title                             | year | director                                                  | writer                                                                                                                                                                                             |
| --------------------------------- | ---- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Citizen Kane                      | 1941 | <ul><li>Orson Welles</li></ul>                            | <ul><li>Herman J. Mankiewicz</li><li>Orson Welles</li><li>John Houseman</li></ul>                                                                                                                  |
| Dawn of the Planet of the Apes    | 2014 | <ul><li>Matt Reeves</li></ul>                             | <ul><li>Mark Bomback</li><li>Rick Jaffa</li><li>Amanda Silver</li></ul>                                                                                                                            |
| Everything Everywhere All at Once | 2022 | <ul><li>Daniel Kwan</li><li>Daniel Scheinert</li></ul>    | <ul><li>Daniel Kwan</li><li>Daniel Scheinert</li></ul>                                                                                                                                             |
| Get Out                           | 2017 | <ul><li>Jordan Peele</li></ul>                            | <ul><li>Jordan Peele</li></ul>                                                                                                                                                                     |
| The Big Short                     | 2015 | <ul><li>Adam McKay</li></ul>                              | <ul><li>[[Charles Randolph\|Charles Randolph]]</li><li>[[Adam McKay\|Adam McKay]]</li><li>[[Topics/People/Michael Lewis.md\|Michael Lewis]]</li></ul>                                           |
| The Blind Side                    | 2009 | <ul><li>[[John Lee Hancock\|John Lee Hancock]]</li></ul> | <ul><li>[[John Lee Hancock\|John Lee Hancock]]</li><li>[[Topics/People/Michael Lewis.md\|Michael Lewis]]</li></ul>                                                                               |
| The Dark Knight                   | 2008 | <ul><li>Christopher Nolan</li></ul>                       | <ul><li>Jonathan Nolan</li><li>Christopher Nolan</li><li>David S. Goyer</li></ul>                                                                                                                  |
| Moneyball                         | 2011 | <ul><li>Bennett Miller</li></ul>                          | <ul><li>[[Steven Zaillian\|Steven Zaillian]]</li><li>[[Aaron Sorkin\|Aaron Sorkin]]</li><li>[[Stan Chervin\|Stan Chervin]]</li><li>[[Topics/People/Michael Lewis.md\|Michael Lewis]]</li></ul> |

%% DATAVIEW_PUBLISHER: end %%