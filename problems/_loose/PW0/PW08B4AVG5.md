---
tag: PW08B4AVG5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=8515
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=158483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ points in the plane such that no three of them are collinear, prove that one can find at least $\binom{n-3}{2}$ convex quadrilaterals with their vertices at these points.
