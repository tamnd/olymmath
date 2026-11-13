---
tag: TC971WGRP2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A B C D$ be a rectangle. Let $P$ be a point on the segment $[A B]$, and $Q$ be a point on the segment $[B C]$. The segments $[A Q]$ and $[D P]$ intersect at $X$, the segments $[A Q]$ and $[C P]$ intersect at $Y$, and the segments $[C P]$ and $[D Q]$ intersect at $Z$. We denote by $a, b$ and $c$ the areas of triangle $A P X$, triangle $C Q Z$, and quadrilateral $B P Y Q$, respectively.

Show that the area of quadrilateral $D X Y Z$ is $a+b+c$.
