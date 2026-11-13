---
tag: 2S22FZPE3Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a natural number $n$, let $D (n)$ be the set of (positive integers) divisors of $n$. Furthermore let $d (n)$ be the number of divisors of $n,$ that is, the cardinality of $D (n)$. For each such $n$, prove the equality $$\sum_{k\in D(n)} d(k)^3=\left( \sum_{k\in D(n)} d(k)\right) ^2.$$
