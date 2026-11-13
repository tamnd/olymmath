---
tag: 4E3A2KEXAP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220239
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\Delta ABC$ be an isosceles triangle with $AB=AC$. The incircle $\Gamma$ of $\Delta ABC$ has centre $I$, and it is tangent to the sides $AB$ and $AC$ at $F$ and $E$ respectively. Let $\Omega$ be the circumcircle of $\Delta AFE$. The two external common tangents of $\Gamma$ and $\Omega$ intersect at a point $P$. If one of these external common tangents is parallel to $AC$, prove that $\angle PBI=90^{\circ}$.
