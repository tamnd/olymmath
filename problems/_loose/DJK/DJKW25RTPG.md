---
tag: DJKW25RTPG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250737
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=27
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $I, O$ be the incenter, circumcenter of triangle $ABC$ and $A_1, B_1, C_1 $be arbitrary points on the segments $AI, BI, CI$ respectively. The perpendicular bisectors of $AA_1, BB_1, CC_1$ intersect each other at $X, Y$ and $Z$. Prove that the circumcenter of triangle $XYZ$ coincides with $O$ if and only if $I$ is the orthocenter of triangle $A_1B_1C_1$
