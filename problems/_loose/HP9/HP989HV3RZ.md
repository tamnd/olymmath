---
tag: HP989HV3RZ
kind: problem
type: answer
answer: "3628800"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100703
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{105}$ be a permutation of $1,2, \cdots, 105$, satisfying: for any $m \in\{3,5,7\}$, for all $n$ such that $1 \leqslant n<n+m \leqslant 105$, we have $m \mid\left(a_{n+m}-a_{n}\right)$. Then the number of different permutations that meet the requirement is $ $ (answer with a specific number).
