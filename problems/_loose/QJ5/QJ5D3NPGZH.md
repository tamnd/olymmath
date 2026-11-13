---
tag: QJ5D3NPGZH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77091
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech-Polish-Slovak_Mathematical_Match/train/0000.parquet#row=19
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caps
    source: hf-mathnet
    label: Czech-Polish-Slovak Mathematical Match Czech-Slovak-Polish Match
---
Given is a convex hexagon $A B C D E F$, such that $\angle A=\angle C=\angle E$ and $A B=B C$, $C D=D E, E F=F A$. Prove that the lines $A D, B E$ and $C F$ have a common point.
