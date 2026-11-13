---
tag: PV6PF2R4JW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236271
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
On the sides $AB, BC$ and $CA$ of triangle $ABC$, points $L, M$ and $N$ are chosen, respectively, such that the lines $CL, AM$ and $BN$ intersect at a common point O inside the triangle and the quadrilaterals $ALON, BMOL$ and $CNOM$ have incircles. Prove that
$$\frac{1}{AL\cdot BM} +\frac{1}{BM\cdot CN} +\frac{1}{CN \cdot AL} =\frac{1}{AN\cdot BL} +\frac{1}{BL\cdot CM} +\frac{1}{CM\cdot AN} $$
