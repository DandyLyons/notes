---
title:
author:
contentPublished:
noteCreated: 2024-11-25
tags:
  - "clippings"
  - "article"
description: "a Kajabi Site 2147560001 video"
takeaways:
---
## Highlights
## Links & Resources For This Video

Free character controller: [https://assetstore.unity.com/packages/3d/characters/modular-first-person-controller-189884](https://assetstore.unity.com/packages/3d/characters/modular-first-person-controller-189884)

Get free sounds: [https://freesound.org/](https://freesound.org/)

Edit sounds free: [https://www.audacityteam.org/download/](https://www.audacityteam.org/download/)

Get free music: [https://newgrounds.com/](https://newgrounds.com/)

  
\-- Voice Over Trigger Script--

\*Be sure you name it VoiceOverTrigger.cs\* 👇

using System.Collections;  
using System.Collections.Generic;  
using UnityEngine;

public class VoiceOverTrigger : MonoBehaviour

{

    public AudioSource audioSource;  
    public AudioClip audioClip;

    private void OnTriggerEnter(Collider other)

    {

        if(other.gameObject.name == "FirstPersonController")

        {  
            audioSource.Stop();  
            audioSource.clip = audioClip;  
            audioSource.Play();  
        }

    }

}

## My Notes