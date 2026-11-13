---
tag: FCC8EPPCAQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165746
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be a connected graph with $k$ edges. Prove that the edges can be numbered with the numbers $1,2,3, \ldots, k$ in such a way that for every vertex from which at least two edges emanate, the greatest common divisor of the numbers assigned to all edges emanating from that vertex is 1.

(A graph is a set of points called vertices, some pairs of which are connected by edges. Between any two different vertices $u, v$, there is at most one edge. The graph $G$ is called connected if for any two different vertices $x, y$, there exists a sequence of vertices $x=v_{0}, v_{1}, v_{2}, \ldots, v_{m}=y$ such that every pair of vertices $v_{i}, v_{i+1}(0 \leqq i<m)$ is connected by an edge.)
