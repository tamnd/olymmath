---
tag: XFX4YY3WFW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248924
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a point $X$ and $n$ vectors $\overrightarrow{x_i}$ with sum zero in the plane. For each permutation of the vectors we form a set of $n$ points, by starting at $X$ and adding the vectors in order. For example, with the original ordering we get $X_1$ such that $XX_1 = \overrightarrow{x_1}, X_2$ such that $X_1X_2 = \overrightarrow{x_2}$ and so on. Show that for some permutation we can find two points $Y, Z$ with angle $\angle YXZ = 60^o $, so that all the points lie inside or on the triangle $XYZ$.
