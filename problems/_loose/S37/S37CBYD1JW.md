---
tag: S37CBYD1JW
kind: problem
type: answer
answer: n*sqrt(2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=386
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2023
    source: hf-mathnet
    label: Baltic Way Baltic Way 2023 Shortlist
---
Let $n$ be a positive integer, $x_1, \dots, x_n$ and $y_1, \dots, y_n$ be positive real numbers satisfying $x_n = n$ and $y_i y_{i+1} \ge 1$ for $1 \le i < n$ and $y_n y_1 \ge 1$. Moreover, let $x_0 = 0$.
Determine the minimal possible value of the expression
$$
\sum_{i=1}^{n} \sqrt{(x_i - x_{i-1})^2 + y_i}.
$$
