---
tag: QFNTM9RQMT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204001
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Japan/train/0000.parquet#row=290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is an acute triangle $ABC$ with $AB=11$, $AC=10$. Suppose $H$ is its orthocenter, and $M$ is the midpoint of side $BC$. If there exists a point $P$ inside $\triangle ABC$, such that $P$ is on the circumcircle of the triangle BHC, and $\angle ABP=\angle CPM$, $PM=3$, find the length of $BC$.
