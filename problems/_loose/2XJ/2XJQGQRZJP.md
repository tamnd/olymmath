---
tag: 2XJQGQRZJP
kind: problem
type: answer
answer: \frac{(n-k)^{2}+(n-k)+2n-4}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $m$, $n$, and $r$, where $1 \leq r \leq m \leq n$. We call $m$ squares in an $m \times n$ chessboard a generalized diagonal (or simply diagonal) if any two of these squares are neither in the same row nor in the same column.

Color some squares on the $m \times n$ chessboard red, such that each row and each column contains at most $r$ red squares. Find the smallest positive integer $a$ such that for any coloring method, there are $a$ diagonals on the chessboard that cover all the red squares.
