---
tag: 1X6RDNS8MA
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134151
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A shape obtained by removing one unit square from a $2 \times 2$ grid is called an "L-shape". In an $8 \times 8$ grid, place $k$ L-shapes, each of which can be rotated, but each L-shape must cover exactly three unit squares of the grid, and any two L-shapes must not overlap. Additionally, no other L-shape can be placed in the grid besides these $k$ L-shapes. Find the minimum value of $k$.
