---
tag: ATMG22CNXB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233855
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $V$ be a set of eight points in $3\text{D}$ space that are the vertices of a cube with side length $1$. Compute the number of ways we can color the vertices in $V$ yellow or blue such that

- each vertex receives exactly one color, and [/*]

- there exists a point in $3\text{D}$ space whose distance to each yellow vertex is less than $1$ and whose distance to each blue vertex is greater than $1$. [/*]
