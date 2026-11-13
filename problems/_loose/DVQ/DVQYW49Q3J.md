---
tag: DVQYW49Q3J
kind: problem
type: answer
answer: k\geq1012
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154817
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a positive integer. Keira and Roland play a game of reverse chess. Initially, Roland chooses a positive integer $n>\frac{k}{2023}$. Keira places $k$ kings on $k$ distinct squares of a $2023 \times n$ chess board. Then Roland places a rook on an unoccupied square of the board. Both players then take turns moving any number (possibly zero) of their pieces, with Keira starting first. Each king cannot move to a square occupied by another king, but it can capture the rook. Furthermore, if Keira chooses to move more than one king in her turn, she moves them one at a time. Roland's rook is not permitted to capture any king, nor may it pass through a square occupied by a king.

For which $k$ can Keira guarantee to capture Roland's rook, regardless of Roland's moves or choice of $n$ ?
(A king can move exactly one square in any horizontal, vertical or diagonal direction. A rook can move any number of squares in a horizontal or vertical direction. One piece (rook or king) captures another by moving to the square it occupies.)
