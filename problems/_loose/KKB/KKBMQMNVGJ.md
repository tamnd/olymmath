---
tag: KKBMQMNVGJ
kind: problem
type: answer
answer: All integers from 2018 to 1019090 inclusive.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2019
    source: hf-mathnet
    label: Baltic Way Baltic Way 2019
---
Determine all integers which can be expressed in the form
$$
x_1x_2 + x_2x_3 + \dots + x_{k-1}x_k,
$$
where $x_1, x_2, \dots, x_k$ are positive integers whose sum equals $2019$.
