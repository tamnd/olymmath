---
tag: GDZV0PW5PQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166934
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the numbers $x_{1}, x_{2}, \ldots, x_{n+1}$, we know the following:

a) $x_{n+1}=x_{1}$,

b) $100\left(1+x_{i}\right) \geq 101 x_{i+1}, (i=1,2, \ldots, n)$

c) $x_{1}+x_{2}+\ldots+x_{n} \geq 100 n$.

Prove that the numbers $x_{i}$ are equal.
