---
tag: BQCKBW6810
kind: problem
type: answer
answer: \lfloor\frac{n^{2}}{4}\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 2$ be a positive integer. Each cell of an $n \times n$ board is colored red or blue. We place dominoes on the board, each covering two cells. We call a domino plain if it lies on two red or two blue cells, and colorful if it lies on one red and one blue cell. Find the largest positive integer $k$ with the following property: no matter how the red/blue coloring of the board is done, it is always possible to place $k$ non-overlapping dominoes on the board that are either all plain or all colorful.
