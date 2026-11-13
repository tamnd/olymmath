---
tag: X8YXYNM123
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80675
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n \geqslant 1$, Ariane numbered the $n$ vertices of a tree from 1 to $n$ in an arbitrary order. Then, still in an arbitrary order, she considers the $n-1$ edges of the tree one by one and, for each of them, swaps the numbers of its two vertices.

This process defines a permutation $\pi$ of $\{1,2, \ldots, n\}$ such that the vertex whose initial number was $k$ is now numbered $\pi(k)$.

Prove that the permutation $\pi$ contains a single cycle.
