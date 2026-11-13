---
tag: TEE1E9Q2YD
kind: problem
appearances:
  - at: pumac/2009/aa8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2009 official paper
    url: https://pumac.princeton.edu/s/PUMaC2009_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h427830
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3964
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The real numbers $x$ , $y$ , $z$ , and $t$ satisfy the following equation:
$$2x^2 + 4xy + 3y^2 - 2xz -2 yz + z^2 + 1 = t + \sqrt{y + z - t} $$
Find 100 times the maximum possible value for $t$ .
