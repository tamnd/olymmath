---
tag: MD7EBBP5GT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Vietnam Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3535506
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3051
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Vietnam Team Selection Test
---
There is an $n \times n$ grid which has rows and columns numbered from $1$ to $n$ ; the cell at row $i$ and column $j$ is denoted as the cell at $(i, j)$ . A subset $A$ of the cells is called *good* if for any two cells at $(x_1, y), (x_2, y)$ in $A$ , the cells $(u, v)$ satisfying $x_1 < u \leq x_2, v<y$ or $x_1 \leq u < x_2, v>y$ are not in $A$ . Determine the minimal number of good sets such that they are pairwise disjoint and every cell of the board belongs to exactly one good set.
