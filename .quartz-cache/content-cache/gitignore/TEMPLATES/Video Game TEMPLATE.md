---
publish: true
title: {{name}}
releaseDate: {{released}}
Developer: 
Publisher: 
backgroundImage: {{background_image}}
genres: 
esrb_rating: {{esrb_rating}}
est_playtime: {{playtime}}
url: {{website}}
slug_on_rawg: {{slug}}
---
![{{name}}]({{background_image}})

Genres: {{genres}}
Release Date: {{released}}
Publishers: {{publishers}}
Developers: {{developers}}

%% DATAVIEW_PUBLISHER: start
```dataview
TABLE title, releaseDate, Developer.name, Publisher.name, genres, gamingPlatforms
WHERE file.path = this.file.path
```
%%

| File                                                                | title                                 | releaseDate                               | Developer.name | Publisher.name | genres | gamingPlatforms |
| ------------------------------------------------------------------- | ------------------------------------- | ----------------------------------------- | -------------- | -------------- | ------ | --------------- |
| [[gitignore/TEMPLATES/Video Game TEMPLATE.md\|Video Game TEMPLATE]] | <ul><li><b>{ name }</b>: \-</li></ul> | <ul><li><b>{ released }</b>: \-</li></ul> | \-             | \-             | \-     | \-              |

%% DATAVIEW_PUBLISHER: end %%
