---
tag: 1MKXTAWA7P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that another recurrence relation

$$
K_{n}\left(x_{1}, \ldots, x_{n}\right)=x_{1} K_{n-1}\left(x_{2}, \ldots, x_{n}\right)+K_{n-2}\left(x_{3}, \ldots, x_{n}\right)
$$

leads to the same sequence of polynomials.
