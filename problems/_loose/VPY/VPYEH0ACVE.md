---
tag: VPYEH0ACVE
kind: problem
type: answer
answer: (2, 2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\phi(n)$ be the number of positive integers less than $n$ that are relatively prime to $n$, where $n$ is a positive integer. Find all pairs of positive integers $(m,n)$ such that $$2^n + (n-\phi(n)-1)! = n^m+1.$$
