---
tag: C11WJPMPTT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232646
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are given a set $P$ of points and a set $L$ of straight lines. At the beginning there are 4 points, no three of which are collinear, and $L=\emptyset $. Two players are taking turns adding one or two lines to $L$, where each of these lines has to pass through at least two of the points in $P$. After that all intersection points of the lines in $L$ are added to $P$, if they are not already part of it. A player wins, if after his turn there are three collinear points from $P$, which lie on a line that isn't from $L$. Find who of the two players has a winning strategy.
