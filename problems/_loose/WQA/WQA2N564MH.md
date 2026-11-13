---
tag: WQA2N564MH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119782
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Figure 1 is a shape composed of several regular hexagons, with a total of 2018 vertices.

Two players, A and B, take turns coloring these vertices: First, A selects a vertex and colors it yellow, then B selects an uncolored vertex and colors it green; next, A selects another uncolored vertex and colors it yellow, and after A's turn, B selects another uncolored vertex and colors it green, and so on. When all the vertices are colored, if there exists a monochromatic equilateral triangle (three vertices of the same color forming an equilateral triangle), A wins; otherwise, B wins. Question: Does either A or B have a winning strategy?
