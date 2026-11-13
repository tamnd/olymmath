---
tag: JW718ARRM4
kind: problem
appearances:
  - at: pumac/2022/na8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Number_Theory_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3444994
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73394
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $n \ge 2,$ let $\omega(n)$ denote the number of distinct prime factors of $n.$ We set $\omega(1) = 0.$ Compute the absolute value of $$ \sum_{n=1}^{160} (-1)^{\omega(n)} \left\lfloor \frac{160}{n} \right\rfloor. $$
