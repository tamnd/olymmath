---
tag: NXZDV2GT88
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207128
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=47
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a triangle $ABC$, let $D$ be the point where the incircle of the triangle $ABC$ touches the side $BC$. A circle through the vertices $B$ and $C$ is tangent to the incircle of triangle $ABC$ at the point $E$. Show that the line $DE$ passes through the excentre of triangle $ABC$ corresponding to vertex $A$.
