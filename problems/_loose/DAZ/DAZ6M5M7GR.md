---
tag: DAZ6M5M7GR
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54499
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Cells of a $5 \times 5$ board are painted in a checkerboard pattern (corner cells are black). A figure, a mini-bishop, moves along the black cells of this board, leaving a trail on each cell it visits and not returning to that cell again. The mini-bishop can move either to free (diagonally) adjacent cells or jump (also diagonally) over one cell with a trail to a free cell beyond it. What is the maximum number of cells the mini-bishop can visit?
