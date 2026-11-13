---
tag: KBSM43KD6W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243672
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. A grid of $n\times n$ has some black-colored cells. Drini can color a cell if at least three cells that share a side with it are also colored black. Drini discovers that by repeating this process, all the cells in the grid can be colored. Prove that if there are initially $k$ colored cells, then $$k\geq \frac{n^2+2n}{3}.$$
