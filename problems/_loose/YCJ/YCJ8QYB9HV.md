---
tag: YCJ8QYB9HV
kind: problem
type: answer
answer: n^{2}\mathrm{C}_{-1}^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135627
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $m, n$ are positive integers, $A_{1}, A_{2}, \cdots, A_{m}$ are all sets containing $n$ positive integer elements, and these sets are pairwise disjoint. Additionally, any element in $A_{i}$ cannot be divisible by any element in $A_{i+1}$ (the index $i$ is taken modulo $m$), where $i=1,2, \cdots, m$. Find the maximum number of ordered pairs $(a, b)$, where $a, b$ are elements from different sets $A_{i}$, and $a \mid b$.
