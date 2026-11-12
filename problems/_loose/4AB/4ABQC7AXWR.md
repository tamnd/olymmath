---
tag: 4ABQC7AXWR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=18860
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's consider the mathematicians' acquaintance graph. By condition, this graph is chordal, i.e., any cycle of 4 or more vertices contains a chord (a pair of adjacent vertices not adjacent in the cycle). We will prove that for a chordal graph $G$, the expression $f(G):=c_{1}-c_{2}+c_{3}-\ldots$, where $c_{i}$ is the number of cliques in $G$ with $i$ vertices, equals the number $k(G)$ of connected components of the graph $G$.
