---
tag: MZ36FHSBRE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119748
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The 98th question: Given that $\mathrm{N}$ is a positive integer, initial state: in an $\mathrm{N} \times \mathrm{N}$ grid, each cell is filled with 0. Perform one operation: arbitrarily select a row or a column, erase all the numbers in it, and then fill in the numbers $1, 2, \ldots, \mathrm{N}$ in any order. After any finite number of operations, find the maximum possible sum of all the numbers in the grid.
