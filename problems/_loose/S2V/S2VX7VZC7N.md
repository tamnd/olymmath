---
tag: S2VX7VZC7N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219312
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The natural number $n>1$ is such that there exist $a\in \mathbb{N}$ and a prime number $q$ which satisfy the following conditions:
1) $q$ divides $n-1$ and $q>\sqrt{n}-1$
2) $n$ divides $a^{n-1}-1$
3) $gcd(a^\frac{n-1}{q}-1,n)=1$.
Is it possible for $n$ to be a composite number?
