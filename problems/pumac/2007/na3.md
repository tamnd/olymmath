---
tag: JZ9RM8DBX1
kind: problem
appearances:
  - at: pumac/2007/na3
    primary: true
  - at: pumac/2007/nb8
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
    url: https://artofproblemsolving.com/community/c6h506073
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73101
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263023
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In how many ways can $1 + 2 + \cdots + 2007$ be expressed as a sum of consecutive positive integers?
