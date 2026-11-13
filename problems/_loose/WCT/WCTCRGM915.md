---
tag: WCTCRGM915
kind: problem
type: answer
answer: k = \left\lceil \frac{3n}{2} + \frac{1}{2} \right\rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205428
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ n \geq 3$ be an odd integer. We denote by $ [-n,n]$ the set of all integers greater or equal than $ -n$ and less or equal than $ n$.
Player $ A$ chooses an arbitrary positive integer $ k$, then player $ B$ picks a subset of $ k$ (distinct) elements from $ [-n,n]$. Let this subset be $ S$.
If all numbers in $ [-n,n]$ can be written as the sum of exactly $ n$ distinct elements of $ S$, then player $ A$ wins the game. If not, $ B$ wins.
Find the least value of $ k$ such that player $ A$ can always win the game.
