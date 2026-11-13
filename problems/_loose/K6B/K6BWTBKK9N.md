---
tag: K6BWTBKK9N
kind: problem
type: answer
answer: (n^2 - 9)/4 for odd n; (n^2 - 8)/4 for even n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=40
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer, $n \ge 3$. In a regular $n$-gon, one draws a maximal set of diagonals, no two of which intersect in the interior of the $n$-gon. Every diagonal is labelled with the number of sides of the $n$-gon between the endpoints of the diagonal along the shortest path. Find the maximum value of the sum of the labels.
