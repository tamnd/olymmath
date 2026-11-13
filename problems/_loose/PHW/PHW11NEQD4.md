---
tag: PHW11NEQD4
kind: problem
type: answer
answer: n(n+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88833
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
By drawing lines parallel to each side, an equilateral triangle with side length $n$ is divided into $n^{2}$ equilateral triangles with side length 1. How many line segments of length 1 on the resulting grid can we color red so that no three red segments form an equilateral triangle?
