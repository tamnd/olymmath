---
tag: YN5J7P7Z6N
kind: problem
type: answer
answer: n − 1 for n ≠ 4; when n = 4, the minimum is 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=447
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 3$ be a natural number. John draws a regular $n$-gon and connects every pair of vertices. On each segment, John writes a nonzero natural number such that in any triangle formed by three vertices, one of the numbers on its sides equals the sum of the other two.

Determine the smallest number of distinct values John can write.
