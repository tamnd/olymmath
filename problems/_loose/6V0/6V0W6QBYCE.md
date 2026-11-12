---
tag: 6V0W6QBYCE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=7733
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a grid board $m \times n(m, n \geqslant 2)$. A corner is a three-cell figure consisting of a cell (let's call it the central cell) and two adjacent cells (which we will call the side cells). A cardboard corner covers the top-left corner and the two adjacent cells of the board. In one operation, you can choose one of the side cells of the corner and rotate the corner $90^{\circ}$ around the center of this cell, so that after the rotation, the corner must remain entirely on the board. For which $m$ and $n$ can the corner be moved using such operations so that its central cell covers the bottom-right corner of the board?
