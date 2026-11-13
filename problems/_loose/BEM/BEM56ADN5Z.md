---
tag: BEM56ADN5Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be a graph with $n$ vertices and $a$ edges. A $k$-clique is a subgraph with $k$ vertices such that every pair of vertices is connected by an edge. Show that if $G$ does not contain a $k$-clique then:

$$
a \leq \frac{k-2}{k-1} \frac{n^{2}}{2}
$$
