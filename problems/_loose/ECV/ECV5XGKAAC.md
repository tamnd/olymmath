---
tag: ECV5XGKAAC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=199
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
A country consists of $n$ islands. Some of the islands are connected by bridges, and the bridges intersect only on the islands. Each bridge has a positive integer toll. A path is defined as a sequence of bridges such that each pair of consecutive bridges share an endpoint on the same island.
Prove that $n$ or $n-2$ is a perfect square if the following conditions are met:
* There is exactly one path connecting any two islands.
* The total cost of traveling through each path is distinct and does not exceed $N = \frac{n(n-1)}{2}$.
For example, consider a case with four islands $A, B, C$, and $D$, where the tolls are $d(A, B) = 1$, $d(A, C) = 2$, and $d(A, D) = 4$. This configuration satisfies the given conditions.
(Bilegdemberel Bat-Amgalan)
