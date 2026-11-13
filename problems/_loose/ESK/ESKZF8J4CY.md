---
tag: ESKZF8J4CY
kind: problem
type: answer
answer: p
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188391
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number. How many colors are needed at minimum to place tokens on a square $p \times p$ board, each token being colored with one of these colors, so that each field of the board has exactly one token and there are no two tokens of the same color that attack each other? Two tokens attack each other if they are on the same row, column, or if the line connecting them is parallel to one of the diagonals of the square.
