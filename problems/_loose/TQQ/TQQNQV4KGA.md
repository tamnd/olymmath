---
tag: TQQNQV4KGA
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184273
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Someone wants to draw a number $n$ of points in a plane. They should be chosen such that no three of these points lie on a common line. Afterwards, he wants to find triangles whose all three vertices belong to the drawn $n$ points.

Determine the smallest number $n$ of such points for which it is possible to find 120 different such triangles!
