---
tag: 1NW44PYJ6K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221497
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an $8 \times 8$ chessboard, a rook stands on the bottom left corner square. We want to move it to the upper right corner, subject to the following rules: we have to move the rook exactly $9$ times, such that the length of each move is either $3$ or $4$. (It is allowed to mix the two lengths throughout the "journey".) How many ways are there to do this? In each move, the rook moves horizontally or vertically.
