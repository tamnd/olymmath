---
tag: 3T1AZZR8ZY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $T$ be a tree with$ n$ vertices. Choose a positive integer $k$ where $1 \le k \le n$ such that $S_k$ is a subset with $k$ elements from the vertices in $T$. For all $S \in S_k$, define $c(S)$ to be the number of component of graph from $S$ if we erase all vertices and edges in $T$, except all vertices and edges in $S$. Determine $\sum_{S\in S_k} c(S)$, expressed in terms of $n$ and $k$.
