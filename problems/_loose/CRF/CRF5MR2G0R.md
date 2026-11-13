---
tag: CRF5MR2G0R
kind: problem
type: answer
answer: 4,6,8,10,12
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77835
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a $4 \times 4$ square grid.

Two distinct cells that share a common side are called neighbors. Initially, all cells are red. Subsequently, a cell can potentially change color and be either red or blue. Performing an operation on cell $c$ means simultaneously changing the color of $c$ and all its neighbors (red cells become blue and blue cells become red).

Give all values of $\mathrm{n}$ for which there exists a group of $\mathrm{n}$ distinct cells such that after performing an operation on each of these $n$ cells, one obtains a grid that is entirely blue.
