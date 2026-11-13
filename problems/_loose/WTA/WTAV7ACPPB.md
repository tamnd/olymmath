---
tag: WTAV7ACPPB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer and $p$ be a prime number of the form $8k+5$. A polynomial $Q$ of degree at most $2023$ and nonnegative integer coefficients less than or equal to $n$ will be called "cool" if
$$p\mid Q(2)\cdot Q(3) \cdot \ldots \cdot Q(p-2)-1.$$
Prove that the number of cool polynomials is even.
