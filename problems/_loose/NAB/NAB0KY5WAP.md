---
tag: NAB0KY5WAP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108045
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all natural numbers $n$ such that there exists a permutation $\left(p_{1}, p_{2}, \mathrm{~L}, p_{n}\right)$ of $(1,2, \mathrm{~L}, n)$ satisfying: the sets $\left\{p_{i}+i \mid 1 \leq i \leq n\right\}$ and $\left\{p_{i}-i \mid 1 \leq i \leq n\right\}$ are both complete residue systems modulo $n$.
