---
tag: Y7VZQC3CW0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250726
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Let $(O_1), (O_2)$ be given two circles intersecting at $A$ and $B$. The tangent lines of $(O_1)$ at $A, B$ intersect at $O$. Let $I$ be a point on the circle $(O_1)$ but outside the circle $(O_2)$. The lines $IA, IB$ intersect circle $(O_2)$ at $C, D$. Denote by $M$ the midpoint of $C D$. Prove that $I, M, O$ are collinear.
