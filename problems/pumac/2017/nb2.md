---
tag: 3QWKJJFCDW
kind: problem
appearances:
  - at: pumac/2017/nb2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_NT_B.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1564745
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15932
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217627
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S = \{1, 22, 333, \dots , 999999999\}$ . For how many pairs of integers $(a, b)$ where $a, b \in S$ and $a < b$ is it the case that $a$ divides $b$ ?
