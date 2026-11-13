---
tag: 382E6HHNFD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73987
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the set $A=\{1,2,3,4, \ldots, n\}$. A subset of $A$ is called hierarchical if it satisfies the following two properties:

- The subset must contain more than one number.
- There is a number in the subset that is equal to the sum of the other numbers in the subset.

We want to partition the set $A$ into hierarchical subsets.

a) For $n=13$, show that such a partition is not possible.

b) For $n=12$, show that such a partition is possible.
