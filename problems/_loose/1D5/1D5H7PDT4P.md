---
tag: 1D5H7PDT4P
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77526
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Maena and Théodore are playing a game. They play on a square grid consisting of $99 \times 99$ cells. Two cells are considered adjacent if they share a vertex or a side.

Initially, Maéna numbers the cells of the grid from 1 to $99^{2}$, in an arbitrary manner. Théodore then places a token on one of the cells of the square, and he allows himself moves of the following form: he can move the token from one cell to another only if these cells are adjacent and if the new cell on which the token lands has a strictly greater number than the old cell.

How many moves can Théodore guarantee at a minimum, regardless of how Maena placed her integers?
