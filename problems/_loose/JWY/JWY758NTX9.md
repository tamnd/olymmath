---
tag: JWY758NTX9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121968
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
2000 points are distributed on a circle, each labeled with 1 or -1. A point is called a good point if, starting from this point and moving in any direction along the circle to any other point, the sum of all numbers passed (including the number at the starting point) is always positive. Prove: If the number of points labeled -1 is less than 667, then there is at least one good point on the circle.
