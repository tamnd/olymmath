---
tag: XMQ4PVJG8H
kind: problem
type: answer
answer: \frac{1}{8(n-1)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130563
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geqslant 2$, A and B play a game. A selects $2 n$ (possibly identical) non-negative numbers $x_{1}, x_{2}, \cdots, x_{2 n}$, whose sum equals 1. B then arranges them in a certain order on a circle, after which B calculates the product of each pair of adjacent numbers and writes the largest of the $2 n$ products on the blackboard. A hopes that the number written on the blackboard is as large as possible, while B hopes it is as small as possible. What will the number written on the blackboard be under the correct strategy? ${ }^{[5]}$
