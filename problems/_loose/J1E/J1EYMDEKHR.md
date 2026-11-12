---
tag: J1EYMDEKHR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=57120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two tables $A$ and $B$, each with $m$ rows and $n$ columns. In each cell of each table, there is one of the numbers 0 or 1, and in the rows of the tables, the numbers are non-decreasing (when moving from left to right), and in the columns of the tables, the numbers are non-decreasing (when moving from top to bottom). It is known that for any $k$ from 1 to $m$, the sum of the numbers in the top $k$ rows of table $A$ is not less than the sum of the numbers in the top $k$ rows of table $B$. It is also known that the total number of ones in table $A$ is the same as in table $B$. Prove that for any $l$ from 1 to $n$, the sum of the numbers in the left $l$ columns of table $A$ is not greater than the sum of the numbers in the left $l$ columns of table $B$.
