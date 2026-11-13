---
tag: 8WW73XHHSA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77481
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all quadruplets ( $p, q, r, \mathfrak{n}$ ) of strictly positive integers satisfying the following three conditions:

- $p$ and $q$ are prime,
- $p+q$ is not divisible by 3,

$-p+q=r(p-q)^{n}$.
