---
tag: 8XTSBZJX46
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261680
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many complete directed graphs with vertex set $V=\{1,2,3,4,5,6\}$ contain no $3$-cycles?

A graph is $\textit{directed}$ if all edges have a direction (e.g. from $u$ to $v$ rather than between $u$ and $v$), and $\textit{complete}$ if every pair of vertices has an edge between them. Further, a $\textit{3-cycle}$ in a directed graph is a triple $(u,v,w)$ of vertices such that there are edges from $u$ to $v$, $v$ to $w$, and $w$ to $u$.
