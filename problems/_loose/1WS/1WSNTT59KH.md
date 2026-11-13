---
tag: 1WSNTT59KH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81383
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $E$ be a finite (non-empty) set. Find all functions $f: \mathcal{P}(E) \rightarrow \mathbb{R}$ satisfying the following two properties:

( for all subsets $A$ and $B$ of $E, f(A \cup B) + f(A \cap B) = f(A) + f(B)$

for any bijection $\sigma: E \rightarrow E$ and any subset $A$ of $E, f(\sigma(A)) = f(A)$.
