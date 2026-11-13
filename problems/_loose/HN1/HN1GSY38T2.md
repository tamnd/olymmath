---
tag: HN1GSY38T2
kind: problem
type: answer
answer: All odd integers greater than 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=308
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo
    source: hf-mathnet
    label: China Chinese Mathematical Olympiad
---
Find all integers $n$ such that we can color all the edges and the diagonals of a convex $n$-polygon by $n$ given colors satisfying the following conditions;
(1) Each of the edges or the diagonals is colored by only one color;
(2) For any three distinct colors, there exists a triangle whose vertices are vertices of the $n$-polygon and three edges are colored by these three colors.
