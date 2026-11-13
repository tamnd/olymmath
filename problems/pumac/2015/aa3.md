---
tag: M650JZDG1Q
kind: problem
appearances:
  - at: pumac/2015/aa3
    primary: true
  - at: pumac/2015/ab5
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
    url: https://artofproblemsolving.com/community/c6h1165942
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12955
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214862
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the sum of the non-repeated roots of the polynomial $P(x) = x^6-5x^5-4x^4-5x^3+8x^2+7x+7$ .
