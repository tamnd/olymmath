---
tag: X0E0WPJJ4V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider some graph $G$ with $2019$ nodes. Let's define *inverting* a vertex $v$ the following process: for every other vertex $u$, if there was an edge between $v$ and $u$, it is deleted, and if there wasn't, it is added. We want to minimize the number of edges in the graph by several *invertings* (we are allowed to invert the same vertex several times). Find the smallest number $M$ such that we can always make the number of edges in the graph not larger than $M$, for any initial choice of $G$.

*Proposed by Arsenii Nikolaev, Anton Trygub (Ukraine)*
