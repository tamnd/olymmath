---
tag: S81BHSMX0P
kind: problem
type: answer
answer: "2401"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=306
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
A *state* refers to a way to place the numbers $1, 2, \ldots, 99$ on the vertices of a given regular $99$-gon, with exactly one number on each vertex and every number appearing exactly once. Two states are considered *equivalent* if one of them can be obtained from the other by rotating the regular $99$-gon (on the plane).

An *operation* is to first choose two adjacent vertices of the regular $99$-gon and then exchange the numbers on these two vertices. Determine the smallest positive integer $N$ such that, for any two states $\alpha$ and $\beta$, one may apply no more than $N$ operations to $\alpha$ to obtain a state that is equivalent to $\beta$.
