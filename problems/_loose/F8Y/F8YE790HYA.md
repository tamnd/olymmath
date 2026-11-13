---
tag: F8YE790HYA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90534
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0006.parquet#row=232
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all ordered triples $(a, b, c)$ of positive integers with $a^{2}+b^{2}=4 c+3$.
