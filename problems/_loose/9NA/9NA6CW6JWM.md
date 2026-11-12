---
tag: 9NA6CW6JWM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55547
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a strip of cells $1 \times N$. Two players play the following game. On their turn, the first player places a cross in one of the free cells, and the second player places a nought. It is not allowed to place two crosses or two noughts in adjacent cells. The player who cannot make a move loses.

Who among the players can always win (regardless of how their opponent plays)?
