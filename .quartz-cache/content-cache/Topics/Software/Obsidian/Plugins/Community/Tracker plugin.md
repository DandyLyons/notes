---
publish: true
title: Tracker
---

| GitHub        | https://github.com/pyrochlore/obsidian-tracker                                                                                                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Docs          |                                                                                                                                                                 |
| Obsidian URL  | [🔗](obsidian://show-plugin?id=obsidian-tracker)                                                                                                                |
| Roadmap       | [obsidian-tracker/docs/RoadMap.md at master · pyrochlore/obsidian-tracker · GitHub](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/RoadMap.md) |
| Release Notes | [Release Notes](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/ReleaseNotes.md)                                                                |
| FAQ           | [Frequently Asked Questions](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Questions.md)                                                      |

- **Features**: [obsidian-tracker/docs/Examples.md at master · pyrochlore/obsidian-tracker · GitHub](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Examples.md) 

## More Details You May Want to Know
From [here:](https://github.com/pyrochlore/obsidian-tracker#more-details-you-may-want-to-know)
- [Concepts](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Concepts.md): Explain how this plugin works and what to setup
    - [Target Evaluation](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/TargetEvaluation.md)
    - [Input Parameters](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/InputParameters.md)
    - [Expressions](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Expressions.md)
- [Examples](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Examples.md)
- [Plugin Settings](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Settings.md)
- [Road Map](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/RoadMap.md)
## Tutorials
- [[How to track habits in Obsidian (includes Canvas dashboard setup)]]
- [[TOP 3 Obsidian Habit Trackers and how to set them up easily]]
- [[Building a USEFUL Habit Tracker in Obsidian]] 
## Table of Use Cases

From [🔗](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Examples.md#table-of-use-cases)

Check where (Location) and what (Target to Track) is your target and find the settings (Tracker) you need.

|Location|Target to Track|Tracker|Get (O)ccurrences/(V)alues|
|:--|:--|:--|:-:|
|content|#meditation|searchType: tag  <br>searchTarget: meditation|O|
|frontmatter|---  <br>tags: meditation  <br>---|searchType: tag  <br>searchTarget: meditation|O|
|content|#weight:60.5kg|searchType: tag  <br>searchTarget: weight|V|
|content|#finance/bank1/transfer:100USD|searchType: tag  <br>searchTarget: finance/bank1/transfer|V|
|content|#finance/bank1/transfer:100USD  <br>#finance/bank1/income:80USD  <br>#finance/bank1/outcome:-120USD|searchType: tag  <br>searchTarget: finance/bank1|V|
|content|#blood-pressure:180/120|searchType: tag  <br>searchTarget: blood-pressure[0], blood-pressure[1]|V|
|content|dvTarget:: 20.5|searchType: dvField  <br>searchTarget: dvTarget|V|
|content|dvTarget:: 20.5/30.5|searchType: dvField  <br>searchTarget: dvTarget[0], dvTarget[1]|V|
|content|dvTarget:: 20.5, 30.5|searchType: dvField  <br>searchTarget: dvTarget[0], dvTarget[1]  <br>separator: 'comma'|V|
|frontmatter|---  <br>mood: 10  <br>---|searchType: frontmatter  <br>searchTarget: mood|V|
|frontmatter|---  <br>bp: 184.4/118.8  <br>---|searchType: frontmatter  <br>searchTarget: bp[0], bp[1]|V|
|frontmatter|---  <br>bp: 184.4, 118.8  <br>---|searchType: frontmatter  <br>searchTarget: bp[0], bp[1]  <br>separator: 'comma'|V|
|frontmatter|---  <br>bp: [184.4, 118.8]  <br>---|searchType: frontmatter  <br>searchTarget: bp[0], bp[1]|V|
|frontmatter|---  <br>clock-in: 10:45  <br>clock-out: 20:51  <br>---|searchType: frontmatter  <br>searchTarget: clock-in, clock-out|V|
|content|[[journal]]|searchType: wiki  <br>searchTarget: journal|O|
|content|⭐|searchType: text  <br>searchTarget: ⭐|O|
|content|love|searchType: text  <br>searchTarget: love|O|
|content|[test@gmail.com](mailto:test@gmail.com)  <br>[test@hotmail.com](mailto:test@hotmail.com)|searchType: text  <br>searchTarget: '.+\@.+\..+'|O|
|content|#weightlifting: 50|searchType: text  <br>searchTarget: 'weightlifting: (?<value>[\-]?[0-9]+[\.][0-9]+\|[\-]?[0-9]+)'|V|
|content|I walked 10000 steps today.|searchType: text  <br>searchTarget: 'walked\s+(?<value>[0-9]+)\s+steps'|V|
|content|myvalues 1/2/3|searchType: text  <br>searchTarget: 'myvalues\s+(?<value>[0-9]+)/([0-9]+)/([0-9]+), myvalues\s+([0-9]+)/(?<value>[0-9]+)/([0-9]+), myvalues\s+([0-9]+)/([0-9]+)/(?<value>[0-9]+)'|V|
|table content|{ a table filled with dates and values }  <br>[example table](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/data/Tables.md)|searchType: table  <br>searchTarget: filePath[0][0], filePath[0][1]|V|
|table content|{ a table filled with dates and values }  <br>[example table](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/data/Tables.md)|searchType: table  <br>searchTarget: filePath[1][0], filePath[1][1][0], filePath[1][1][1]|V|
|file meta|meta data from files  <br>(size, cDate, mDate, numWords, numChars, numSentences)|searchType: fileMeta  <br>searchTarget: size|V|
|content|- [x] Say love  <br>- [ ] Say love|searchType:task  <br>searchTarget: Say love|O|
|content|- [x] Say love|searchType:task.done  <br>searchTarget: Say love|O|
|content|- [ ] Say love|searchType: task.notdone  <br>searchTarget: Say love|O|

## Full examples

[🔗](https://github.com/pyrochlore/obsidian-tracker/blob/master/docs/Examples.md#full-examples)

Full tracker code blocks can be found in folder [examples](https://github.com/pyrochlore/obsidian-tracker/tree/master/examples) and the corresponding notes (data) can be found under folder '[diary](https://github.com/pyrochlore/obsidian-tracker/tree/master/examples/diary)' and '[data](https://github.com/pyrochlore/obsidian-tracker/tree/master/examples/data)'.

List of all examples

- [Bloodpressure Tracker](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/BloodPressureTracker.md)
- [Error Messages](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/ErrorMessages.md)
- [Finance Tracker](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/FinanceTracker.md)
- [Habit Tracker](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/HabitTracker.md)
- [Star Tracker](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/StarTracker.md)
- [Bar Chart](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestBarChart.md)
- [Axis Interval and Format](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestAxisIntervalAndFormat.md)
- [Bullet Chart](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestBullet.md)
- [Calendar](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestCalendar.md)
- [Date Formats](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestDateFormats.md)
- [Dataview Inline Field](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestDvField.md)
- [Expression](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestExpression.md)
- [File Meta](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestFileMeta.md)
- [Legends](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestLegends.md)
- [Multiple Targets / Multiple Values](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestMultipleTargetsMultipleValues.md)
- [Pie Chart](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestPieChart.md)
- [Scaling and Positioning](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestScalingAndPositioning.md)
- [Specified Files](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestSpecifiedFiles.md)
- [Summary](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestSummary.md)
- [Table](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestTable.md)
- [Task](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestTask.md)
- [Text-value Map/Mood Tracker](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestTextValueMap.md)
- [Time Values](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestTimeValues.md)
- [Word Counting](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestWordCounting.md)
- [X Dataset](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestXDataset.md)
- [Regular Expression](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/TestRegex.md)
- [Weight Tracker](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/WeightTracker.md)
- [Wiki](https://github.com/pyrochlore/obsidian-tracker/blob/master/examples/WikiTracker.md)