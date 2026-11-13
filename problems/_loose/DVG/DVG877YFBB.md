---
tag: DVG877YFBB
kind: problem
type: answer
answer: \textrm{diam}(G) \leq 34
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be a connected simple graph. When we add an edge to $G$ (between two unconnected vertices), then using at most $17$ edges we can reach any vertex from any other vertex. Find the maximum number of edges to be used to reach any vertex from any other vertex in the original graph, i.e. in the graph before we add an edge.
