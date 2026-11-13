---
tag: QA4H272F80
kind: problem
appearances:
  - at: pumac/2022/na4
    primary: true
  - at: pumac/2022/nb6
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
    url: https://artofproblemsolving.com/community/c6h3444984
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of ordered pairs $(x,y)$ of integers with $0 \le x < 2023$ and $0 \le y < 2023$ such that $y^3 \equiv x^2 \pmod{2023}.$
