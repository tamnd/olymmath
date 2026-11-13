---
tag: V1HC1ZFD45
kind: problem
type: answer
answer: n = 4k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$,$n$ be positive integers, $k,n>1$, $k<n$ and a $n \times n$ grid of unit squares is
given. Ana and Maya take turns in coloring the grid in the following way: in each turn, a unit square is colored black in such a way that no two black cells have a common side or vertex. Find the smallest positive integer $n$ , such that they can obtain a configuration in which each row and column contains exactly $k$ black cells. Draw one example.
