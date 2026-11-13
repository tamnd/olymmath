---
tag: E5GZ362YJC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6701
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=34
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-euler
    source: hf-mathnet
    label: Russia Euler olympiad
---
(S. Berlov) In a convex quadrilateral $ABCD$, the following relations are satisfied: $AB=BD; \angle ABD=\angle DBC$. On the diagonal $BD$, there is a point $K$ such that $BK=BC$. Prove that $\angle KAD=\angle KCD$.
