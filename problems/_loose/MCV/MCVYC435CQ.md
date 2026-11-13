---
tag: MCVYC435CQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110028
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $2 n$ distinct numbers $a_{1}, a_{2}, \cdots, a_{n}, b_{1}, \cdots, b_{n}$, and fill them into a grid according to the following rule, that is, fill the number $a_{j}+b_{j}$ in the cell at the intersection of the $i$-th row and the $j$-th column, prove: If the product of the numbers in each column is equal, then the product of the numbers in each row is also equal.
