---
tag: D727TZSQ2J
kind: problem
type: answer
answer: All integers n that are multiples of three
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=100
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
Find all integers $n \ge 3$ such that one can write a number (not necessarily an integer) into each vertex of a regular $n$-gon in such a way that both following conditions are met:
(1) Whenever three consecutive vertices of the $n$-gon, taken clockwise, contain numbers $x, y$ and $z$, respectively, the equality $x = |y - z|$ holds;
(2) The sum of the numbers in all vertices of the $n$-gon is 1.
