---
tag: 3RBB6Y3JZ0
kind: problem
type: answer
answer: n!·(n−1)^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=136
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2012
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions 2012
---
In an $n \times n$ board, the numbers $0$ through $n^2 - 1$ are written so that the number in row $i$ and column $j$ is equal to
$$
(i-1) + n(j-1) \text{ where } 1 \le i, j \le n.
$$
Suppose we select $n$ different cells of the board, where no two cells are in the same row or column. Find the maximum possible product of the numbers in the $n$ cells.
