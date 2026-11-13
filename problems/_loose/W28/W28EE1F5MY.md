---
tag: W28EE1F5MY
kind: problem
type: answer
answer: AK=BC
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=16373
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=316
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia XLIII Russian mathematical olympiad
---
In an acute-angled triangle $A B C$, the median $A M$ and the altitude $B H$ are drawn. A perpendicular line from point $M$ to line $A M$ intersects ray $H B$ at point $K$. Prove that if $\angle M A C=30^{\circ}$, then $A K=B C$. (B. Obukhov)
