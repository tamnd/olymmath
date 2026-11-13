---
tag: ZAKSZBRZT8
kind: problem
type: answer
answer: n[(\frac{n-1}{2})!]^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an odd integer different from 1. How many permutations $p$ of $\{1,2, \ldots, n\}$ are there such that

$$
\sum_{i=1}^{n}|p(i)-i|=\frac{n^{2}-1}{2}
$$
