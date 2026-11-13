---
tag: CQ8T32QNA7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127962
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Color each edge of a complete graph $G$ of order 2015 with either red or blue. For any two-element subset $\{u, v\}$ of the vertex set $V$ of graph $G$, define
$$
L(u, v)=\{u, v\} \cup\{w \in V \mid \text { the triangle with vertices } u, v, w \text { has exactly two red edges}\}.

Prove: When $\{u, v\}$ ranges over all two-element subsets of the vertex set $V$, at least 120 different sets $L(u, v)$ can be obtained.
