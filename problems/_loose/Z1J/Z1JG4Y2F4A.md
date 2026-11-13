---
tag: Z1JG4Y2F4A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 CAPS Match
    url: https://artofproblemsolving.com/community/c6h3351636
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1577
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech-Polish-Slovak_Mathematical_Match/train/0000.parquet#row=67
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caps/2024
    source: hf-ai-mo-aops
    label: 2024 CAPS Match
  - at: caps/2024
    source: hf-mathnet
    label: Czech-Polish-Slovak Mathematical Match CAPS Match 2024
---
Let $ABCD$ be a quadrilateral, such that $AB = BC = CD.$ There are points $X, Y$ on rays $CA, BD,$ respectively, such that $BX = CY.$ Let $P, Q, R, S$ be the midpoints of segments $BX, CY ,$ $XD, YA,$ respectively. Prove that points $P, Q, R, S$ lie on a circle.
