---
tag: JN1YP5D1PC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254710
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n \ge 2$ and a regular $2n$-polygon at each vertex of which sitting on an ant. At some points in time, each ant creeps into one of two adjacent peaks (some peaks may have several ants at a time). Through $k$ such operations, it turned out to be an arbitrary line connecting two different ones the vertices of a polygon with ants do not pass through its center. For given $n$ find the lowest possible value of $k$.
