---
tag: YJSXWVVVD1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 CMIMC Team
    url: https://artofproblemsolving.com/community/c6h3557419
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2025
    source: hf-ai-mo-aops
    label: 2025 CMIMC Team
---
In a $2024 \times 2024$ grid of squares, each square is colored either black or white. An ant starts at some black square in the grid and starts walking parallel to the sides of the grid. During this walk, it can choose (not required) to turn $90^\circ$ clockwise or counterclockwise if it is currently on a black square, otherwise it must continue walking in the same direction.

A coloring of the grid is called *simple* if it is **not** possible for the ant to arrive back at its starting location after some time. How many simple colorings of the grid are maximal, in the sense that adding any black square results in a coloring that is not simple?
