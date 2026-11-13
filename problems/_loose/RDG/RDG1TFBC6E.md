---
tag: RDG1TFBC6E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187682
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a regular hexagon with side 1. Inside the hexagon, take $m$ points such that no three points among the vertices and these $m$ points are collinear. The hexagon is divided into triangles, where each of the given $m$ points and each vertex of the hexagon is a vertex of a partitioning triangle. Two partitioning triangles do not have a common interior point. Prove that there exists a partitioning triangle whose area is not greater than $\frac{3 \sqrt{3}}{4(m+2)}$.
