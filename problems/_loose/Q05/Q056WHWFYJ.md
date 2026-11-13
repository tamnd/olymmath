---
tag: Q056WHWFYJ
kind: problem
type: answer
answer: k = 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243552
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a chessboard that is infinite in all directions. Alex the T-rex wishes to place a positive integer in each square in such a way that:

- No two numbers are equal.

- If a number $m$ is placed on square $C$, then at least $k$ of the squares orthogonally adjacent to $C$ have a multiple of $m$ written on them.

What is the greatest value of $k$ for which this is possible?
