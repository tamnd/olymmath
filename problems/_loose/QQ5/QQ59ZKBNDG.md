---
tag: QQ59ZKBNDG
kind: problem
type: answer
answer: 2 \binom{n+1}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231745
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each of the $n^2$ cells of an $n \times n$ grid is colored either black or white. Let $a_i$ denote the number of white cells in the $i$-th row, and let $b_i$ denote the number of black cells in the $i$-th column. Determine the maximum value of $\sum_{i=1}^n a_ib_i$ over all coloring schemes of the grid.

*Proposed by Alex Zhai*
