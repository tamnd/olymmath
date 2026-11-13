---
tag: N0BT92V4ZQ
kind: problem
appearances:
  - at: pumac/2017/na3
    primary: true
  - at: pumac/2017/nb5
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
    url: https://artofproblemsolving.com/community/c6h1564521
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15925
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217620
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the *bigness*of a rectangular prism to be the sum of its volume, its surface area, and the lengths of all of its edges. Find the least integer $N$ for which there exists a rectangular prism with integer side lengths and *bigness* $N$ and another one with integer side lengths and *bigness* $N + 1$ .
