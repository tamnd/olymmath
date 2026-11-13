---
tag: EQD7F1Z6QS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=17
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer number $n \ge 2$, determine the minimum value the sum
$$
\sum_{i=1}^{n} x_i^2 \left( 1 + \frac{x_i^{n-2}}{x_1 \cdots x_{i-1} x_{i+1} \cdots x_n} \right)
$$
may achieve, when $x_1, x_2, \dots, x_n$ run through the positive real numbers subject to
$$
\sum_{i=1}^{n} \frac{1}{x_i + 1} = 1.
$$
