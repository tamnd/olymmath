---
tag: 2NQR6MNG4X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188040
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The number 15 can be written as the sum of three positive integers in three ways such that all 9 numbers are different:

$$
15=1+6+8=2+4+9=3+5+7
$$

For each natural number $n$, let $k(n)$ denote the largest number of triples of natural numbers that sum to $n$ and such that all $3 \cdot k(n)$ numbers are different.

Prove that for every natural number $n$ the following holds:

a) $k(n)<\frac{2 n}{9}$

b) if $m$ is the quotient when $n$ is divided by 6, then $k(n) \geq m$.
