---
tag: 6M644QBMYA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220630
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are n lines drawn on a plane; no two lines are parallel to each other, and no three lines meet at a single point.

Those lines would partition the plane down into many 'area's. Suppose we select one point from each area. Also, should two areas share a common side, we connect the two points belonging to the respective areas with a line.

A graph consisted of points and lines will have been made. Find all possible 'n' that will make a hamiltonian circuit exist for the given graph
