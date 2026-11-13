---
tag: JE1SDV7RV0
kind: problem
appearances:
  - at: pumac/2015/na6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1601140
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12990
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$ , let $d(n)$ be the number of positive divisors of $n$ . What is the smallest positive integer $n$ such that
$$\sum_{t \mid n} d(t)^3$$is divisible by $35$ ?
