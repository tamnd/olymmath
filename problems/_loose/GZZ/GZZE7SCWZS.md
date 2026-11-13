---
tag: GZZE7SCWZS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90435
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0005.parquet#row=445
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A B C$ be a triangle and $P$ a point inside it. Rays $B P$ and $C P$ meet $A C$ and $A B$ at $Y$ and $X$, respectively. Prove that if $A P$ bisects $B C$ then $X Y \| B C$.
