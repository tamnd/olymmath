---
tag: MHBNE3MX6A
kind: problem
appearances:
  - at: pumac/2013/na8
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
    url: https://artofproblemsolving.com/community/c6h563958
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10187
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212182
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of primes $p$ between $100$ and $200$ for which $x^{11}+y^{16}\equiv 2013\pmod p$ has a solution in integers $x$ and $y$ .
