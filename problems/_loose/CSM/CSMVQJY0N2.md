---
tag: CSMVQJY0N2
kind: problem
type: answer
answer: '{\begin{pmatrix}n\text{if}k=n\text{or}2k-1=n\\2(n-k+1)\text{otherwise}\end{pmatrix}0}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(EGMO 2016 P5) Let $k, n$ be integers such that $2 \leq k \leq n \leq 2 k-1$ and consider an $n \times n$ grid. As long as possible, we add $1 \times k$ or $k \times 1$ rectangles to the grid so that each rectangle covers exactly $k$ cells and no two rectangles overlap. We stop when this operation is no longer possible. Find, in terms of $n$ and $k$, the minimum number of rectangles in a final configuration.
