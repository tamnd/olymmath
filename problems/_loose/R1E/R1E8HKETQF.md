---
tag: R1E8HKETQF
kind: problem
type: answer
answer: 2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124735
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M$ be an $n$-element set. If $M$ has $k$ distinct subsets $A_{1}, A_{2}, \cdots, A_{k}$, satisfying: for each $i, j \in\{1,2, \cdots, k\}, A_{i} \cap A_{j} \neq \varnothing$, find the maximum value of the positive integer $k$.
