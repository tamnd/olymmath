---
tag: PQKWEK8C1C
kind: problem
type: answer
answer: \left\lfloor \frac{(n+2)^2}{4} \right\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232359
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be a directed graph with infinitely many vertices. It is known that for each vertex the outdegree is greater than the indegree. Let $O$ be a fixed vertex of $G$. For an arbitrary positive number $n$, let $V_{n}$ be the number of vertices which can be reached from $O$ passing through at most $n$ edges ( $O$ counts). Find the smallest possible value of $V_{n}$.
