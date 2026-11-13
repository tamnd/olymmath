---
tag: 5FDCSQMAKX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136884
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ points in the plane, no three of which are collinear. Connect a line segment between every pair of these points, and color some of these line segments red and others blue, such that from any one point to any other point, it is possible to walk along the colored segments, and such a path is unique. Prove that it is possible to color each of the uncolored line segments either red or blue, so that the number of red edges in any triangle formed by the given points is odd.
