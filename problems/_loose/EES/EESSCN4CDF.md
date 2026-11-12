---
tag: EESSCN4CDF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15058
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Inside a convex 100-gon, a point $X$ is chosen, not lying on any of its sides or diagonals. Initially, the vertices of the polygon are not marked. Petya and Vasya take turns marking unmarked vertices of the 100-gon, with Petya starting and marking two vertices on his first move, and then each marking one vertex per move thereafter. The player who, after their move, causes point $X$ to lie inside a polygon with the marked vertices loses. Prove that Petya can win, regardless of how Vasya plays.

(S. Berlov, F. Petrov)
