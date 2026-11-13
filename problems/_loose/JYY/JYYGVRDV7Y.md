---
tag: JYYGVRDV7Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133553
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $k \in \mathbb{N}$ and a vertex sequence $v_{1}, \ldots, v_{n}$ of a graph $G$, prove: $G$ contains a path decomposition $\left(V_{1}, \ldots, V_{n}\right)$ of width $\leqslant k$ such that for all $i$ we have $v_{i} \in V_{i}$, if and only if $G$ does not contain a transformation $\mathcal{P}$ of $\left(v_{1}, \ldots, v_{n}\right)$ such that $|\mathcal{P}|>k$.
