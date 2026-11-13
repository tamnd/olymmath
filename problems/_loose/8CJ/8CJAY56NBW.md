---
tag: 8CJAY56NBW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232583
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=83
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $x,y,z$ are positive integers and $z(xz+1)^2=(5z+2y)(2z+y)$, prove that $z$ is an odd perfect square.
