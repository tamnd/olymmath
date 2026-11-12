---
tag: N6VQPFANFY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a tetrahedron $ A_{1} A_{2} A_{3} A_{4} $ and some point $ P $. For each edge $ A_{i} A_{j} $, consider the plane that is symmetric to the plane $ P A_{i} A_{j} $ with respect to the bisector plane of the dihedral angle at the edge $ A_{i} A_{j} $. Prove that either all these 6 planes intersect at one point, or they are all parallel to one line.
