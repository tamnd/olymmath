---
tag: B3FMSHXSHT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140106
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=0
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An integer is called formidable if it can be written as a sum of distinct powers of 4 , and successful if it can be written as a sum of distinct powers of 6 . Can 2005 be written as a sum of a formidable number and a successful number? Prove your answer.
