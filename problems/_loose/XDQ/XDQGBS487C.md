---
tag: XDQGBS487C
kind: problem
type: answer
answer: n = 1, 2, 3, 6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=68
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2013
    source: hf-mathnet
    label: Baltic Way Baltic Way 2013
---
In a one man game there are $n$ boxes numbered $1, 2, 3, \dots, n$. In the beginning there are $21k$ balls in box $k$, $k = 1, 2, 3, \dots, n$. In each turn you take two balls from box $k$, put one of the balls in box $k-1$, and throw the last ball away, $1 < k \le n$. For which $n$ is it possible to get an equal number of balls in each box after a finite number of turns?
