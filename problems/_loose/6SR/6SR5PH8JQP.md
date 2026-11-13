---
tag: 6SR5PH8JQP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1352384
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15496
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217202
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=7
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2017
    source: hf-ai-mo-aops
    label: 2017 Hong Kong TST
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong 1997-2023 IMO HK TST
---
Let $n$ be a positive integer with the following property: $2^n-1$ divides a number of the form $m^2+81$ , where $m$ is a positive integer. Find all possible $n$ .
