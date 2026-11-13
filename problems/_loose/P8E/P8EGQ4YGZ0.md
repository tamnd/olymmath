---
tag: P8EGQ4YGZ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: \mathbb{N} \longrightarrow \mathbb{Z}$ be a function such that

- For all integers $n>m \geqslant 0, n-m$ divides $f(n)-f(m)$.
- There exists a polynomial $P$ such that for all $n \in \mathbb{N},|f(n)|<P(n)$. Show that there exists a polynomial $Q$ such that $f(n)=Q(n)$ for all natural numbers $n$.
