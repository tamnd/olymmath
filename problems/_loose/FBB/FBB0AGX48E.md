---
tag: FBB0AGX48E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83781
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a rectangular checkerboard with $2 m$ rows and $2 n$ columns. In each cell, there is either a red token or a green token. Each row contains as many red tokens as green tokens, and the same is true for the columns. Two adjacent red tokens in the same row or column are connected by a red segment. Similarly, green tokens are connected by green segments. Prove that the number of red segments is equal to the number of green segments.
