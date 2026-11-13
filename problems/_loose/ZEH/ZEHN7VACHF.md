---
tag: ZEHN7VACHF
kind: problem
type: answer
answer: "4028"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216062
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be a simple connected graph with $2016$ vertices and $k$ edges. We want to choose a set of vertices where there is no edge between them and delete all these chosen vertices (we delete both the vertices and all edges of these vertices) such that the remaining graph becomes unconnected. If we can do this task no matter how these $k$ edges are arranged (by making the graph connected), find the maximal value of $k$.
