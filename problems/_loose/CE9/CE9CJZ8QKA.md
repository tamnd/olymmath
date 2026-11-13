---
tag: CE9CJZ8QKA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212827
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is an integer in each cell of a $2m\times 2n$ table. We define the following operation: choose three cells forming an L-tromino (namely, a cell $C$ and two other cells sharing a side with $C$, one being horizontal and the other being vertical) and sum $1$ to each integer in the three chosen cells. Find a necessary and sufficient condition, in terms of $m$, $n$ and the initial numbers on the table, for which there exists a sequence of operations that makes all the numbers on the table equal.
