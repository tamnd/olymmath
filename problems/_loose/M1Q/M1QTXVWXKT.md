---
tag: M1QTXVWXKT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261518
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a grid of all lattice points $(m, n)$ with $m, n$ between $1$ and $125$. There exists a "path" between two lattice points $(m_1, n_1)$ and $(m_2, n_2)$ on the grid if $m_1n_1 = m_2n_2$ or if $m_1/n_1 = m_2/n_2$. For how many lattice points $(m, n)$ on the grid is there a sequence of paths that goes from $(1, 1)$ to $(m, n$)?
