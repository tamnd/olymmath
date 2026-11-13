---
tag: SY09HKGWBX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90139
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=441
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\omega$ be a circle with diameter $A B$. A circle $\gamma$, whose center $C$ lies on $\omega$, is tangent to $A B$ at $D$ and cuts $\omega$ at $E$ and $F$. Prove that triangles $C E F$ and $D E F$ have the same area.
