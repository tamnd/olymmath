---
tag: JN8H1W4ECS
kind: problem
type: answer
answer: 3*((n+1)/2)^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is an odd integer $n \ge 1$. Let $S$ be the set of all points in the three dimensional space, whose all coordinates belong to the set $\{0, 1, ..., n\}$. Determine the maximum size of a subset $A \subset S$ with the following property: For every two distinct points $(x_1, x_2, x_3)$, $(y_1, y_2, y_3) \in A$ among the three numbers $x_1 - y_1, x_2 - y_2, x_3 - y_3$ there is at least one positive number and at least one negative number.
