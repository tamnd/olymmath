---
tag: 1NEZKR5BS7
kind: problem
type: answer
answer: n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=339
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \le 100$ be a positive integer. There are 101 numbers written in a row:
$$
0 \cdot n \text{ mod } 101, 1 \cdot n \text{ mod } 101, \dots, 100 \cdot n \text{ mod } 101.
$$
How many pairs of neighbouring numbers are there in this row such that the one on the left is bigger than the one on the right?
