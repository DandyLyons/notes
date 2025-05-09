---
type:
  - series
title: Severance
englishTitle: Severance
year: 2022–
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt11280740/
id: tt11280740
plot: Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.
genres:
  - Drama
  - Mystery
  - Sci-Fi
writer:
  - Dan Erickson
studio: 
episodes: 0
duration: N/A
onlineRating: 8.7
actors:
  - Adam Scott
  - Zach Cherry
  - Britt Lower
image: https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices:
  - "[[Apple TV+]]"
airing: true
airedFrom: "'2022-02-18'"
airedTo: unknown
watched: true
lastWatched: ""
personalRating: 10
tags:
  - mediaDB/tv/series
---
`$= '![Image|360](' + dv.current().image + ')'`

# `$= dv.current().title`

```dataviewjs
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:watched]\` watched \n last watched on ${dv.current().lastWatched || '---'}`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:watched]\` not yet watched`);
}
```

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Genres**:
```dataviewjs
dv.current().genres.length === 0 ? dv.span(' - none') : dv.list(dv.current().genres)
```

```dataviewjs
let text = '';

if (!dv.current().released) {
	text += '**Not released**\n';
	if (dv.current().airedFrom) {
		text += 'The series will release on ' + dv.current().release_date + '.';
	} else {
		text += 'The series is not released yet.';
	}
	
} else if (dv.current().airing) {
	text += '**Not finished**\n';
	text += 'The series is not fully released yet.';
}

if (text) {
	dv.paragraph(text);
}
```

**Type**: `$= dv.current().type`
**Online Rating**: `$= dv.current().onlineRating`
**Episodes**: `$= dv.current().episodes`
**Duration**:  `$= dv.current().duration`
**Aired from**: `$= dv.current().airedFrom`
**Aired until**: `$= dv.current().airedTo`
**Studios**: `$= dv.current().studios.join(', ')`

## Behind the Scenes
- [Ben Stiller & Adam Scott Break Down 'Severance' Season 2 Opening Scene \| Vanity Fair - YouTube](https://www.youtube.com/watch?v=VOeFQ2ghR3U)
## Extras
### Music
- [Severance — Theme Song: 8 Hour Work Day Innie Mix \| Apple TV+ - YouTube](https://www.youtube.com/watch?v=Pc4LptRucbM) 
- [Severance — Music To Refine To feat. ODESZA \| Apple TV+ - YouTube](https://www.youtube.com/watch?v=JRnDYB28bL8) 