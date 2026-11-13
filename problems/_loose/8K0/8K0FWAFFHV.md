---
tag: 8K0FWAFFHV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90347
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that there exists a polynomial $f(x, y, z)$ with the following property: the numbers $|x|,|y|$, and $|z|$ are the sides of a triangle if and only if $f(x, y, z)>0$.
