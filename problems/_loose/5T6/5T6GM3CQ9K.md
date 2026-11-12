---
tag: 5T6GM3CQ9K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A corner of size $n \times m$, where $m, n \geq 2$, is a figure obtained from a rectangle of size $n \times m$ cells by removing a rectangle of size $(n-1) \times (m-1)$ cells. Two players take turns making moves, which consist of coloring a non-zero number of cells in the corner, forming a rectangle or square. It is not allowed to skip a move or to color the same cell twice. The player who, after their move, leaves all the cells of the corner colored, loses. Who will win with correct play?
