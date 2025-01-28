---
title: Everything about RANDOMNESS in Godot
source: https://www.youtube.com/watch?v=lckgjXM3CeE
media_link: https://www.youtube.com/watch?v=lckgjXM3CeE
author:
  - "[[MrElipteach]]"
contentPublished: 2022-11-20
noteCreated: 2025-01-27
description: In this video I go over different ways of getting random number but most importantly, how to use these techniques in game!🎓 Learn how to make JUICY games 👇https://www.udemy.com/course/learn-how-t
tags:
  - clippings
  - video
takeaways: 
subjects:
  - "[[RandomNumberGenerator|RandomNumberGenerator in Godot]]"
  -  
Status: 🙏🏼 Want To Read
publish: true
Youtube_Duration: 11:33
---
![](https://www.youtube.com/watch?v=lckgjXM3CeE&t=231s)

## Description
In this video I go over different ways of getting random number but most importantly, how to use these techniques in game!

🎓 Learn how to make JUICY games 👇
https://www.udemy.com/course/learn-how-to-make-a-game-juicy-in-godot-4/?referralCode=1652C74B848551E05DAE

USEFUL STUFF
~~~~~~~~~~~~
🔗 Video about noise
https://www.youtube.com/watch?v=sChQCdbLdHE
🔗 RandomNumberGenerator
https://docs.godotengine.org/en/stable/classes/class_randomnumbergenerator.html
🔗 Random number generation tutorial
https://docs.godotengine.org/en/stable/tutorials/math/random_number_generation.html
🔗 Random element with weighted probability
https://github.com/godotengine/godot-proposals/issues/3948
🔗 Value vs reference
https://www.bogotobogo.com/cplusplus/valuevsreference.php

👤 SOCIALS
~~~~~~~~~~~~
💰 One time donation: https://ko-fi.com/mreliptik
💰 Support me on Patreon: https://patreon.com/MrEliptik
🟣 Join us on Discord: https://discord.gg/83nFRPTP6t
🔴 Twitch: https://twitch.tv/mreliptik
🐤 Twitter: https://twitter.com/mreliptik
🎥 TikTok: https://www.tiktok.com/@mreliptik
🖼️ Instagram: https://www.instagram.com/mreliptik
🔗All links: https://bento.me/mreliptik


## My Notes

### [00:00](https://www.youtube.com/watch?v=lckgjXM3CeE&t=0s) - Intro
### [00:32](https://www.youtube.com/watch?v=lckgjXM3CeE&t=32s) - TIP 1: how to get random numbers?
### [01:16](https://www.youtube.com/watch?v=lckgjXM3CeE&t=76s) - TIP 2: random numbers in a range
### [03:51](https://www.youtube.com/watch?v=lckgjXM3CeE&t=231s) - TIP 3: weighted distribution 
```gdscript
func _on_WeightedBtn_pressed() -> MyObject:
	var result = randf()
	if result < 0.1:
		return objects[0]
	elif result < 0.7:
		return objects[1]
	else: 
		return objects[2]
```

A better solution would be to use a dictionary, but this requires a more complex algorithm. 


### [05:12](https://www.youtube.com/watch?v=lckgjXM3CeE&t=312s) - TIP 4: RandomNumberGenerator class
### [07:33](https://www.youtube.com/watch?v=lckgjXM3CeE&t=453s) - TIP 5: better random
### [08:53](https://www.youtube.com/watch?v=lckgjXM3CeE&t=533s) - TIP 6: NOISE
## Transcript

