---
tag: MTAYV547X5
kind: problem
type: answer
answer: "5000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214637
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A coloring of all plane points with coordinates belonging to the set $S=\{0,1,\ldots,99\}$ into red and white colors is said to be *critical* if for each $i,j\in S$ at least one of the four points $(i,j),(i + 1,j),(i,j + 1)$ and $(i + 1, j + 1)$ $(99 + 1\equiv0)$ is colored red. Find the maximal possible number of red points in a critical coloring which loses its property after recoloring of any red point into white.
