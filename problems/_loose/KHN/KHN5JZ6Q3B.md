---
tag: KHN5JZ6Q3B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170419
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players play the following game on an $n \times n$ chessboard. Each square has a coin placed on it, with one side red and the other blue. The players take turns. The player whose turn it is selects a blue coin, and in the rectangle whose top-left corner is the selected coin and whose bottom-right corner is the bottom-right corner of the entire board, every coin is flipped. The player who cannot make a move loses.

Which are the initial positions where the starting player has a winning strategy?
