---
tag: G2AG8TBKJ1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a square board with $n \times n$ cells, where $n$ is an odd natural number. Each of the $2 n(n+1)$ unit edges that border the cells of this board is either red or blue. It is known that at most $n^{2}$ edges are red.

Prove that there exists a cell on this board whose at least three edges are blue.
