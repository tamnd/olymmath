---
tag: S10KK9WTHK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90360
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Oscar draws a triangle $A B C$ on a sheet of paper. He finds that the side lengths of $A B C$ are all powers of 2 (i.e. among $1,2,4,8, \ldots$ ). Prove that Oscar's triangle is isosceles.
