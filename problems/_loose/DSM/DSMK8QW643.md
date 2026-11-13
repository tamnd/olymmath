---
tag: DSMK8QW643
kind: problem
type: answer
answer: Yes; for n = 5 we have j(6) > j(5), with j(5) = 1/2 and j(6) = 8/15.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=55
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a tuple of consecutive positive integers, one forms all pairs of members of it such that the first member is less than the second member. The percentage of these pairs where the second member is divisible by the first one is called the *degree of divisibility* of the tuple. For every integer $n > 1$, denote the largest possible degree of divisibility of a tuple of $n$ consecutive positive integers by $j(n)$.
Does there exist an integer $n > 1$ such that $j(n + 1) > j(n)$?
