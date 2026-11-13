---
tag: YNMYZS2Y45
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is said that an edge coloring is proper if and only if there do not exist two edges of the same color with a common endpoint.

Given a graph $G$, we denote $\chi^{\prime}(G)$ as the smallest number of colors needed to properly edge color $G$.

Show that if $G$ is a bipartite graph, then $\chi^{\prime}(G)=\Delta(G)$.
