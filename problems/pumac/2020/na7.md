---
tag: 47HSHN2766
kind: problem
appearances:
  - at: pumac/2020/na7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/PuMaC_Number_Theory_A_2020.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747862
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\phi (x, u)$ be the smallest positive integer $n$ so that $2^u$ divides $x^n + 95$ if it exists, or $0$ if no such positive integer exists. Determine $ \sum_{i=0}^{255} \phi(i, 8)$ .
