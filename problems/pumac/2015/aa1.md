---
tag: HPTSRS6J0H
kind: problem
appearances:
  - at: pumac/2015/aa1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1165949
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12959
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214866
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many integer pairs $(a, b)$ with $1 < a, b \le 2015$ are there such that $\log_a b$ is an integer?
