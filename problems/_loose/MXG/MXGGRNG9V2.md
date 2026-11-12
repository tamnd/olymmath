---
tag: MXGGRNG9V2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h3470627
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31352
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2021
    source: hf-ai-mo-aops
    label: 2021 Belarusian National Olympiad
---
Given a positive integer $n$ . An inversion of a permutation is the amount of pairs $(i,j)$ such that $i<j$ and the $i$ -th number is smaller than $j$ -th number in the permutation.
Prove that for every positive integer $k \leq n$ there exist exactly $\frac{n!}{k}$ permutations in which the inversion is divisible by $k$ .
