---
tag: Q93JAH6YY4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=64
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is an $m \times m$ table with $2n$ distinct unit squares marked with a ring ($2n \le m^2$). Juku wishes to connect these $2n$ rings into pairs using $n$ (possibly curved) lines in a way that meets the following conditions:
(1) Each line begins from some ring and ends in some other ring;
(2) Every two unit squares visited by the same line one after another have a common side;
(3) No two lines (including their endpoints) visit a common unit square;
(4) No line visits the same unit square more than once.
Prove that the sum of the numbers of unit squares visited by the lines is either always even or always odd, no matter of how Juku draws the lines.
