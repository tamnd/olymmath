---
tag: GRFNGDK7R7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=198
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a rectangle board $ABCD$ of size $m \times n$ with $(m + 1) \times (n + 1)$ intersections. Some engineers want to build a route from $A$ which goes along the segments parallel to the sides of the board, passes through each intersection exactly once and finally turns back to $A$.

a. Prove that they can build the route if and only if either $m$ is odd or $n$ is odd.

b. With $m, n$ satisfying the condition in (a), find the least number of intersections at each there is a turn.
