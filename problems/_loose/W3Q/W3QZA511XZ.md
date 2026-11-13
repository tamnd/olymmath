---
tag: W3QZA511XZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171195
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We walk on the vertices of a graph as follows: from one vertex, we only step to a vertex that is adjacent to it (connected by an edge), and we visit each vertex at most once. Let's call a graph "inevitably traversable" if, no matter how we walk on its vertices (in the aforementioned sense), we will eventually visit all vertices. Let's find the inevitably traversable graphs.
