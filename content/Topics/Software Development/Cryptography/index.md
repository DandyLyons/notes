---
publish: true
aliases:
  - Cryptography
date: 
title: Cryptography
---

## Overview 
Cryptography is the practice of securing information and communications by converting plain text into coded or encrypted text that can only be accessed by the intended recipient. The term "cryptography" comes from the Greek words "kryptos" meaning "hidden" and "graphein" meaning "to write". Cryptography uses mathematical concepts and algorithms to protect data privacy, enable secure transactions, and prevent unauthorized access.

## Terminology
- **Plaintext**: the message before it has been encrypted
- **Ciphertext**: the message **after** it has been encrypted
- **Key**: the **secret** to decrypting the message
- **Encrypt**: Converting from plaintext to ciphertext
- **Decrypt**: Converting form ciphertext to plaintext

## Types of Cryptography
>Cryptography itself can be divided into two branches, known as **transposition** and **substitution**. In transposition, the letters of the message are simply rearranged, effectively generating an anagram. ... The alternative to transposition is substitution.
>- [[The Code Book]] by Simon Singh

The main techniques used in cryptography include:
### Symmetric Key Cryptography
This uses a single shared key between the sender and receiver to encrypt and decrypt messages. It is faster and simpler but requires securely exchanging the key.
### Hash Functions
[[Hashing]] functions convert plain text into a fixed-length hash value without using a key. This makes it impossible to recover the original plain text.
### Asymmetric Key Cryptography
This uses a pair of keys - a public key for encryption and a private key for decryption. The public key can be shared widely while the private key is kept secret by the recipient.


### Assessing the Security Level
![](https://pbs.twimg.com/media/GKWcxtYXYAAzk8X?format=jpg&name=900x900)
## Applications of Cryptography
Cryptography has many important applications, including:
- Securing computer passwords and login credentials
- Enabling secure digital currencies and transactions
- Providing secure web browsing and communication
- Enabling electronic signatures and authentication
- Protecting the integrity of cryptocurrencies

## Advantages of Cryptography
The key advantages of cryptography include:
- Controlling access to sensitive information
- Enabling secure communication and transactions
- Protecting against various types of cyber attacks
- Helping organizations comply with data privacy regulations

Overall, cryptography is a critical tool for ensuring the confidentiality, integrity, and security of digital information in the modern world.

## Cryptography Concepts
- [[Secret Key Cryptography]]
- [[Public Key Cryptography]]
- [[Salt]]
- [[HMAC]] 
- Plaintext: An unencrypted message
- Ciphertext: An encrypted message
- [[Topics/Software Development/Cryptography/Ciphers/index|Ciphers]]: The algorithm that was used to encrypt and/or decrypt
- [[Frequency Analysis]] 
- [[Cryptanalysis]]: The science of breaking encryption
- [[Homomorphic encryption]]: 
	- a form of encryption that allows you to perform mutations on the data while it is still encrypted. 
	- perform work directly on the encrypted data
	- the decrypted data can only be viewed with the private key

### Other related concepts
- [Obfuscation - Wikipedia](https://en.wikipedia.org/wiki/Obfuscation) 
- [Security through obscurity - Wikipedia](https://en.wikipedia.org/wiki/Security_through_obscurity) 


## Programming Libraries
- [swift-crypto](https://swiftpackageindex.com/apple/swift-crypto) 


## Further Reading and Resources
- [About the Site | Cryptography | Crypto-IT](https://www.crypto-it.net/eng/about/index.html)
	- Super helpful resource with developer's understanding of cryptography
- [[The Code Book]]
- [Cryptography and its Types](https://www.geeksforgeeks.org/cryptography-and-its-types/ "Cryptography and its Types") 
- [The science of secrecy - YouTube](https://www.youtube.com/watch?v=Z_mlyruYQ24) talk by [[Simon Singh]] 
- [Secret Codes: A History of Cryptography (Part 1) - YouTube](https://www.youtube.com/watch?v=9pp9YpginNg) 
- [7 Cryptography Concepts EVERY Developer Should Know - YouTube](https://www.youtube.com/watch?v=NuyzuNBFWxQ) by [[Fireship]] 
- [Cryptography Concepts - SY0-601 CompTIA Security+ : 2.8 - YouTube](https://www.youtube.com/watch?v=A6HNd1EGfIc)
- _**Polygraphia**_ is a  [cryptographic](https://en.m.wikipedia.org/wiki/Cryptography "Cryptography") work written by [Johannes Trithemius](https://en.m.wikipedia.org/wiki/Johannes_Trithemius "Johannes Trithemius") published in 1518 dedicated to the art of [steganography](https://en.m.wikipedia.org/wiki/Steganography "Steganography").
