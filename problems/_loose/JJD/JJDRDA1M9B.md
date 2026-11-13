---
tag: JJDRDA1M9B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a positive integer. Find all positive integers $n$, such that it is possible to mark $n$ points on the sides of a triangle (different from its vertices) and connect some of them with a line in such a way that the following conditions are satisfied:
1) there is at least $1$ marked point on each side,
2) for each pair of points $X$ and $Y$ marked on different sides, on the third side there exist exactly $k$ marked points which are connected to both $X$ and $Y$ and exactly k points which are connected to neither $X$ nor $Y$
