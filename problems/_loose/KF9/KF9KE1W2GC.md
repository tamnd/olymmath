---
tag: KF9KE1W2GC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232631
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are given a chessboard 100 x 100, $k$ barriers (each with length 1), and one ball. We want to put the barriers between the cells of the board and put the ball in some cell, in such way that the ball can get to each possible cell on the board. The only way that the ball can move is by lifting the board so it can go only forward, backward, to the left or to the right. The ball passes all cells on its way until it reaches a barrier or the edge of the board where it stops. What's the least number of barriers we need so we can achieve that?
