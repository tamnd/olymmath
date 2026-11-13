---
tag: T3ECS5GKDT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M$ be an arbitrary positive real number greater than $1$, and let $a_1,a_2,...$ be an infinite sequence of real numbers with $a_n\in [1,M]$ for any $n\in \mathbb{N}$. Show that for any $\epsilon\ge 0$, there exists a positive integer $n$ such that $$\frac{a_n}{a_{n+1}}+\frac{a_{n+1}}{a_{n+2}}+\cdots+\frac{a_{n+t-1}}{a_{n+t}}\ge t-\epsilon$$ holds for any positive integer $t$.
