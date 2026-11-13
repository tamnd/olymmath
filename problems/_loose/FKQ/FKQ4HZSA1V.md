---
tag: FKQ4HZSA1V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90902
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $x, y$, and $z$ are real numbers that satisfy $x+y+z>0, x y+y z+z x>0$ and $x y z>0$. Prove that $x, y$, and $z$ must all be positive.
