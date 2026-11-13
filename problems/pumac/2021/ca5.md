---
tag: 5PT1BABQNJ
kind: problem
appearances:
  - at: pumac/2021/ca5
    primary: true
  - at: pumac/2021/cb7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Combo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2825139
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A Princeton slot machine has $100$ pictures, each equally likely to occur. One is a picture of a tiger. Alice and Bob independently use the slot machine, and each repeatedly makes independent plays. Alice keeps playing until she sees a tiger, at which point she stops. Similarly, Bob keeps playing until he sees a tiger. Given that Bob plays twice as much as Alice, let the expected number of plays for Alice be $\tfrac{a}{b}$ with $a, b$ relatively prime positive integers. Find the remainder when $a + b$ is divided by $1000$ .
