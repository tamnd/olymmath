---
tag: ENPS8WATXM
kind: problem
appearances:
  - at: pumac/2012/na5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927416
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call a positive integer $x$ a leader if there exists a positive integer $n$ such that the decimal representation of $x^n$ starts (not ends) with $2012$ . For example, $586$ is a leader since $586^3 =201230056$ . How many leaders are there in the set $\{1, 2, 3, ..., 2012\}$ ?
