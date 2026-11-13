---
tag: H8FYEXJWPJ
kind: problem
type: answer
answer: k \geq \lceil \log_2(n) \rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231503
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a set with $n$ elements. Take a positive integer $k$. Let $A_1, A_2, \ldots, A_k$ be any distinct subsets of $S$. For each $i$ take $B_i = A_i$ or $B_i = S - A_i$. Find the smallest $k$ such that we can always choose $B_i$ so that $\bigcup_{i=1}^k B_i = S$, no matter what the subsets $A_i$ are.
