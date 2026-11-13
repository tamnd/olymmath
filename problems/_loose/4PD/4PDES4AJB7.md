---
tag: 4PDES4AJB7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215711
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a simple graph, there are two disjoint set of vertices $A$ and $B$ where $A$ has $k$ and $B$ has $2016$ vertices. Four numbers are written to each vertex using the colors red, green, blue and black. There is no any edge at the beginning. For each vertex in $A$, we first choose a color and then draw all edges from this vertex to the vertices in $B$ having a larger number with the chosen color. It is known that for each vertex in $B$, the set of vertices in $A$ connected to this vertex are different. Find the minimal possible value of $k$.
