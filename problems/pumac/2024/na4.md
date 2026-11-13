---
tag: Q1GWAV490K
kind: problem
appearances:
  - at: pumac/2024/na4
    primary: true
  - at: pumac/2024/nb6
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
    url: https://artofproblemsolving.com/community/c6h3450685
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73490
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $r(m)$ be the number of positive integers a less than or equal to $m$ where $\gcd(a, m)$ is prime. Find the sum of all positive integers $m < 300$ such that $r(m) = \varphi(m),$ where $\varphi(m)$ denotes the number of positive integers $a$ less than $m$ where $\gcd(a, m) = 1.$
