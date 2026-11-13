---
tag: RY0VAWHMAV
kind: problem
type: answer
answer: 8m(\in{Z}_{+},\geqslant2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134685
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $n$ such that the set $S=\{1,2, \cdots, n\}$ can be partitioned into two disjoint subsets $A$ and $B$ of equal size, satisfying:
$$
\sum_{k \in A} k=\sum_{k \in B} k, \sum_{k \in A} k^{2}=\sum_{k \in B} k^{2}, \sum_{k \in A} k^{3}=\sum_{k \in B} k^{3} .
$$
