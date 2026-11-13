---
tag: 3RTDQ8DADB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262789
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a natural number $n,$ let $a_n$ be the sum of all products $xy$ over all integers $x$ and $y$ with $1 \leq x < y \leq n.$ For example, $a_3 = 1\cdot2 + 2\cdot3 + 1\cdot3 = 11.$ Determine the smallest $n \in \mathbb{N}$ such that $n > 1$ and $a_n$ is a multiple of $2020.$
