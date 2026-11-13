---
tag: NWQCKC15Y7
kind: problem
type: answer
answer: 0, 1, and 9
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=46
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
For any natural number $n$, denote by $N(n)$ the number of digits of $n$ and by $S(n)$ the sum of digits of $n$. (Assume that numbers do not start with zero.)
Which digits can occur in a natural number $n$ if $\frac{n}{S(n)} < \frac{m}{S(m)}$ for all other $m$ such that $N(m) = N(n)$?
