---
tag: 8GZPHGCQ17
kind: problem
type: answer
answer: 118>100
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a cubic box with edge length $10 \text{cm}$, consider and mark all those lines that pass through the interior of the cube, are parallel to an edge of the cube, and have integer (measured in cm) distances from the two faces that contain this edge.

Prove:

No matter how the box is completely filled with 250 cuboid building blocks of dimensions $2 \text{cm} \times 2 \text{cm} \times 1 \text{cm}$, there will always be at least 100 marked lines that do not pierce any of the building blocks.

A building block is considered pierced exactly when the line contains interior points of the block.
