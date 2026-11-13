---
tag: SG4B6M7GJ7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77465
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an odd natural number, and let $a_{1}, \ldots, a_{n}$ be non-zero natural numbers. We denote $A$ as the product of the integers $a_{i}$, and $d$ as their greatest common divisor.

Show that

$$
\operatorname{GCD}\left(a_{1}^{n}+A, a_{2}^{n}+A, \ldots, a_{n}^{n}+A\right) \leqslant 2 d^{n}
$$
