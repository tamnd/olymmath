---
tag: SCFH2GN348
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102560
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $n$ is a positive even number, graph $G$ has $n$ vertices, $\frac{n^{2}}{4}$ edges, and no loops or multiple edges (any two vertices are either connected by an edge or not connected). An unordered pair of distinct vertices $(x, y)$ is called "friendly" if they are adjacent to the same vertex (there exists a vertex $z$ such that $x z$ and $y z$ are both edges). Prove: Graph $G$ contains at least $2 \mathrm{C}_{\frac{n}{2}}^{2}$ friendly unordered pairs.
