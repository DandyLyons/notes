
## Quantum-Resistant

- Algorithms designed to be secure against both classical and quantum computers, such as the NIST-recommended post-quantum algorithms (e.g. CRYSTALS-Kyber, CRYSTALS-Dilithium).

## Quantum-Tolerant

- Symmetric encryption and hashing algorithms that can be made secure against quantum computers by increasing key sizes (e.g. AES-256, SHA-256).
- However, may be vulnerable for certain use cases like password-based authentication.

## Quantum-Vulnerable

- Existing public-key algorithms like RSA and ECDSA that can be broken by large-scale quantum computers running Shor's algorithm.
- These algorithms should be phased out and replaced with quantum-resistant alternatives.

## Weak

- Older, outdated symmetric algorithms like Triple DES that are no longer considered secure against classical attacks. [2](https://www.infosecinstitute.com/resources/secure-coding/cryptography-based-vulnerabilities-in-applications/)
- These algorithms may be vulnerable to ciphertext-only attacks or other cryptanalysis techniques.
## Insecure

- Algorithms like DES and MD5 that are vulnerable to brute-force attacks and have known weaknesses. [2](https://www.infosecinstitute.com/resources/secure-coding/cryptography-based-vulnerabilities-in-applications/)
- These algorithms can be broken using classical computing power and should not be used for any security-critical applications.