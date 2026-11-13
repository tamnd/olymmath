---
tag: PFCHKMVDX1
kind: problem
type: answer
answer: 2k+2n-4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169829
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an $n$ column and $k$ row chessboard, on which we have placed some coins (at most one per square). We call two coins adjacent if they are in the same row or column, and there is no other coin on the segment connecting them. Each coin has at most three neighbors. What is the maximum number of coins on the chessboard?
