---
tag: C0HGR43PWB
kind: problem
type: answer
answer: "32"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91084
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ pieces on a board with $5 \times 9$ squares, with a maximum of one piece on each square at any time. A move consists of moving each piece to one of the adjacent squares at the top, bottom, left or right. This is done simultaneously for all pieces. If a piece is moved horizontally in one turn, it must be moved vertically in the next turn and vice versa. Determine the largest value for $n$ so that there is a starting position for the $n$ pieces and a sequence of moves so that this game can continue for as long as you like.
