---
tag: 8MZ7EG52GX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1352383
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15495
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2017
    source: hf-ai-mo-aops
    label: 2017 Hong Kong TST
---
Let $G$ be a simple graph with $n$ vertices and $m$ edges. Two vertices are called *neighbours* if there is an edge between them. It turns out the $G$ does not contain any cycles of length from 3 to $2k$ (inclusive), where $k\geq2$ is a given positive integer.

a) Prove that it is possible to pick a non-empty set $S$ of vertices of $G$ such that every vertex in $S$ has at least $\left\lceil \frac mn \right\rceil$ neighbours that are in $S$ . ( $\lceil x\rceil$ denotes the smallest integer larger than or equal to $x$ .)

b) Suppose a set $S$ as described in (a) is chosen. Let $H$ be the graph consisting of the vertices in $S$ and the edges between those vertices only. Let $v$ be a vertex of $H$ . Prove that at least $\left\lceil \left(\frac mn -1\right)^k \right\rceil$ vertices of $H$ can be reached by starting at $v$ and travelling across the edges of $H$ for at most $k$ steps. (Note that $v$ itself satisfies this condition, since it can be reached by starting at $v$ and travelling along the edges of $H$ for 0 steps.)
