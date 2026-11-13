---
tag: EGSMPYC8PN
kind: problem
type: answer
answer: "90"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A rectangular chessboard composed of unit squares of size $m \times n$ (where $m, n$ are positive integers not exceeding 10), has a chess piece placed in the unit square at the bottom-left corner. Two players, A and B, take turns moving the piece. The rules are: move up any number of squares, or move right any number of squares, but you cannot move out of the board or not move at all. The player who cannot make a move loses (i.e., the first player to move the piece to the top-right corner wins). How many pairs of positive integers $(m, n)$ allow the first player A to have a winning strategy? $ $
