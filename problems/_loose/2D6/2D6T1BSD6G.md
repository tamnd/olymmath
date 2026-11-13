---
tag: 2D6T1BSD6G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An $m \times n$ grid of squares (with $m$ rows and $n$ columns) has some of its squares colored blue. The grid is called *fish-friendly* if a fish can swim from the left edge of the grid to the right edge of the grid only moving through blue squares. In other words, there is a sequence of blue squares, each horizontally or vertically adjacent to the previous square, starting in the first column and ending in the last column.

Prove that the number of fish-friendly $42 \times 49$ grids is at least $2^{2022}$.
