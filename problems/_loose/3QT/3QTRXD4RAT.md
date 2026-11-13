---
tag: 3QTRXD4RAT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $3n$ cards, each of them will be written with a number from the following sequence:
$$2, 3, ..., n, n + 1, n + 3, n + 4, ..., 2n + 1, 2n + 2, 2n + 4, ..., 3n + 3$$
with each number used exactly once. Then every card is arranged from left to right in random order. Determine the probability such that for every $i$ with $1\le i \le 3n$, the number written on the $i$-th card, counted from the left, is greater than or equal to $i$.
