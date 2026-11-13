---
tag: TFHJVZWP10
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90755
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=62
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The numbers 1 to 10 are written on a blackboard in a row. Determine whether it is possible to put nine + and - signs between them (one between each pair of adjacent numbers) to make the resulting sum 0 .
