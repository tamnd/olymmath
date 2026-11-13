---
tag: T2AVH3VQ7R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142591
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any two integers, when the remainders of dividing by $n$ are equal, they are said to be equal, or $\bmod n$ equal. It can be proven that the set $G=\{0,1,2, \cdots, n-1\}$ is a group under addition modulo $n$.
(1) Closure: The remainder of dividing by $n$ can only be $0,1,2, \cdots, n-1$. Therefore, closure holds.
(2) The associative law obviously holds.
(3) $e=0$ is the identity element, i.e., an identity element exists.
(4) Inverse elements exist. For any element $a \in G, a^{-1}=n-a \in G . a+(n-a)=n \equiv 0 \bmod n$.
