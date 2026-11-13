---
tag: A751CKMC8A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262934
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the function $f(n) = n^2 + n + 1$. For each $n$, let $d_n$ be the smallest positive integer with $gcd(n, dn) = 1$ and $f(n) | f(d_n)$. Find $d_6 + d_7 + d_8 + d_9 + d_{10}$.
