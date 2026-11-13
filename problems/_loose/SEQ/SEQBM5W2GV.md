---
tag: SEQBM5W2GV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=90
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
There is a rectangular grid with 3 rows and $n$ columns on a blackboard.

a. Find the number of ways to write exactly one of numbers $1, 2, \ldots, 3n$ into each square in such a way that all the following conditions are met:
(1) Different squares contain different numbers.
(2) For each $i = 1, 2, \ldots, 3n - 1$, the numbers $i$ and $i + 1$ are written into adjacent squares (i.e., squares having a common side).
(3) The numbers $1$ and $3n$ are written into adjacent squares.

b. The same question, but as the 3rd condition, the number $1$ must be written into the leftmost and the number $3n$ into the rightmost column.
