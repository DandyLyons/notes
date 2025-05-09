
> [!disambiguation]- Disambiguation
> [[Contacts]] is about people that I am in contact with directly. 
>- [[Topics/People/index|People]] is about people that I may know **about** but probably am not in contact with directly. 

| Template | [[contact TEMPLATE]]                                                                                                                                                                                                                                                                                                                                |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Views    | [Table](obsidian://adv-uri?vault=content&commandid=obsidian-projects%3Ashow%3A02f316cf-007b-4c8a-8c67-d4d3b9f65329%3A34ef1342-8134-4165-932f-489b97999ec5), [🗓️ Last Talked](obsidian://adv-uri?vault=content&commandid=obsidian-projects%3Ashow%3A02f316cf-007b-4c8a-8c67-d4d3b9f65329%3A98beb881-c5c9-4224-a3c2-0afd5fdb617d), 🗓️ Next Birthday |
| Actions  |                                                                                                                                                                                                                                                                                                                                                     |


```dataview
TABLE nextBirthday, last-communication
FROM "gitignore/Contacts"
LIMIT 1000
WHERE file.name != "Contacts"
```