---
tag: FC2HMCTTNJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144176
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given 3 points on a plane, choose any two points to draw a line and construct the perpendicular bisector of this line, then construct the symmetric points of all given points with respect to this perpendicular bisector. Then, from all the existing points (including the original points and the newly symmetric points), choose any two points and repeat the above process infinitely. Prove that there exists a line on the plane such that all the points obtained lie on the same side of this line.
