---
tag: 58AR03YFAZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Greece Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2609463
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20081
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221582
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2021
    source: hf-ai-mo-aops
    label: 2021 Greece Junior Math Olympiad
---
Given a triangle $ABC$ with $AB<BC<AC$ inscribed in circle $(c)$ . The circle $c(A,AB)$ (with center $A$ and radius $AB$ ) interects the line $BC$ at point $D$ and the circle $(c)$ at point $H$ . The circle $c(A,AC)$ (with center $A$ and radius $AC$ ) interects the line $BC$ at point $Z$ and the circle $(c)$ at point $E$ . Lines $ZH$ and $ED$ intersect at point $T$ . Prove that the circumscribed circles of triangles $TDZ$ and $TEH$ are equal.
