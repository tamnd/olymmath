---
tag: P1RR2EP0FC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250768
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=210
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine whether it is possible to place the integers $1, 2,...,2012$ in a circle in such a way that the $2012$ products of adjacent pairs of numbers leave pairwise distinct remainders when divided by $2013$.
