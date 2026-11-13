---
tag: 6Y48SXHNB8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer such that there exists a positive integer that is less than $\sqrt{n}$ and does not divide $n$. Let $(a_1, . . . , a_n)$ be an arbitrary permutation of $1, . . . , n$. Let $a_{i1} < . . . < a_{ik}$ be its maximal increasing subsequence and let $a_{j1} > . . . > a_{jl}$ be its maximal decreasing subsequence.
Prove that tuples $(a_{i1}, . . . , a_{ik})$ and $(a_{j1}, . . . , a_{jl} )$ altogether contain at least one number that does not divide $n$.
