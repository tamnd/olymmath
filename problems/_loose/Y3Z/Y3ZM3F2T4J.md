---
tag: Y3ZM3F2T4J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89788
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N \geqslant 3$ be an odd natural number. Initially, the number 0 is in each cell of an $N \times N$ table. In a single move, two cells that share a side are chosen, and the numbers in both cells are either increased by 1 or decreased by 1.

If after $K$ moves the sums of the numbers in each row and each column of the table are equal, prove that $K$ is an even number.
