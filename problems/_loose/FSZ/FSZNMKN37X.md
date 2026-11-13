---
tag: FSZNMKN37X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89802
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ and $b$ be relatively prime natural numbers different from 1. A sequence is defined as

$$
x_{1}=a, x_{2}=b, x_{n}=\frac{x_{n-1}^{2}+x_{n-2}^{2}}{x_{n-1}+x_{n-2}} \text { for } n \geqslant 3
$$

Prove that no term $x_{n}$ of this sequence, except the first two, is a natural number.
