---
tag: YFRZ30FCJF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269276
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(x_n)_{n\ge2}$ be a sequence of real numbers such that $x_2>0$ and $x_{n+1}=-1+\sqrt[n]{1+nx_n}$ for $n\ge2$. Find

(a) $\lim_{n\to\infty}x_n$,
(b) $\lim_{n\to\infty}nx_n$.
