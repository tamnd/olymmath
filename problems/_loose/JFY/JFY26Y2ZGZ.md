---
tag: JFY26Y2ZGZ
kind: problem
type: answer
answer: "1010"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89845
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A frog is located at the origin $O$ of a number line and needs to perform 2022 jumps, each of a different length from $1, 2, \ldots, 2022$. The jumps must be performed in such an order that the following rules are respected:

- if the frog is currently at point $O$ or to the left of it, it must jump to the right,
- if the frog is to the right of point $O$, it must jump to the left.

Determine the largest natural number $k$ for which the frog can jump in such a way that it never lands on any of the numbers $1, 2, \ldots, k$.
