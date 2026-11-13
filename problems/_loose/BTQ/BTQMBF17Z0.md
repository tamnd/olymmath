---
tag: BTQMBF17Z0
kind: problem
type: answer
answer: (n,n),(n,2n),(2n,n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The points of an $m \times n$ grid can be either white or black. A grid is said to be balanced if for any point $P$ in it, the row and column passing through this point $P$ both have the same number of points of the same color as $P$. Determine all pairs of positive integers $(m, n)$ for which there exists a balanced grid.
