---
tag: PEADQD187G
kind: problem
type: answer
answer: (x, y) = (z^3(z-1)/2, z^6(z-1)/2) for all integers z
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=143
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
Find all pairs of integers $(x, y)$ that satisfy the equation $y^4 = x(2x^2 + y)^3$.
