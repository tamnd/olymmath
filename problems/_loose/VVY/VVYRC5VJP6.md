---
tag: VVYRC5VJP6
kind: problem
type: answer
answer: 2(p!)^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=61
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo
    source: hf-mathnet
    label: China China Mathematical Olympiad
---
Given a prime number $p$, let $A$ be a $p \times p$ matrix such that its entries are exactly $1, 2, \dots, p^2$ in some order. The following operation is allowed for a matrix: add one to each number in a row or a column, or subtract one from each number in a row or a column. The matrix $A$ is called "good" if one can take a finite series of such operations resulting in a matrix with all entries zero. Find the number of good matrices $A$.
