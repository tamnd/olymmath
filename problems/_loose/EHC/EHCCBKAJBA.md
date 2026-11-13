---
tag: EHCCBKAJBA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Kosovo National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2584121
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=46466
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242800
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: xk-mo/2012
    source: hf-ai-mo-aops
    label: 2012 Kosovo National Mathematical Olympiad
---
Solve the recurrence $R_0=1, R_n=nR_{n-1}+2^n\cdot n!$ .
