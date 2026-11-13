---
tag: E83EEWGF6M
kind: problem
type: answer
answer: n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Isabel wants to partition the set $\mathbb{N}$ of the positive integers into $n$ disjoint sets $A_{1}, A_{2}, \ldots, A_{n}$. Suppose that for each $i$ with $1\leq i\leq n$, given any positive integers $r, s\in A_{i}$ with $r\neq s$, we have $r+s\in A_{i}$. If $|A_{j}|=1$ for some $j$, find the greatest positive integer that may belong to $A_{j}$.
