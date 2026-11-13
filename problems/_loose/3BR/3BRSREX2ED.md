---
tag: 3BRSREX2ED
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90214
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=415
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A B C D E F$ be a convex hexagon such that the quadrilaterals $A B D E$ and $A C D F$ are parallelograms. Prove that $B C E F$ is also a parallelogram.
