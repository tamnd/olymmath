---
tag: K5YKZJGFF5
kind: problem
type: answer
answer: '[\frac{n^{2}}{4}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100741
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a natural number $n \geqslant 2$. Let $M$ be a subset of the set $\{(i, k) \mid i, k \in N, i < k \leqslant n\}$. It is known that if the pair $(i, k), i < k$, belongs to the set $M$, then any pair $(k, m), k < m$, does not belong to $M$. Find the maximum number of elements in the set $M$.
