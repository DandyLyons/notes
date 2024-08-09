---
publish: true
date: 
aliases:
  - Ciphers
title: Ciphers
---

## Types of Ciphers Symmetric Ciphers

### Substitution Ciphers
#### Simple Substitution Ciphers

#### Homophonic Substitution Ciphers

#### Polygraphic Substitution Ciphers

#### Polyalphabetic Substitution Ciphers

##### The "Simple XOR Cipher"
Related: [[Vigenère cipher]] and [[The One Time Pad]]

###### Disambiguate Simple XOR vs. Vigenerè
>The simple XOR cipher is a variation of the [Vigenère cipher](https://www.crypto-it.net/eng/simple/vigenere-cipher.html "Read more about the Vigenère cipher"). It differs from the original version because it operates on bytes, which are stored in computer memory, instead of letters.
> 
> Instead of adding two alphabet letters, as in the original version of the Vigenère cipher, the XOR algorithm adds subsequent plaintext bytes to secret key bytes using XOR operation. After using the last secret key byte, one should return to the first byte (as in the Vigenère encryption).
> From: [Simple XOR Cipher | Polyalphabetic Substitution | Crypto-IT](https://www.crypto-it.net/eng/simple/simple-xor.html)

### Transposition Ciphers

#### Rail Fence Cipher

#### Route Cipher

#### Columnar Cipher

#### Double Transposition

#### Myszkowski Transposition

### Rotor Machines
See: [Cryptographic Rotor Machines | Crypto-IT](https://www.crypto-it.net/eng/simple/rotor-machines.html) 

#### Hebern Rotor Machine

#### Lorenz Rotor Machine

#### Enigma Machine


### Quantum-Resistant algorithms
See [[Cryptography security scale#Quantum-Resistant]]
#### CRYSTALS-Kyber
CRYSTALS-Kyber - A key encapsulation mechanism (KEM) algorithm selected by NIST as one of the first four quantum-resistant cryptographic algorithms.


## Types of Asymmetric Ciphers
See [[Public Key Cryptography|Asymmetric Cryptography]]

Asymmetric ciphers are also referred to as ciphers with public and private keys. They use two keys, one for encryption of messages and the other one during decryption.

> [!NOTE]+ Technical Definition
> From: [Asymmetric Ciphers | Cryptography | Crypto-IT](https://www.crypto-it.net/eng/asymmetric/index.html) 
> The system of asymmetric encryption consists of three algorithms (G, E, D):
> 
> - G( ) - the nondeterministic algorithm which returns a pair of keys (pk, sk),
> - E(pk, m) - the nondeterministic algorithm which encrypts plaintext m and returns ciphertext c,
> - D(sk, c) - the deterministic algorithm which decrypts c and returns plaintext m.
> 
> All the three algorithms must provide consistency. For each pair of keys (pk, sk) created by G and for every plaintext message m the following condition must be fulfilled:
> 
> - D(sk, E(pk, m)) = m

### Merkle's Puzzles algorithm
See: [Merkle's Puzzles | Asymmetric Cipher | Crypto-IT](https://www.crypto-it.net/eng/asymmetric/merkle-puzzles.html)

### Diffie-Hellman Protocol
See: [Diffie–Hellman Protocol | Asymmetric Cipher | Crypto-IT](https://www.crypto-it.net/eng/asymmetric/diffie-hellman.html) 

### RSA
See: [RSA Asymmetric Cipher | Cryptography | Crypto-IT](https://www.crypto-it.net/eng/asymmetric/rsa.html)

### Quantum Resistant algorithms
See: [[Cryptography security scale#Quantum-Resistant]]
- CRYSTALS-Dilithium - A digital signature algorithm selected by NIST as one of the first four quantum-resistant cryptographic algorithms. [3](https://www.nist.gov/news-events/news/2022/07/nist-announces-first-four-quantum-resistant-cryptographic-algorithms)[4](https://appviewx.com/blogs/nist-rolls-out-first-four-quantum-resistant-encryption-algorithms/)
- FALCON - A digital signature algorithm selected by NIST as an alternative to CRYSTALS-Dilithium for applications needing smaller signatures. [3](https://www.nist.gov/news-events/news/2022/07/nist-announces-first-four-quantum-resistant-cryptographic-algorithms)[4](https://appviewx.com/blogs/nist-rolls-out-first-four-quantum-resistant-encryption-algorithms/)
- SPHINCS+ - A digital signature algorithm selected by NIST as a backup option, as it is based on a different mathematical approach compared to the other NIST selections. [3](https://www.nist.gov/news-events/news/2022/07/nist-announces-first-four-quantum-resistant-cryptographic-algorithms)[4](https://appviewx.com/blogs/nist-rolls-out-first-four-quantum-resistant-encryption-algorithms/)

## Attributes of Ciphers

### Reciprocal Ciphers
A reciprocal cipher is a cipher that can be encrypted and decrypted using the same algorithm. You might also say that the cipher has the attribute of *reciprocality*
> [!NOTE]- From: [Reciprocal cipher - Wikipedia](https://en.wikipedia.org/wiki/Symmetric-key_algorithm#Reciprocal_cipher)
> A reciprocal cipher is a cipher where, just as one enters the [plaintext](https://en.wikipedia.org/wiki/Plaintext "Plaintext") into the [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography") system to get the [ciphertext](https://en.wikipedia.org/wiki/Ciphertext "Ciphertext"), one could enter the ciphertext into the same place in the system to get the plaintext. A reciprocal cipher is also sometimes referred as **self-reciprocal cipher**.[[21]](https://en.wikipedia.org/wiki/Symmetric-key_algorithm#cite_note-22)[[22]](https://en.wikipedia.org/wiki/Symmetric-key_algorithm#cite_note-23)
> 
> Practically all mechanical cipher machines implement a reciprocal cipher, a [mathematical involution](https://en.wikipedia.org/wiki/Involution_(mathematics) "Involution (mathematics)") on each typed-in letter. Instead of designing two kinds of machines, one for encrypting and one for decrypting, all the machines can be identical and can be set up (keyed) the same way.[[23]](https://en.wikipedia.org/wiki/Symmetric-key_algorithm#cite_note-24)
> 
> Examples of reciprocal ciphers include:
> 
> - [Atbash](https://en.wikipedia.org/wiki/Atbash "Atbash")
> - [Beaufort cipher](https://en.wikipedia.org/wiki/Beaufort_cipher "Beaufort cipher")[[24]](https://en.wikipedia.org/wiki/Symmetric-key_algorithm#cite_note-25)
> - [Enigma machine](https://en.wikipedia.org/wiki/Enigma_machine "Enigma machine")[[25]](https://en.wikipedia.org/wiki/Symmetric-key_algorithm#cite_note-26)
> - Marie Antoinette and [Axel von Fersen](https://en.wikipedia.org/wiki/Axel_von_Fersen_the_Younger "Axel von Fersen the Younger") communicated with a self-reciprocal cipher.[[26]](https://en.wikipedia.org/wiki/Symmetric-key_algorithm#cite_note-27)
> - the Porta polyalphabetic cipher is self-reciprocal.[[27]](https://en.wikipedia.org/wiki/Symmetric-key_algorithm#cite_note-28)
> - [Purple cipher](https://en.wikipedia.org/wiki/Purple_cipher)[[28]](https://en.wikipedia.org/wiki/Symmetric-key_algorithm#cite_note-29)
> - [RC4](https://en.wikipedia.org/wiki/RC4 "RC4")
> - [ROT13](https://en.wikipedia.org/wiki/ROT13 "ROT13")
> - [XOR cipher](https://en.wikipedia.org/wiki/XOR_cipher "XOR cipher")
> - [Vatsyayana cipher](https://en.wikipedia.org/wiki/Vatsyayana_cipher "Vatsyayana cipher")
> 
> The majority of all modern ciphers can be classified as either a [stream cipher](https://en.wikipedia.org/wiki/Stream_cipher "Stream cipher"), most of which use a reciprocal [XOR cipher](https://en.wikipedia.org/wiki/XOR_cipher "XOR cipher") combiner, or a [block cipher](https://en.wikipedia.org/wiki/Block_cipher "Block cipher"), most of which use a [Feistel cipher](https://en.wikipedia.org/wiki/Feistel_cipher "Feistel cipher") or [Lai–Massey scheme](https://en.wikipedia.org/wiki/Lai%E2%80%93Massey_scheme "Lai–Massey scheme") with a reciprocal transformation in each round.[[29]](https://en.wikipedia.org/wiki/Symmetric-key_algorithm#cite_note-30)


## Technical definitions
### Mathematical Definition of a Cipher
Source: [[Cryptography I (Stanford Course)]]: Week 1: [Information Theoretic Security and The One Time Pad](https://www.coursera.org/learn/crypto/lecture/cbnX1/information-theoretic-security-and-the-one-time-pad) 
- A cipher is defined over *(K, M, C)*. 
	- This means a cipher is defined over a set of: 
		- all possible keys, (the Key space)
		- all possible messages (plaintext)
		- all possible ciphered messages.
- The cipher itself is a pair of "efficient" algorithms: (E, D) where: 
	- E stands for encryption:
		- E: K x M -> C
		- E often includes randomness. 
	- D stands for decryption: 
		- D: K x C -> M
		- D is always deterministic. Given the key and the ciphertext, it will always output the same. 
	- Testing a cipher: 
		- A cipher must satisfy this test: 
			- `D(K, E(K,M)) = M`
				- i.e. If I encrypt and then decrypt with the same key, I should get the same message back. 
				- This is called the consistency equation.

## Security of Ciphers
See: [Information-theoretic security of ciphers | Cryptography | Crypto-IT](https://www.crypto-it.net/eng/theory/ciphers-security.html)

## Sources
- [Crypto-IT](https://www.crypto-it.net/eng/) 