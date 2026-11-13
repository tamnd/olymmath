---
tag: HN0BXRXZ9Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90485
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=70
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find, with proof, all ways to write 1 as a sum of three fractions, each with numerator 1 and positive integer denominator. (The order of the fractions is irrelevant, so for instance $\frac{1}{2}+\frac{1}{4}+\frac{1}{4}$ is the same as $\frac{1}{4}+\frac{1}{4}+\frac{1}{2}$.)
