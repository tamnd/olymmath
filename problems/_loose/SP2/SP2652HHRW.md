---
tag: SP2652HHRW
kind: problem
type: answer
answer: 1,2,3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An $n \times n$ grid table is composed of $n^{2}$ cells, where $n$ is a positive integer. All edges of each cell are drawn, and the diagonals of some cells are also drawn, with at most one diagonal being drawn in any cell, and the diagonals (if any) of any two adjacent cells with a common edge are in different directions. Find all values of $n$ for which there exists a drawing method that allows one to start from the bottom-left vertex and draw the entire figure in one stroke (i.e., each edge or diagonal is traversed exactly once).

保留了原文的换行和格式，如上所示。
