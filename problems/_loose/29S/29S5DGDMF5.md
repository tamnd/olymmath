---
tag: 29S5DGDMF5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be a graph and, for any vertex $x$ of $G$, let $d(x)$ be its degree, i.e., the number of neighbors of this vertex in the graph. We say that a set $A$ of vertices of $G$ is independent if it does not contain two adjacent vertices.

Show that there exists an independent set of size greater than or equal to:

$$
\sum_{x} \frac{1}{1+d(x)}
$$
