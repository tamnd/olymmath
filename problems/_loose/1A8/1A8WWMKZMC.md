---
tag: 1A8WWMKZMC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54927
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a strip of $2 n$ cells, numbered from left to right as follows:

|This strip is traversed by a token, which is moved each turn by the number of cells indicated in the current cell (to the right if the number is positive, and to the left if negative). It is known that the token, starting from any cell, will visit all cells of the strip. Prove that the number $2 n+1$ is prime.
