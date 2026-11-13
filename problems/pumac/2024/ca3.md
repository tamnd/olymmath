---
tag: A8WDA9YA2P
kind: problem
appearances:
  - at: pumac/2024/ca3
    primary: true
  - at: pumac/2024/cb5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2024 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2024_Combinatorics_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3450608
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73469
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Joseph chooses a permutation of the numbers $1, 2, 3, 4, 5, 6$ uniformly at random. Then, he goes through his permutation, and deletes the numbers which are not the maximum among each of the preceding numbers. For example, if he chooses the permutation $3, 2, 4, 5, 1, 6,$ then he deletes $2$ and $1,$ leaving him with $3, 4, 5, 6.$ The expected number of numbers remaining can be expressed as $m/n$ for relatively prime positive integers $m$ and $n.$ Find $m + n.$
