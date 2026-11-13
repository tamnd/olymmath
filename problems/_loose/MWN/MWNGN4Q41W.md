---
tag: MWNGN4Q41W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech-Polish-Slovak_Mathematical_Match/train/0000.parquet#row=0
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n \ge 16$, consider the set
$$
G = \{(x, y) : x, y \in \{1, 2, \dots, n\}\}
$$
consisting of $n^2$ points in the plane. Let $A$ be any subset of $G$ containing at least $4n\sqrt{n}$ points. Prove that there are at least $n^2$ convex quadrangles with all their vertices in $A$ such that their diagonals intersect in one common point.
