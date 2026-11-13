---
tag: 8S3WKR8V51
kind: problem
appearances:
  - at: pumac/2017/na6
    primary: true
  - at: pumac/2017/nb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_NT_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1564526
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15928
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217623
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the least positive integer $N$ such that the only values of $n$ for which $1 + N \cdot 2^n$ is prime are multiples of $12$ .
