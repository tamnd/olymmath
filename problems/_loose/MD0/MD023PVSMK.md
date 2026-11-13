---
tag: MD023PVSMK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232431
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=198
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be a complete bipartite graph with partition sets $A$ and $B$ of sizes $km$ and $kn$, respectively. The edges of $G$ are colored in $k$ colors. Prove that there exists a monochromatic connected component with at least $m+n$ vertices (which means that there exists a color and a set of vertices, such that between any two of them, there is a path consisting of edges only in that color).
