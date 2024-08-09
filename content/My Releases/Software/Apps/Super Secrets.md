
## UX

| Encoding   | Steganography | Cryptography  | Hashing                  |
| ---------- | ------------- | ------------- | ------------------------ |
| Encode     | Hide          | Encrypt       | Hash                     |
| Decode     | Unhide        | Decrypt       | *not possible to unhash* |
| Parse [^1] | Steganalysis  | Cryptanalysis | *not possible to unhash* |


### Transform (Encoding)
See [[Topics/Software Development/Encoding/index|Encoding]] 

#### Decoding

#### Parsing
- try [[swift-parsing]] 

### Hide (Steganography)
See [[Topics/Software Development/Steganography/index|Steganography]] 

- try [GitHub - MrAdamBoyd/Pictograph: Steganography on iOS and macOS](https://github.com/MrAdamBoyd/Pictograph?tab=readme-ov-file#license) 
- [[text embedded steganography]]

#### Unhide 

#### Peek (Steganalysis)

### Lock (Encryption)
See [[Topics/Software Development/Cryptography/index|Cryptography]] 
try [[CryptoKit|swift-crypto]] 

#### Unlock (Decryption)

#### Pick (Cryptanalysis)
*Like picking a lock*

### Authenticate (Hashing) 
See [[Hashing]]
try [[CryptoKit|swift-crypto]] 

#### Label/Tag
This is the process where you can associate a piece of data with a cryptographic hash. 

#### Authenticate
This is the process where you can compare the cryptographic hash of a piece of data with an expected cryptographic hash. If they match then you can have a very high confidence that the data has not been tampered with. 

### Combine
Combine is where the User can combine encoding, steganography, and encryption into custom workflows. 

Features can be combined both in the app and outside the app using Shortcuts and Share Sheet.

## Killer Features
- Integrated into Shortcuts
- Integrated into Share Sheet
- Encrypt using [[The One Time Pad]]. 
- hide data in images using steganography
- transform text between common formats:
	- e.g. [[Base64]], [[percent encoding]], [[punycode]], [[UTF-8]], [[ASCII]]
	- [[Markdown]], [[Topics/Web Development/HTML/index|HTML]]
- Date transformations
# Footnotes

[^1]: There doesn't seem to be an agreed upon term equivalent for encoding that is analogous to cryptanalysis and steganalysis. But I think that such a term might be helpful. There exists a common problem whereby data is encoded in one of many schemes and it is not always clear which scheme was used. Therefore, there must be a step whereby the data is analyzed in order to determine what scheme was most likely used to encode that data. 