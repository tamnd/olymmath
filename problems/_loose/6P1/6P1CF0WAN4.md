---
tag: 6P1CF0WAN4
kind: problem
type: answer
answer: a) No convex hostile polygons exist. b) Hostile concave polygons exist for all integers n ≥ 4.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2019
    source: hf-mathnet
    label: Baltic Way Baltic Way 2019
---
Let $n \ge 4$, and consider a non-intersecting $n$-gon $P_1P_2...P_n$ in the plane. Suppose that, to each $P_k$, there is a unique other vertex $Q_k$ among $P_1, ..., P_n$ that lies closest to it. The polygon is said to be *hostile* if $Q_k \ne P_{k \pm 1}$ for all $k$ (counting cyclically).

a. Prove that there exist no convex hostile polygons.

b. Determine all $n$ for which there exists a concave hostile $n$-gon.
