---
tag: BCVS8E0RMF
kind: problem
appearances:
  - at: pumac/2013/na7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563957
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10186
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212181
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $P(x)$ is a degree $n$ monic polynomial with integer coefficients such that $2013$ divides $P(r)$ for exactly $1000$ values of $r$ between $1$ and $2013$ inclusive. Find the minimum value of $n$ .
