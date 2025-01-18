---
date: 2025-01-13
---

## Not Done 
```tasks
scheduled before today
group by scheduled
not done
# explain
```

## In the Next 7 Days
```tasks
due before in 7 days
group by done 
# explain
```



## Tasks
### Overdue
```tasks
not done
due before {{date:YYYY-MM-DD}}
```

### Due today
```tasks
not done
due on {{date:YYYY-MM-DD}}
```

### Due in the next two weeks
```tasks
not done
due after {{date:YYYY-MM-DD}}
due before {{date+14d:YYYY-MM-DD}}
```

### No due date
```tasks
not done
no due date
```

### Done today
```tasks
done on {{date:YYYY-MM-DD}}
```