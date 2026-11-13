---
tag: X60JGVJAPN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90836
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0008.parquet#row=368
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a finite set of positive real numbers. If $S$ 's average is at most 1 but its product is at least 0.9 , show that any three elements of $S$ can form the sides of a triangle.
