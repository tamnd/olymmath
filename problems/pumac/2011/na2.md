---
tag: TGDC8PW2BY
kind: problem
appearances:
  - at: pumac/2011/na2
    primary: true
  - at: pumac/2011/nb4
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920866
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7051
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
What is the largest positive integer $n < 1000$ for which there is a positive integer $m$ satisfying $$\text{lcm}(m,n) = 3m \times \gcd(m,n)?$$
