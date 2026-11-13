---
tag: K2EPR1CR11
kind: problem
type: answer
answer: f(n) = 2^{n-1} + n + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240830
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say three sets $A_1, A_2, A_3$ form a triangle if for each $1 \leq i,j \leq 3$ we have $A_i \cap A_j \neq \emptyset$, and $A_1 \cap A_2 \cap A_3 = \emptyset$. Let $f(n)$ be the smallest positive integer such that any subset of $\{1,2,3,\ldots, n\}$ of the size $f(n)$ has at least one triangle. Find a formula for $f(n)$.
