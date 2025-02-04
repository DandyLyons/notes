
| Template | [[meeting TEMPLATE]]                                                                                                                                                                                                                                                                                                       |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Views    | [Table](obsidian://adv-uri?vault=content&commandid=obsidian-projects%3Ashow%3Aa17cfb85-1b80-4d05-89a0-44a743de6c1a%3A2fb9a69b-0677-4836-b42a-6273ecf3ee45), [Calendar](obsidian://adv-uri?vault=content&commandid=obsidian-projects%3Ashow%3Aa17cfb85-1b80-4d05-89a0-44a743de6c1a%3Afcb073f0-a142-4434-bfbb-bb4d3d22bdc6)  |
| Actions  | [Create a new meeting note](obsidian://adv-uri?vault=content&commandid=quickadd%3Achoice%3Ad9b36435-ee4a-4a1c-9cb5-e3f49a0bbaf2)                                                                                                                                                                                           |


```dataview
TABLE date, people, summary
FROM "gitignore/Meetings"
WHERE file.name != "Meetings"
LIMIT 1000
```
# Footnotes

[^1]: Projects plugin