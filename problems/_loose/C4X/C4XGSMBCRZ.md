---
tag: C4XGSMBCRZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90337
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0005.parquet#row=60
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Triangle $A B C$ is inscribed in a circle centered at $O$, and $M$ is the midpoint of $B C$. Suppose that $A, M$, and $O$ are collinear. Prove that $\triangle A B C$ is either right or isosceles (or both).
