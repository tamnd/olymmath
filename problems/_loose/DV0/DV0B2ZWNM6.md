---
tag: DV0B2ZWNM6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169828
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a connected graph with $n$ vertices, we have written a real number on each edge, which we call the value of the edge. The weight of any path in the graph is the value of the largest valued edge in it. For any vertices $x, y$ of the graph, let $f(x, y)$ denote the weight of the path with the smallest weight from $x$ to $y$. Prove that the function $f$ takes on at most $n-1$ different values.
