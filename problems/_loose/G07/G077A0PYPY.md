---
tag: G077A0PYPY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221441
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a table with $n$ rows and $18$ columns. Each of its cells contains a $0$ or a $1$. The table satisfies the following properties:

- Every two rows are different.

- Each row contains exactly $6$ cells that contain $1$.

- For every three rows, there exists a column so that the intersection of the column with the three rows (the three cells) all contain $0$.

What is the greatest possible value of $n$?
