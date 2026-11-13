---
tag: KD3KPGQPWR
kind: problem
appearances:
  - at: pumac/2012/aa6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927400
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8575
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210638
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let an be a sequence such that $a_0 = 0$ and: $a_{3n+1} = a_{3n} + 1 = a_n + 1$ $a_{3n+2} = a_{3n} + 2 = a_n + 2$ for all natural numbers $n$ . How many $n$ less than $2012$ have the property that $a_n = 7$ ?
