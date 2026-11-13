---
tag: VBVHQPA95A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Argentina National Olympiad Level 2
    url: https://artofproblemsolving.com/community/c6h3467847
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29884
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=37
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2012
    source: hf-ai-mo-aops
    label: 2012 Argentina National Olympiad Level 2
  - at: ar-oma
    source: hf-mathnet
    label: Argentina XXIX Olimpíada Matemática Argentina National Round
---
For each natural number $x$ , let $S(x)$ be the sum of its digits. Find the smallest natural number $n$ such that $9S(n) = 16S(2n)$ .
