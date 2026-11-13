---
tag: Y9YSJN02RQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77907
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set $A$ of integers is said to be admissible if it satisfies the following property: for all $x, y \in A$ (not necessarily distinct), and for all $k \in \mathbb{Z}$, we have $x^{2} + k x y + y^{2} \in A$.

Determine all pairs of non-zero integers $(\mathrm{m}, \mathrm{n})$ such that the only admissible set containing both $m$ and $n$ is $\mathbb{Z}$.
