---
tag: MV2EJMYS6F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84423
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be a graph with $n$ vertices and $T$ the number of triangles in $G$. Show that:

$$
T \geqslant \frac{1}{3} \sum_{\{u, v\} \in A}(d(u)+d(v)-n)
$$

Deduce another proof of the theorem.

Theorem 3.2.4 (Turan).

The number of edges in a graph with $n$ vertices without $p$-cliques is bounded by:

$$
\left(1-\frac{1}{p-1}\right) \frac{n^{2}}{2}
$$

Any graph with $n$ vertices without $p$-cliques and with a maximum number of edges is complete $(p-1)$-partite.
