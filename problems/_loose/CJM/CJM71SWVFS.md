---
tag: CJM71SWVFS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118615
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
- Given a countable sequence of natural number sequences $\sigma^{i}=s_{1}^{i}, s_{2}^{i}, \ldots(i \in \mathbb{N})$, find a sequence $\sigma=s_{1}, s_{2}, \ldots$ such that it will eventually dominate each $\sigma^{i}$, i.e., for each $i$, there exists an $n(i)$ such that for all $n \geqslant n(i)$ we have $s_{n}>s_{n}^{i}$.
