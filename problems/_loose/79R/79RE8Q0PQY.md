---
tag: 79RE8Q0PQY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20534
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a $10 \times 10$ grid, there are 400 chips. We will call two cells neighbors if they share a side, or if they are the two end cells of the same row or column. Thus, each cell will have exactly 4 neighbors.

In one move, it is allowed to take 4 chips from one cell and place them on 4 neighboring cells. Is it possible, for any initial arrangement of chips, to achieve a state where all cells have the same number of chips?
