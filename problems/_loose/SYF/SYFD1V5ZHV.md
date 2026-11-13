---
tag: SYFD1V5ZHV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138209
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0005.parquet#row=22
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let triangle $A B C$ have a right angle at $C$, and let $M$ be the midpoint of the hypotenuse $A B$. Choose a point $D$ on line $B C$ so that angle $C D M$ measures 30 degrees. Prove that the segments $A C$ and $M D$ have equal lengths.
