---
publish: true
---
Here's a pattern I'm trying for [[type casting]] in [[Topics/Software Development/Programming Languages/GDScript/index|GDScript]]. I'm not sure if it's the best pattern. 

## Option one
```gdscript
if mySuperType is SubType:
    var mySubType := mySuperType as SubType
    doStuff(mySubType)
```

