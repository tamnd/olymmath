---
tag: RGJ0SMHRPB
kind: problem
type: answer
answer: '[\frac{n}{3}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97890
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a plane, there is a complete graph of order $n(\geq 3)$. We color its edges using three colors, and each color is used to color at least one edge. If, regardless of the initial coloring, we can always select $k$ edges in the complete graph, and change the colors of these $k$ edges to a given color among the three, such that the graph can also be connected by the edges of the given color, find the minimum value of $k$.
