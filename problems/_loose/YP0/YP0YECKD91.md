---
tag: YP0YECKD91
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250699
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=269
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAMC
---
Let $ABC$ be a triangle, $D$ the midpoint of side $BC$ and $E$ the intersection point of the bisector of angle $\angle BAC$ with side $BC$. The perpendicular bisector of $AE$ intersects the bisectors of angles $\angle CBA$ and $\angle CDA$ at $M$ and $N$, respectively. The bisectors of angles $\angle CBA$ and $\angle CDA$ intersect at $P$ . Prove that points $A, M, N, P$ are concyclic.
