---
tag: NDCQ5FGK1A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=102
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Simon plays a game on an $n \times n$ grid of cells. Initially, each cell is filled with an integer. Every minute, Simon picks a cell satisfying the following:
(a) The magnitude of the integer in the chosen cell is less than $n^n$
(b) The sum of all the integers in the neighboring cells (sharing one side with the chosen cell) is non-zero
Simon then adds each integer in a neighboring cell to the chosen cell.
Show that Simon will eventually not be able to make any valid moves.
