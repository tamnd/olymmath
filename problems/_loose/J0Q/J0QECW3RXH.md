---
tag: J0QECW3RXH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90809
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0008.parquet#row=393
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For points $P, Q, R$, let $E_{P, Q}(R)$ denote the ellipse with foci $P$ and $Q$ through $R$.

Points $T, A, B, C$ are points on a line in that order. A ray from $A$ intersects $E_{A, B}(T)$ at $Q$ and $E_{A, C}(T)$ at $P$. Show that $E_{B, P}(A)$ intersects $E_{C, Q}(A)$ at two points.
