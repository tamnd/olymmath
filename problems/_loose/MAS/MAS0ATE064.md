---
tag: MAS0ATE064
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15777
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Vasya has thought of 8 cells on a chessboard, none of which lie in the same row or column. On his turn, Petya places 8 rooks on the board, none of which attack each other, and then Vasya indicates all the rooks standing on the thought-of cells. If the number of rooks indicated by Vasya on this turn is even (i.e., 0, 2, 4, 6, or 8), then Petya wins; otherwise, all the pieces are removed from the board and Petya makes the next move. In the least number of moves, how many moves will Petya need to guarantee a win?

(I. Bogdanov)
