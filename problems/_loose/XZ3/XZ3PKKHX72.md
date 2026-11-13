---
tag: XZ3PKKHX72
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211470
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. An equilateral triangle with side $n$ will be denoted by $T_n$ and is divided in $n^2$ unit equilateral triangles with sides parallel to the initial, forming a grid. We will call "trapezoid" the trapezoid which is formed by three equilateral triangles (one base is equal to one and the other is equal to two).
Let also $m$ be a positive integer with $m<n$ and suppose that $T_n$ and $T_m$ can be tiled with "trapezoids".
Prove that, if from $T_n$ we remove a $T_m$ with the same orientation, then the rest can be tiled with "trapezoids".
