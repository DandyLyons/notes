---
wikipedia: https://en.wikipedia.org/wiki/Message_authentication_code
---
![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/MAC.svg/1322px-MAC.svg.png)

## Standards
Source: [Message authentication code - Wikipedia](https://en.wikipedia.org/wiki/Message_authentication_code#Standards) 
Various standards exist that define MAC algorithms. These include:

- FIPS PUB 113 _Computer Data Authentication_,[[11]](https://en.wikipedia.org/wiki/Message_authentication_code#cite_note-11) withdrawn in 2002,[[12]](https://en.wikipedia.org/wiki/Message_authentication_code#cite_note-12) defines an algorithm based on [DES](https://en.wikipedia.org/wiki/Data_Encryption_Standard "Data Encryption Standard").
- FIPS PUB 198-1 _The Keyed-Hash Message Authentication Code (HMAC)_[[13]](https://en.wikipedia.org/wiki/Message_authentication_code#cite_note-13)
- NIST SP800-185 _SHA-3 Derived Functions: cSHAKE, KMAC, TupleHash, and ParallelHash_ [[14]](https://en.wikipedia.org/wiki/Message_authentication_code#cite_note-14)
- [ISO/IEC 9797-1](https://en.wikipedia.org/wiki/ISO/IEC_9797-1 "ISO/IEC 9797-1") _Mechanisms using a block cipher_[[15]](https://en.wikipedia.org/wiki/Message_authentication_code#cite_note-15)
- [ISO](https://en.wikipedia.org/wiki/International_Organization_for_Standardization "International Organization for Standardization")/IEC 9797-2 _Mechanisms using a dedicated hash-function_[[16]](https://en.wikipedia.org/wiki/Message_authentication_code#cite_note-16)
- [ISO](https://en.wikipedia.org/wiki/International_Organization_for_Standardization "International Organization for Standardization")/IEC 9797-3 _Mechanisms using a universal hash-function_[[17]](https://en.wikipedia.org/wiki/Message_authentication_code#cite_note-17)
- [ISO](https://en.wikipedia.org/wiki/International_Organization_for_Standardization "International Organization for Standardization")/IEC 29192-6 _Lightweight cryptography - Message authentication codes_[[18]](https://en.wikipedia.org/wiki/Message_authentication_code#cite_note-18)

ISO/IEC 9797-1 and -2 define generic models and algorithms that can be used with any block cipher or hash function, and a variety of different parameters. These models and parameters allow more specific algorithms to be defined by nominating the parameters. For example, the FIPS PUB 113 algorithm is functionally equivalent to ISO/IEC 9797-1 MAC algorithm 1 with padding method 1 and a block cipher algorithm of DES.