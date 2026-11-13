---
tag: EVMZ7CDN5E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132562
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Place six points arbitrarily within a unit circle, and prove that there are at least two points with a distance no greater than 1.

Analysis: Divide the unit circle into six sectors with a central angle of $60^{\circ}$. If a sector contains two points, the distance between these two points must be no greater than 1. However, this problem only has six points, and placing them into six sectors (pigeonholes) does not necessarily guarantee that one sector will have two points, so the pigeonhole principle cannot be directly applied to the six points and six sectors. Note that if a point is on the common radius of two adjacent sectors, and if there is another point in these two sectors, it can be concluded that there are two points with a distance no greater than 1; what if there are no other points in these two adjacent sectors? In this case, the other five points must be in the other four sectors. The pigeonhole principle can also be applied to prove the conclusion.
