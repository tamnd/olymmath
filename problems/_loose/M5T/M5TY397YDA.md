---
tag: M5TY397YDA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 CMIMC
    url: https://artofproblemsolving.com/community/c6h2471741
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70605
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2021
    source: hf-ai-mo-aops
    label: 2021 CMIMC
---
Given a trapezoid with bases $AB$ and $CD$ , there exists a point $E$ on $CD$ such that drawing the segments $AE$ and $BE$ partitions the trapezoid into $3$ similar isosceles triangles, each with long side twice the short side. What is the sum of all possible values of $\frac{CD}{AB}$ ?

*Proposed by Adam Bertelli*
