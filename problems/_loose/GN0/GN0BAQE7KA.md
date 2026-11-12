---
tag: GN0BAQE7KA
kind: problem
type: answer
answer: n-
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=7875
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a checkerboard $n \times n$. A rook moves according to standard chess rules (i.e., in one move, the rook can be moved to a cell in the same row or the same column). For which $n$ is it possible to visit all cells of the board exactly once, if immediately after a horizontal move of the rook, a vertical move must follow and vice versa. If the rook is initially in a given cell or ends its route in it, the cell is considered visited. The initial cell of the rook can be chosen.
