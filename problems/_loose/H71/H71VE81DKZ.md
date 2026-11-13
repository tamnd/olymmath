---
tag: H71VE81DKZ
kind: problem
type: answer
answer: "14"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90283
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0008.parquet#row=42
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the number of convex polygons all of whose sides are the square roots of positive integers which can be inscribed in a unit circle. Polygons that are rotations or reflections of each other are considered the same.
