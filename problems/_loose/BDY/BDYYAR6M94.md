---
tag: BDYYAR6M94
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217750
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a square board of size 1001 x 1001, we color some $m$ cells in such a way that:
i. Of any two cells that share an edge, at least one is colored.
ii. Of any 6 consecutive cells in a column or a row, at least 2 consecutive ones are colored.
Determine the smallest possible value of $m$.
