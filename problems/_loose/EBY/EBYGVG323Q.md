---
tag: EBYGVG323Q
kind: problem
type: answer
answer: "112"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13520
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A cube is a vertex of a larger cube, in which case it has 3 neighbors.

Cases 2 and 4 are suitable. For each face of the cube, the number of cubes that satisfy case 2 is: $3 \times 3=9$. Since the cube has 6 faces, the total is 54 cubes. The cube has 8 vertices, so in total, Donut ate $54+8=62$ cubes.
