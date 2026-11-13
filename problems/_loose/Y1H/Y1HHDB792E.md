---
tag: Y1HHDB792E
kind: problem
type: answer
answer: n = 2^k - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242725
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\ge 3$ be a positive integer. Amy wrote all the integers from $1$ to $n^2$ on the $n\times n$ grid, so that each cell contains exactly one number. For $i=1,2,\cdots ,n^2-1$, the cell containing $i$ shares a common side with the cell containing $i+1$. Each turn, Bred can choose one cell, and check what number is written. Bred wants to know where $1$ is written by less than $3n$ turns. Determine whether $n$ such that Bred can always achieve his goal is infinite.
