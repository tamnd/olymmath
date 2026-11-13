---
tag: RGH0HGW18Z
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
In a $n \times n$ table, consider the main diagonal and the cells below. We call these cells a triangular grid of length $n$.

We want to place a real number in each cell of a triangular table of length $n$ such that for each cell $(i, j)$, the sum of the numbers in all cells of its row $i$ and all cells of its column $j$ (including $x_{i,j}$ itself, which is counted once) is zero. For example, for the cells with circles in them, the sum of all cells marked with a circle is zero. We know that the cells at the top-most and left-most positions contains the number $1$. Find the number of possible ways to fill the remaining cells.

Assume the triangular grid consists of cells $(i, j)$ where $1 \leq j \leq i \leq n$ (lower triangle), and for a cell $(i, j)$, the sum condition is $\left(\sum_{k=1}^i x_{i,k}\right) + \left(\sum_{k=j}^n x_{k,j}\right) - x_{i,j} = 0$.
