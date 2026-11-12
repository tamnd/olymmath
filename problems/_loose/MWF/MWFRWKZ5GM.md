---
tag: MWFRWKZ5GM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h3468609
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3046
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2025
    source: hf-ai-mo-aops
    label: 2025 Vietnam National Olympiad
---
Consider a $3k \times 3k$ square grid (where $k$ is a positive integer), the cells in the grid are coordinated in terms of columns and rows: Cell $(i, j)$ is at the $i^{\text{th}}$ column from left to right and the $j^{\text{th}}$ row from bottom up. We want to place $4k$ marbles in the cells of the grid, with each cell containing at most one marble, such that
- Each row and each column has at least one marble
- For each marble, there is another marble placed on the same row or column with that marble.
a) Assume $k=1$ . Determine the number of ways to place the marbles to satisfy the above conditions (Two ways to place marbles are different if there is a cell $(i, j)$ having a marble placed in one way but not in the other way).
b) Assume $k \geq 1$ . Find the largest positive integer $N$ such that if we mark any $N$ cells on the board, there is always a way to place $4k$ marbles satisfying the above conditions such that none of the marbles are placed on any of the marked cells.
