---
tag: TEWA6PTKFJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182583
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a chessboard with $n^{2}$ fields, colored in the usual way (if $n$ is odd, the corner fields are black). Let $A(n)$ be the number of ways to arrange $n$ same-colored rooks such that no rook can attack another; $B(n)$ be the number of corresponding ways if the rooks are only allowed to stand on black fields.

It is to be shown that the ratio $A(n): B(n)$ is always a natural number for any natural $n>1$.
