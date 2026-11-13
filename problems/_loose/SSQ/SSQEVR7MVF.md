---
tag: SSQEVR7MVF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128894
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that in an $n \times n$ grid, each cell contains a real number such that the sum of the numbers in each row and each column is zero. Now, we are allowed to perform the following operation on the grid: choose any row of numbers, and add them to the corresponding numbers in a certain column (i.e., the $i$-th number in the row is added to the $i$-th number in the column, $i=1, \cdots, n$; the numbers in each row are numbered from left to right, and the numbers in each column are numbered from top to bottom), and simultaneously subtract these numbers from another column. Prove that after several operations, all the numbers in the grid can be made zero.
