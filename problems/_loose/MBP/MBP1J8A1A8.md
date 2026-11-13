---
tag: MBP1J8A1A8
kind: problem
type: answer
answer: "4044"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242714
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the smallest value of $M$ for which for any choice of positive integer $n$ and positive real numbers $x_1<x_2<\ldots<x_n \le 2023$ the inequality
$$\sum_{1\le i < j \le n , x_j-x_i \ge 1} 2^{i-j}\le M$$
holds.
