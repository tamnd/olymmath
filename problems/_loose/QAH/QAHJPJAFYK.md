---
tag: QAHJPJAFYK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88431
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given are 2014 tokens that are black on one side and white on the other, and a board of dimensions $2014 \times 1$. Initially, each field on the board contains one token, either showing the black or the white side. In each move, it is allowed to remove one token showing the black side and simultaneously flip the tokens on adjacent fields (if they have not been removed).

Determine all initial arrangements of tokens for which it is possible to remove all tokens through a series of such moves.
