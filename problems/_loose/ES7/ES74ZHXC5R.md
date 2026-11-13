---
tag: ES74ZHXC5R
kind: problem
type: answer
answer: a = 0 or a = 6/7
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=6
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all values of the real parameter $a$ such that the equation
$$
x^3 - a x^2 + (a^2 - 1)x - a^2 + a = 0
$$
has three distinct real roots which (in some order) form an arithmetic progression.
