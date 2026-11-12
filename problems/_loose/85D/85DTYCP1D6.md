---
tag: 85DTYCP1D6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 BMT
    url: https://artofproblemsolving.com/community/c6h3278448
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70494
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2023
    source: hf-ai-mo-aops
    label: 2023 BMT
---
Nikhil constructs a list of all polynomial pairs $(a(x), b(x))$ with real coefficients such that $a(x)$ has higher degree than $b(x)$ and $a(x)^2 + b(x)^2 = x^{10} + 1$ . Danielle takes Nikhil's list and adds all polynomial pairs that satisfy the same conditions but have complex coefficients. If Nikhil's original list had $N$ pairs and Danielle added $D$ pairs, compute $D - N$ .
