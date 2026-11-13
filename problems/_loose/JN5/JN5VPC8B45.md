---
tag: JN5VPC8B45
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81955
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Proof of Turán's theorem)

a Prove that any graph without a $k$-clique and with a maximum number of edges is a complete $(k-1)$-partite graph. In other words, the graph can be partitioned into $k-1$ subsets of vertices such that each vertex is connected to all others except those in its own subset.

b Prove Turán's theorem in the case of a complete $(k-1)$-partite graph.

c Let $G$ be a graph with $n$ vertices of degrees $d_{1}, \ldots, d_{n}$. Show that the maximum size of a clique in $G$ is bounded below by

$$
\sum_{i=1}^{n} \frac{1}{n-d_{i}}
$$

Deduce a proof of Theorem 6.
