---
tag: FWRVNG2GEF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the cells of an $n \times n$ chessboard, numbers are placed; the number at the intersection of the $p$-th row and the $q$-th column is denoted by $x_{p q}$. Prove that if for any $i, j$ and $k$ (where $1 \leqslant i, j, k \leqslant n$) the identity $x_{i j}+x_{j k}+x_{k i}=0$ holds, then there exist $n$ numbers $t_{1}, t_{2}, \ldots, t_{n}$ such that $x_{i j}=t_{i}-t_{j}$.
