---
publish: true
---
---
Moment.js provides a robust toolkit for parsing, manipulating, and formatting dates in JavaScript. Below is a structured reference guide covering essential syntax and common use cases.


## **Formatting (Cheat Sheet)**

Convert dates to strings with `.format()`:

| Token  | Example | Description                  |
| :----- | :------ | :--------------------------- |
| `YYYY` | 2025    | 4-digit year                 |
| `MM`   | 02      | 2-digit month (01-12)        |
| `MMM`  | Feb     | Abbreviated month name       |
| `DD`   | 14      | 2-digit day of month (01-31) |
| `dddd` | Friday  | Full weekday name            |
| `HH`   | 18      | 24-hour format (00-23)       |
| `mm`   | 35      | Minutes (00-59)              |
| `ss`   | 45      | Seconds (00-59)              |
| `A`    | PM      | AM/PM                        |
| `Z`    | -07:00  | Timezone offset              |

**Examples**:

```javascript
moment().format('YYYY-MM-DD'); // "2025-02-14" [^3]
moment().format('dddd, MMMM Do YYYY'); // "Friday, February 14th 2025" [^3]
moment().toISOString(); // ISO 8601 format [^3]
```


## **Core Operations**

### **Parsing Dates**

Create moment objects from various inputs:

```javascript
moment(); // Current datetime [^1]
moment("2025-02-14"); // ISO 8601 string [^1][^4]
moment([2025, 1, 14]); // Array [year, month (0-11), day] [^1]
moment(1740600000); // Unix timestamp (milliseconds) [^1]
moment(new Date()); // JavaScript Date object [^1]
```


### **Manipulation Methods**

Modify dates using chainable methods:

```javascript
moment().add(7, 'days'); // Add 7 days [^4][^5]
moment().subtract(3, 'months'); // Subtract 3 months [^4]
moment().startOf('day'); // Set to 00:00:00 [^1]
moment().endOf('month'); // Set to last day of month [^1]
```

---


---

## **Date Queries**

Compare or validate dates:

```javascript
moment('2025-02-14').isBefore('2025-03-01'); // true [^1]
moment().isSame('2025-02-14', 'day'); // true if same day [^1]
moment().isLeapYear(); // Check for leap year [^1]
moment('invalid').isValid(); // Validate date [^4]
