---
tag: DK6KS4ZSH2
kind: problem
type: answer
answer: (2^k-1)^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89436
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ and $k$ be natural numbers and $S=\{1,2, \ldots, n\}$.

a) Determine the number of all ordered $k$-tuples $\left(A_{1}, A_{2}, \ldots, A_{k}\right)$ where $A_{i}, i=1, \ldots, k$ are pairwise disjoint subsets of $S$ such that $\bigcup_{i=1}^{k} A_{i}=S$.

b) Determine the number of all ordered $k$-tuples $\left(A_{1}, A_{2}, \ldots, A_{k}\right)$ where $A_{i}, i=1, \ldots, k$ are subsets (not necessarily disjoint) of $S$ such that $\bigcup_{i=1}^{k} A_{i}=S$.
