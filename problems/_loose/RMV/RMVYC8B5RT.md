---
tag: RMVYC8B5RT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Natural numbers are sequentially written on the board. On the $n$-th step (when the numbers $a_{1}, a_{2}, \ldots, a_{n-1}$ are written), any number is written that cannot be represented as the sum $a_{1} k_{1}+a_{2} k_{2}+\ldots+a_{n-1} k_{n-1}$, where $k_{i}$ are non-negative integers (no restrictions are imposed on $a_{1}$). Prove that the process of writing numbers cannot be infinite.
