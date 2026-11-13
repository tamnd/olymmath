---
tag: 3A4RY8JSEH
kind: problem
type: answer
answer: 0 if m,n ≥ 2 and at least one of m or n is even; otherwise 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a rectangular board of $m \times n$ cells with $m, n \ge 1$. The vertices of the cells form a $(m+1) \times (n+1)$-grid. We say a triangle whose vertices are points on the grid is *low* if there is at least one side of the triangle that is parallel to a side of the board and for which the height of the triangle with this side as its base equals 1. We say a *low triangle* is *special* if there are two sides that are parallel to a side of the board. We partition the board in low triangles.
Determine the minimum number of special triangles over all possible partitions of the $m \times n$-board.
