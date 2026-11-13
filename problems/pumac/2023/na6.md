---
tag: RT32T5ES9C
kind: problem
appearances:
  - at: pumac/2023/na6
    primary: true
  - at: pumac/2023/nb8
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
    url: https://artofproblemsolving.com/community/c6h3435013
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73452
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many positive integers $n \le \text{lcm}(1,2, \ldots, 100)$ have the property that $n$ gives different remainders when divided by each of $2,3, \ldots, 100$ ?
