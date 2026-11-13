---
tag: GCS8T2WGGQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three houses need to be connected to water, gas, and electricity. Draw a graph to illustrate a possible configuration. Do you think it's possible to manage without any of the different pipes crossing each other?

A path between two vertices $A$ and $B$ is a sequence of edges connecting $A$ and $B$. A graph is said to be connected if any two vertices can always be connected by a path. In other words, for any vertices $A$ and $B$, an ant placed at $A$ can reach $B$ by walking only along the edges of the graph. A path that traverses at least three distinct edges and returns to itself is called a cycle. A tree is a connected graph without cycles.
