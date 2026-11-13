---
tag: 3ECQZGZ4SR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1940893
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18879
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220410
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=361
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2020
    source: hf-ai-mo-aops
    label: 2020 Hong Kong TST
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Suppose there are $2019$ distinct points in a plane and the distances between pairs of them attain $k$ different values. Prove that $k$ is at least $44$ .
