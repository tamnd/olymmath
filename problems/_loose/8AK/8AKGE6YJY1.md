---
tag: 8AKGE6YJY1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268424
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $k$. Prove that there are infinitely many positive integers $n$ satisfy the following conditions at the same time:
a) $n$ has at least $k$ distinct prime divisors
b) All prime divisors other than $3$ of $n$ have the form $4t+1$, with $t$ some positive integer.
c) $n | 2^{\sigma(n)}-1$
Here $\sigma(n)$ demotes the sum of the positive integer divisors of $n$.
