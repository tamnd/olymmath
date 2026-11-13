---
tag: DQA2A9ZAVW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115854
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Try to fill in 16 non-zero numbers in a $4 \times 4$ grid, such that the sum of the numbers in each row, each column, and each diagonal (including the small diagonals that slant through 1, 2, or 3 cells, for a total of 14 diagonals) equals zero.
