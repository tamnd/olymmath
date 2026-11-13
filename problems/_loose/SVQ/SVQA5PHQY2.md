---
tag: SVQA5PHQY2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242577
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each integer coordinates are colored with one color and at least 5 colors are used to color every integer coordinates. Two integer coordinates $(x, y)$ and $(z, w)$ are colored in the same color if $x-z$ and $y-w$ are both multiples of 3. Prove that there exists a line that passes through exactly three points when five points with different colors are chosen randomly.
