---
tag: NRVA2HFAJT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h1799448
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60578
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2019
    source: hf-ai-mo-aops
    label: 2019 Switzerland - Final Round
---
Find all periodic sequences $x_1,x_2,\dots$ of strictly positive real numbers such that $\forall n \geq 1$ we have $$ x_{n+2}=\frac{1}{2} \left( \frac{1}{x_{n+1}}+x_n \right) $$
