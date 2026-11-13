---
tag: F4V1J51FCK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126875
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is an $n \times n$ grid $(n \geqslant 3)$. Initially, you are allowed to choose any $n-1$ cells and color them black. Then, color black any cell that is adjacent to at least two black cells.

Prove that no matter how the initial $n-1$ cells are chosen, it is impossible to color all the cells in the grid black using this rule.
