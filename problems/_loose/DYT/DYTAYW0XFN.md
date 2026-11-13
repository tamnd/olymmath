---
tag: DYTAYW0XFN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230550
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=44
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 66th Belarusian Mathematical Olympiad
---
Points $B_1$ and $C_1$ are marked respectively on the sides $AB$ and $AC$ of an acute isosceles triangle $ABC$( $AB=AC$) such that $BB_1=AC_1$. The points $B,C$ and $S$ lie in the same half-plane with respect to the line $B_1C_1$ so that $\angle SB_1C_1=\angle SC_1B_1 = \angle BAC$
Prove that $B,C,S$ are colinear if and only if the triangle $ABC$ is equilateral.
