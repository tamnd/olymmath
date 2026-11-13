---
tag: 57VVAT4AGW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214717
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An ant begins at a vertex of a convex regular icosahedron (a figure with 20 triangular faces and 12 vertices). The ant moves along one edge at a time. Each time the ant reaches a vertex, it randomly chooses to next walk along any of the edges extending from that vertex (including the edge it just arrived from). Find the probability that after walking along exactly six (not necessarily distinct) edges, the ant finds itself at its starting vertex.
