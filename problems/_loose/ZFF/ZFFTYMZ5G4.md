---
tag: ZFFTYMZ5G4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. In a grid of size $n \times n$, some cells have a two-way mirror along one of their diagonals. Outside each cell on the left and right sides of the grid, there is a laser pointer, pointing horizontally towards the grid. The lasers are numbered from 1 to $n$ on each side, from top to bottom in both cases. A laser is red when it exits the grid from the top edge and is green if it exits the grid from the bottom edge. If each laser exits either the top or the bottom edge, prove that the sum of the red lasers is less than or equal to the sum of the green lasers.
