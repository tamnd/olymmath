---
tag: EJ8BEED2WR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247472
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=456
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a nonnegative integer and $M =\{n^3, n^3+1, n^3+2, ..., n^3+n\}$.
Consider $A$ and $B$ two nonempty, disjoint subsets of $M$ such that the sum of elements of the set $A$ divides the sum of elements of the set $B$. Prove that the number of elements of the set $A$ divides the number of elements of the set $B$.
