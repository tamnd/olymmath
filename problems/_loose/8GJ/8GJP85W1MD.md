---
tag: 8GJP85W1MD
kind: problem
type: answer
answer: All k-tuples consisting of exactly two entries equal to 3 and all remaining entries equal to 2.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a positive integer. Determine all $k$-tuples $(n_1, n_2, ..., n_k)$ of positive integers such that
$$(n_1! - 1)(n_2! - 1) \cdots (n_k! - 1) - 16$$
is a perfect square of a positive integer.
