---
tag: 8SPSGNNSB1
kind: problem
type: answer
answer: "4044"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=378
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob play a game on the plane. Firstly, Alice draws 4 red points which are the vertices of a square, and draws another 2021 red points inside this square such that no three red points are collinear. Next, Bob draws $n$ blue points such that for every triangle whose three vertices are the red points, there is at least one blue point lying strictly inside this triangle.

The goal of Alice is to maximize $n$, while the goal of Bob is to minimize $n$. Find the value of $n$ if both players play optimally.
