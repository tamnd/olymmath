---
tag: DJTJBJXC9C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91866
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ distinct points in $[-1,1]$: $x_{1}<x_{2}<\cdots<x_{n}(n \geqslant 2)$. Let $t_{k}(1 \leqslant k \leqslant n)$ be the product of the distances from point $x_{k}$ to all other points $x_{j}(j \neq k)$, prove that: $\sum_{k=1}^{n} \frac{1}{t_{k}} \geqslant 2^{n-2}$.
