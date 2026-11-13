---
tag: S8R00NSFHT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2274109
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18681
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2020
    source: hf-ai-mo-aops
    label: 2020 Caucasus Mathematical Olympiad
---
Determine if there exists a finite set $A$ of positive integers satisfying the following condition: for each $a\in{A}$ at least one of two numbers $2a$ and $\frac{a}{3}$ belongs to $A$ .
