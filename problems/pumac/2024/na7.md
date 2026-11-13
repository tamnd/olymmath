---
tag: AEDA850Z06
kind: problem
appearances:
  - at: pumac/2024/na7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2024 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2024_NT_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3450692
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73493
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call a $2$ -by- $2$ grid a *perfectly perfect square* if it contains distinct positive integers such that the sum of each row is a perfect square and the sum of each column is a perfect square. Define $f(n)$ to be the number of perfectly perfect squares whose entries sum to $n.$ Let $m$ be the smallest integer such that $f(m) > m.$ Find $f(m).$
