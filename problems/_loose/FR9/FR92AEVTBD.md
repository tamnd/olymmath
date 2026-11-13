---
tag: FR92AEVTBD
kind: problem
type: answer
answer: n - m + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240178
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An $m \times n$ chessboard where $m \le n$ has several black squares such that no two rows have the same pattern. Determine the largest integer $k$ such that we can always color $k$ columns red while still no two rows have the same pattern.
