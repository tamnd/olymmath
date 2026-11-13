---
tag: QS68RTSFWY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240618
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the following triangular lattice distance of two vertices is length of the shortest path between them. Let $ A_{1},A_{2},\dots,A_{n}$ be constant vertices of the lattice. We want to find a vertex in the lattice whose sum of distances from vertices is minimum. We start from an arbitrary vertex. At each step we check all six neighbors and if sum of distances from vertices of one of the neighbors is less than sum of distances from vertices at the moment we go to that neighbor. If we have more than one choice we choose arbitrarily, as seen in the attached picture.

Obviusly the algorithm finishes
a) Prove that when we can not make any move we have reached to the problem's answer.
b) Does this algorithm reach to answer for each connected graph?
