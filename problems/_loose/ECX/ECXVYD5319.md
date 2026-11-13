---
tag: ECXVYD5319
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165430
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $m$ subsets of an $n$-element set such that any two distinct subsets have fewer than $k$ elements in common. It is to be proven that

$$
m \leq \sum_{i=0}^{k}\binom{n}{i}
$$
