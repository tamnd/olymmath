---
tag: KEWGGHE2FM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230506
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $I$ be the incenter of a triangle $ABC$. The circle passing through $I$ and centered at $A$ meets the circumference of the triangle $ABC$ at points $M$ and $N$. Prove that the line $MN$ touches the incircle of the triangle $ABC$.

(I. Kachan)
