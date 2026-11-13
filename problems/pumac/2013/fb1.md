---
tag: GX2FXRV1BE
kind: problem
appearances:
  - at: pumac/2013/fb1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_FinalsB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h562980
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1=2013$ and $a_{n+1} = 2013^{a_n}$ for all positive integers $n$ . Let $b_1=1$ and $b_{n+1}=2013^{2012b_n}$ for all positive integers $n$ . Prove that $a_n>b_n$ for all positive integers $n$ .
