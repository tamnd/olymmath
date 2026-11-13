---
tag: SDHDRAE849
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 New Zealand MO
    url: https://artofproblemsolving.com/community/c6h2677474
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49131
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154013
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/New_Zealand/train/0000.parquet#row=8
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nz-nzmo/2019
    source: hf-ai-mo-aops
    label: 2019 New Zealand MO
  - at: nz-nzmo
    source: hf-mathnet
    label: New Zealand New Zealand Mathematical Olympiad
---
An equilateral triangle is partitioned into smaller equilateral triangular pieces. Prove that two of the pieces are the same size.
