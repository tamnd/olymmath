---
tag: 3E18RD3NPW
kind: problem
type: answer
answer: n = 4m
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244441
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Points $A_1, A_2,\ldots, A_n$ are found on a circle in this order. Each point $A_i$ has exactly $i$ coins. A move consists in taking two coins from two points (may be the same point) and moving them to adjacent points (one move clockwise and another counter-clockwise). Find all possible values of $n$ for which it is possible after a finite number of moves to obtain a configuration with each point $A_i$ having $n+1-i$ coins.
