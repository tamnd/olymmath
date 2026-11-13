---
tag: NVTVX5W2SW
kind: problem
type: answer
answer: '[-4, -3] ∪ {2}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $a, b, c > 0$, denote $m = \frac{a}{b} + \frac{b}{c} + \frac{c}{a}$, $n = \frac{a}{c} + \frac{c}{b} + \frac{b}{a}$. Find all possible values of $k$ such that the following inequality is true for all $m, n$ defined as above:
$$
(m - n)k^2 + (2m - n - 3)k - 8m + 6n + 6 \le 0.
$$
