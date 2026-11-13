---
tag: M7BDK7ZG1E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95232
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In space, given eight points, no four of which are coplanar, each pair of points is connected by a directed line segment, forming a "directed graph". If, starting from any point in the directed graph and moving along the marked direction, it is impossible to return to the starting point, then the graph is called a "good graph". Prove:
(1) There exists a directed graph such that changing the direction of no more than seven edges in the graph cannot make it a good graph;
(2) For any directed graph, it is possible to change the direction of no more than eight edges in the graph to make it a good graph.
