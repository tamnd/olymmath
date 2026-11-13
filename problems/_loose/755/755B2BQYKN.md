---
tag: 755B2BQYKN
kind: problem
type: answer
answer: All positive integers n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0000.parquet#row=347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl
    source: hf-mathnet
    label: Baltic Way Baltic Way SHL
---
Let $n$ be a positive integer. In a triangular grid of side length $n$, one object is located at each node. The following steps are permitted: choose three nodes that are pairwise neighbours to each other and cyclicly interchange the objects at these nodes. For which $n$ is it possible to rotate the whole set of objects by $120^\circ$ with respect to the center of the grid?
