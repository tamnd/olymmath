---
tag: CKDDJPDBQZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109268
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an $n \times n$ grid, we say that cells are "adjacent" if they share a common edge. Initially, each cell contains +1. An operation on the grid consists of selecting one cell, leaving the number in this cell unchanged, and changing the sign of the numbers in all adjacent cells. Find all positive integers $n \geqslant 2$ such that it is possible to transform all numbers in the grid to -1 after a finite number of operations. $^{[2]}$
(2012, China Western Mathematical Olympiad)
