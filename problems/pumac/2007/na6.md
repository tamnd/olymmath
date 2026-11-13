---
tag: VGCMMF2YAZ
kind: problem
appearances:
  - at: pumac/2007/na6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2007 official paper
    url: https://pumac.princeton.edu/s/PUMaC2007_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h506077
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73104
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263026
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of ordered triplets of nonnegative integers $(m, n, p)$ such that $m+3n+5p \le 600$ .
