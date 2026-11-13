---
tag: KS3W54SGXJ
kind: problem
type: answer
answer: (2,4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166051
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We want to move a piece from the top left corner to the bottom right corner of a $5 \times 5$ chessboard, where the piece can only move one step to the right or one step down. We want to mark one forbidden square on the chessboard, which the piece cannot step on. Which square should this be, so that we can reach the bottom right corner from the top left corner in the fewest possible ways, but still be able to reach it?
