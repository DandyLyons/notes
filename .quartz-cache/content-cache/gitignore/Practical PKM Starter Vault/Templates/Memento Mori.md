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