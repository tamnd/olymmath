---
tag: DPMXV4A61K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a rectangle with length $6$ and height $4$. A rectangle with length $3$ and height $1$ is placed inside the larger rectangle such that it is distance $1$ from the bottom and leftmost sides of the larger rectangle.
We randomly select one point from each side of the larger rectangle, and connect these $4$ points to form a quadrilateral. What is the probability that the smaller rectangle is strictly contained within that quadrilateral?
