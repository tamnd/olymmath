---
tag: 6JS7CCW5AJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268090
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $ n\ge 2$ and a reular 2n-gon. Color all verices of the 2n-gon with n colors such that:

**(i)** Each vertice is colored by exactly one color.
**(ii)** Two vertices don't have the same color.

Two ways of coloring, satisfying the conditions above, are called equilavent if one obtained from the other by a rotation whose center is the center of polygon. Find the total number of mutually non-equivalent ways of coloring.

*Alternative statement:*

In how many ways we can color vertices of an regular 2n-polygon using n different colors such that two adjent vertices are colored by different colors. Two colorings which can be received from each other by rotation are considered as the same.
