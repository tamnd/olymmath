---
tag: 50ERF3APWY
kind: problem
type: answer
answer: "150"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90612
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=50
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three friends wish to divide five different tasks among themselves, such that every friend must handle at least one task. In how many different ways can this be done?
