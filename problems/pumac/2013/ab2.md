---
tag: N1MCRHTK0N
kind: problem
appearances:
  - at: pumac/2013/ab2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_AlgebraB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563684
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10140
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Betty Lou and Peggy Sue take turns flipping switches on a $100 \times 100$ grid. Initially, all switches are "off". Betty Lou always flips a horizontal row of switches on her turn; Peggy Sue always flips a vertical column of switches. When they finish, there is an odd number of switches turned "on'' in each row and column. Find the maximum number of switches that can be on, in total, when they finish.
