---
tag: JQB7CGXY14
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90181
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=40
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>1$ be an integer. Three complex numbers have the property that their sum is 0 and the sum of their $n$th powers is also 0 . Prove that two of the three numbers have the same absolute value.
