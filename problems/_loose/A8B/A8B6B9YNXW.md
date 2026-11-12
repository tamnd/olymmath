---
tag: A8B6B9YNXW
kind: problem
type: answer
answer: "61"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an $8 \times 8$ chessboard, tokens are placed according to the following rule. Initially, the board is empty. A move consists of placing a token on any free square. With this move, exactly one of the tokens that ends up adjacent to it is removed from the board (if there is such an adjacent token). What is the maximum number of tokens that can be placed on the board, considering the specified rule? Adjacent squares are those that are nearest horizontally, vertically, and diagonally.
