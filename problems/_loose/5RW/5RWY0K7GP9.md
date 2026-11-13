---
tag: 5RWY0K7GP9
kind: problem
type: answer
answer: "29"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266415
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each of the cells of a $7 \times 7$ grid is painted with a color chosen randomly and independently from a set of $N$ fixed colors. Call an edge hidden if it is shared by two adjacent cells in the grid that are painted the same color. Determine the least $N$ such that the expected number of hidden edges is less than $3$.
