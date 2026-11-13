---
tag: V4JY0QEHZZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162824
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=310
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo
    source: hf-mathnet
    label: Slovenia National Math Olympiad
---
The diagonal $AC$ of a convex quadrilateral $ABCD$ is the bisector of the angle $\angle DCB$. Let $E$ be the intersection of side $AB$ and the circumcircle of triangle $ACD$, and let $F$ be the intersection of side $AD$ and the circumcircle of triangle $ABC$. Prove that the segments $AC$, $DE$, and $BF$ intersect at one point.
