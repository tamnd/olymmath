---
tag: VXMDCAKP1N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90655
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0005.parquet#row=416
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A line in the Cartesian plane is called stable if it passes through at least two points $(x, y)$ such that $x$ and $y$ are rational numbers. Prove or disprove: every point lies on some stable line.
