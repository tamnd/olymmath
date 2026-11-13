---
tag: AFTXPQEQMB
kind: problem
type: answer
answer: 10n^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241735
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each cell of $2024\times 2024$ table colored either red, bule, or white. We place a red pawn on each red cell, and a blue pawn on each blue cell. Moreover, for each white cell that shares an edge or vertex with one or more blue cells, place a blue pawn on it. Suppose that for any $2\times2$ square, the number of red pawns and blue pawns placed within it is equal and either one or two. Find the maximum possible value for the number of squares painted white.
