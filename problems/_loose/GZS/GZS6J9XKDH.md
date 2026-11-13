---
tag: GZS6J9XKDH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240839
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a subset $ S$ of vertices of graph $ G$, let $ \Lambda(S)$ be the subset of all edges of $ G$ such that at least one of their ends is in $ S$. Suppose that $ G$ is a graph with $ m$ edges. Let $ d^*: V(G)\longrightarrow\mathbb N\cup\{0\}$ be a function such that
a) $ \sum_{u}d^*(u)=m$.
b) For each subset $ S$ of $ V(G)$: $$ \sum_{u\in S}d^*(u)\leq|\Lambda(S)|$$
Prove that we can give directions to edges of $ G$ such that for each edge $ e$, $ d^+(e)=d^*(e)$.
