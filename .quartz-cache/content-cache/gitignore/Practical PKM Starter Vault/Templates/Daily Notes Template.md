
<div data-timeline="{{date:DDD}}"></div>

![Image](https://biblia.com/verseoftheday/image/{{date:YYYY-MM-DD}})

```todoist
{
"name": "Due Today",
"filter": "(today | overdue)"
}
```

### Memento Mori
```dataviewjs
const today = dv.date('{{date:YYYY-MM-DD}}')
const endOfYear = {
year: today.year,
month: 12,
day: 31
}

const lifespan = { year: 80 }
const birthday = DateTime.fromObject({
year: 1985,
month: 1,
day: 1
});

const deathday = birthday.plus(lifespan)
function progress(type) {
let value;
switch(type) {
case "lifespan":
value = (today.year - birthday.year) / lifespan.year * 100;
break;
}

return `<progress value="${parseInt(value)}" max="100"></progress> &nbsp;&nbsp; ${parseInt(value)} %`

}

dv.span(`${progress("lifespan")}
`)

```

### Habits
- [ ] Writing
- [ ] Reading
- [ ] Planning

### Daily Questions

Did I do my best to...

- Grow spiritually? #dailyquestions/spiritual:
- Love my wife? #dailyquestions/wife:
- Love my kids? #dailyquestions/kids:
- Be a good friend? #dailyquestions/friend:
- Learn something? #dailyquestions/learn:
- Create something? #dailyquestions/create:
- Exercise? #dailyquestions/exercise:

### Wins

### Journal Entries

### Gratitude

### Links
