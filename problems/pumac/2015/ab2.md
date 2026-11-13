---
tag: 902NWPWN6C
kind: problem
appearances:
  - at: pumac/2015/ab2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_AlgebraB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1165937
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12952
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a function which takes in $0, 1, 2$ and returns $0, 1, $ or $2$ . The values need not be distinct: for instance we could have $f(0) = 1, f(1) = 1, f(2) = 2$ . How many such functions are there which satisfy $$f(2) + f(f(0)) + f(f(f(1))) = 5?$$
