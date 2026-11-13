---
tag: 6VKA1HGW2M
kind: problem
appearances:
  - at: pumac/2007/fb3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2007 official paper
    url: https://pumac.princeton.edu/s/PUMaC2007_FinalsB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h506123
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73134
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the minimum number of colors necessary to color the integers from $1$ to $2007$ such that if distinct integers $a$ , $b$ , and $c$ are the same color, then $a \nmid b$ or $b \nmid c$ .
