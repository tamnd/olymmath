---
tag: B1D6EGHQH0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220631
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call a positive integer *challenging* if it can be expressed as $2^a(2^b+1)$, where $a,b$ are positive integers. Prove that if $X$ is a set of challenging numbers smaller than $2^n (n$ is a given positive integer) and $|X|\ge \frac{4}{3}(n-1)$, there exist two disjoint subsets $A,B\subset X$ such that $|A|=|B|$ and $\sum_{a\in A}a=\sum_{b \in B}b$.
