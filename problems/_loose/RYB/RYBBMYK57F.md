---
tag: RYBBMYK57F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 BMT
    url: https://artofproblemsolving.com/community/c6h3278471
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70508
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2023
    source: hf-ai-mo-aops
    label: 2023 BMT
---
Define a family of functions $S_k(n)$ for positive integers $n$ and $k$ by the following two rules: $$ S_0(n) = 1, $$ $$ S_k(n) = \sum_{d | n} dS_{k-1}(d). $$ Compute the remainder when $S_{30}(30)$ is divided by $1001$ .
