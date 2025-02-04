---
publish: true
date: 
aliases: 
title:
---
![[Screenshot 2024-04-06 at 2.13.19 PM.png]] 

This cipher encrypts binary data. The algorithm is simple. Just use [[XOR]]. 
This cipher has [[perfect secrecy]], meaning that a cipher text only attack is impossible. 

## Pros
The One Time Pad is the gold standard for perfect secrecy. However, it 

## Cons
Extremely long keys. The Key has to be as long as the message. This renders the encryption basically unusable because, you must first transmit a key that is as long as the message. That key must also be encrypted, thus defeating the purpose. It's very difficult to use in practice. 

Since OTP has perfect secrecy, it cannot be broken by Cipher only attacks. But this isn't the only type of attack. There are other attack types that it is vulnerable to. 

## Key
- Given m and c, It is simple to compute the key (k). It is m XOR c. 

## How to Use 
![The Encryption That Can't Be Cracked: OTP - YouTube](https://www.youtube.com/watch?v=R5LqOqaBYG8&t=183s)

## Sources: 
- [[Cryptography I (Stanford Course)]]: Week 1: [Information Theoretic Security and The One Time Pad - Course overview and stream ciphers | Coursera](https://www.coursera.org/learn/crypto/lecture/cbnX1/information-theoretic-security-and-the-one-time-pad) at 5:55. 
- [PDF: THE COMPLETE GUIDE TO SECURE COMMUNICATIONS WITH THE ONE TIME PAD CIPHER by Dirk Rijmenants](https://cdn.ymaws.com/cicentre.com/resource/resmgr/articles/one_time_pad_v012_2011.pdf) 