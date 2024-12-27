---
publish: true
---

| GitHub       | https://github.com/HananoshikaYomaru/obsidian-run |
| ------------ | ------------------------------------------------- |
| Docs         |                                                   |
| Obsidian URL | obsidian://show-plugin?id=run                     |
## Use Cases
### Quartz
I use [[Topics/Software Development/Web Development/Static Site Generation/Quartz/index|Quartz]] as a static site generator to generate this site from my Obsidian vault. It's fantastic, but one of the drawbacks is that it doesn't have direct support for [[Dataview]]. To get around this limitation I use *Run*. It allows me to run javascript within my notes. So the way it works is: 
1. Run runs the javascript
2. which calls Dataview
3. which is rendered inline in the note so that
4. now Quartz doesn't have to render Dataview because it has already been rendered beforehand. 

### Dataview

### Note Properties
The syntax looks like this: 
`%% run start file.properties.myProperty` 

%% You can use this template [[Run -> File property TEMPLATE]] %%