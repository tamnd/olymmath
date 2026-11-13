---
tag: YM25HDNMEV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82061
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbb{N}$ and $P \in \mathbb{R}[X]$ of degree less than or equal to $n$ such that for all $x \in \mathbb{R}$, $P(x) \geqslant 0$.

We define $Q=P+P^{\prime}+P^{\prime \prime}+\cdots P^{(n)}$.

Show that for all $x \in \mathbb{R}, Q(x) \geqslant 0$.
