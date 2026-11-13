---
tag: KCDNS1T0ZP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69299
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the cells of an $n \times n$ chessboard, numbers are placed: at the intersection of the $k$-th row and the $m$-th column, the number $a_{k m}$ is placed. For any arrangement of $n$ rooks on this board, where no two rooks attack each other, the sum of the covered numbers is 1972. Prove that there exist two sets of numbers $x_{1}, x_{2}, \ldots, x_{n}$ and $y_{1}, \ldots, y_{n}$, such that for all $k$ and $m$, the equality $a_{k m}=x_{k}+y_{m}$ holds.
