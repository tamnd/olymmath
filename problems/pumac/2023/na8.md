---
tag: C8A4RQG8S4
kind: problem
appearances:
  - at: pumac/2023/na8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Number_Theory_A_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3435037
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73454
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S_0 = 0, S_1 = 1,$ and for $n \ge 2,$ let $S_n = S_{n-1}+5S_{n-2}.$ What is the sum of the five smallest primes $p$ such that $p \mid S_{p-1}$ ?
