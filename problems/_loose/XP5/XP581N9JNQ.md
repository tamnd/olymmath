---
tag: XP581N9JNQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90502
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In convex hexagon $A B C D E F, \angle A=\angle B, \angle C=\angle D$, and $\angle E=\angle F$. Prove that the perpendicular bisectors of $\overline{A B}, \overline{C D}$, and $\overline{E F}$ pass through a common point.
