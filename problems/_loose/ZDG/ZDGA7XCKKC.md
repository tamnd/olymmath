---
tag: ZDGA7XCKKC
kind: problem
type: answer
answer: (n, k)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229429
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be a simple connected graph. Each edge has two phases, which is either blue or red. Each vertex are switches that change the colour of every edge that connects the vertex. All edges are initially red. Find all ordered pairs $(n,k)$, $n\ge 3$, such that:

a) For all graph $G$ with $n$ vertex and $k$ edges, it is always possible to perform a series of switching process so that all edges are eventually blue.

b) There exist a graph $G$ with $n$ vertex and $k$ edges and it is possible to perform a series of switching process so that all edges are eventually blue.
