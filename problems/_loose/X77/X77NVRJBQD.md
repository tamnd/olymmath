---
tag: X77NVRJBQD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A rectangle has a width of 4 and a length of $k$ units ($k$ is an integer, $\geq 3$). The sheet is divided into $4k$ unit squares in a chessboard pattern and these squares are colored in the usual way. It is to be proven that:

1. The board can only be traversed by consecutive knight moves, visiting each square exactly once, for $k=3$ and $k \geq 5$, if we first traverse a sub-region consisting of the squares of one color from the outer rows and the squares of the opposite color from the middle rows (by rows, we mean the $1 \times k$ rectangular areas of squares);
2. For $k=4$, the board cannot be traversed by consecutive knight moves, visiting each square exactly once.
