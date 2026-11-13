---
tag: 1DANM768AG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217947
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_1H_1,A_2H_2,A_3H_3$ be altitudes and $A_1L_1,A_2L_2,A_3L_3$ be bisectors of acute-angles triangle $A_1A_2A_3$.
Prove the inequality $S(L_1L_2L_3)\ge S(H_1H_2H_3)$ where $S$ stands for the area of a triangle.

*(B. Bazylev)*
