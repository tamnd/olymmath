---
tag: HA0S9GBG82
kind: problem
type: answer
answer: 3^{2011}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=10
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2011
    source: hf-mathnet
    label: Baltic Way Baltic Way 2011 Problem Shortlist
---
For any real number $a$ we define a sequence $x_0, x_1, \dots$ such that $x_0 = a$ and $x_{i+1} = 3x_i - x_i^3$ for all $i \ge 0$. Determine the number of reals $a$ for which $x_{2011} = x_0$.
