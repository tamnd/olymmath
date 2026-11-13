---
tag: CCNGZ83JQK
kind: problem
type: answer
answer: 3orn\geqslant6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114276
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For positive integers $m, n$, if every row of the $m \times n$ table is a permutation of $1,2, \cdots, n$, and each column, after appropriate rearrangement, is an arithmetic sequence of length $m$ with a common difference greater than 0, then the table is called a continuous arithmetic table of size $m \times n$.
Find all positive integers $n$ such that there exists a $3 \times n$ continuous arithmetic table.
