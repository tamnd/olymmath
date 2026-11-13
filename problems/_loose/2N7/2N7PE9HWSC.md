---
tag: 2N7PE9HWSC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165094
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots, a_{n}$ be real numbers. The difference between the largest and the smallest of these numbers is $d$, and the sum of the absolute values of the pairwise differences is $s$ (each pair of numbers is considered only once). It is to be proven that the following inequality holds:

$$
(n-1) d \leqq s \leqq \frac{n^{2}}{4} d
$$
