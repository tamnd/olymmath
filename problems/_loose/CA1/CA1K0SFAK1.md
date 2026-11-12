---
tag: CA1K0SFAK1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26577
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a closed spatial broken line with vertices $A_{1}, A_{2}, \ldots, A_{n}$, where each segment intersects a fixed sphere at two points, and all vertices of the broken line lie outside the sphere. These points divide the broken line into $3 n$ segments. It is known that the segments adjacent to vertex $A_{1}$ are equal to each other.

The same is true for vertices $A_{2}, A_{3}, \ldots, A_{n-1}$. Prove that the segments adjacent to vertex $A_{n}$ are also equal to each other.
