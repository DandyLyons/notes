---
publish: true
title: Steganography
aliases:
  - Steganography
---
Steganography is the close sibling to [[Topics/Software Development/Cryptography/index|Cryptography]]. Whereas cryptography attempts to make a message unintelligible unless you know the correct method (the key) to decrypt the message. Steganography on the other hand doesn't render the message unintelligible. Instead, it hides the message, so that it cannot be seen unless one knows how to unhide it, but once the message is unhidden it is intelligible (i.e. unencrypted). 

Steganography is an example of [Security through obscurity](https://en.wikipedia.org/wiki/Security_through_obscurity) . 

![[Screenshot 2024-04-30 at 1.59.32 PM.png]]
## Terminology
- hiddentext: the message or payload that we want to communicate secretly
- **Cover-__**: this is the innocuous thing that is hiding the payload
	- e.g. a covertext, cover-image
	- Note: the covertext can refer to the thing both before and after the message has been hidden inside of it. For example, you could hide the message "hello" inside a JPEG image of a dog. The image of the dog is the *cover*. 
- **Stego-__**: This is the the cover specifically *after* the hiddentext has been embedded into it. 
	- a.k.a. the Carrier, 
	- **Payload**: the data that is covertly communicated.
	- also called: a *message*
- **Stego-key**: sometimes a steganography may require a secret "key" in order to unhide the message, much like a cryptographic key.
- **Carrier**: the signal, stream, or data file that hides the payload
	- also called a *cover*
- **Channel**: the <u>type of input</u>, such as JPEG image
- **encoding density**: the proportion of bytes, samples or other signal elements modified to encode the payload
	- typically expressed as a number between 0 and 1

## Steganalysis
Steganography is to steganalysis, as cryptography is to cryptanalysis. steganalysis is the study of messages that are hidden using steganography. The history of stenography, like cryptography, is an ongoing arms race between stenography and steganalysis. As one improves, the other one improves in turn. Therefore, there are certain techniques which are no longer secure since they can be easily forwarded by basic steganalysis techniques. ([Steganalysis - Wikipedia](https://en.wikipedia.org/wiki/Steganalysis))

## Tools
- 


---
## Sources
- [Steganography - Wikipedia](https://en.wikipedia.org/wiki/Steganography)
- [What is Steganography? A Complete Guide with Types & Examples](https://www.simplilearn.com/what-is-steganography-article#:~:text=The%20various%20terms%20used%20to,standard%20text%20or%20an%20image.)
- ![Steganography Tutorial | How To Hide Text Inside The Image | Cybersecurity Training | Edureka - YouTube](https://www.youtube.com/watch?v=xepNoHgNj0w) 