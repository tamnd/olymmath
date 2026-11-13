---
tag: 1E3SKMQ1XB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Cuba MO
    url: https://artofproblemsolving.com/community/c6h3403654
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37520
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242968
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cu-mo/2014
    source: hf-ai-mo-aops
    label: 2014 Cuba MO
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Ireland
---
Let $ABC$ be an isosceles triangle with $AB = AC$ . Points $D$ , $E$ and $F$ are on sides $BC$ , $CA $ and $AB$ respectively, such that $\angle FDE =\angle ABC$ and $FE$ is not parallel to $BC$ . Prove that $BC$ is tangent to the circumcircle of the triangle $DEF$ , if and only if, $D$ is the midpoint of $BC$ .
