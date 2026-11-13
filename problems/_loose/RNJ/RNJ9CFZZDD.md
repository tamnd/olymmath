---
tag: RNJ9CFZZDD
kind: problem
type: answer
answer: (n-1)/2 * (1/n + a + b + n a b)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=73
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
Let $f(x) = (x+a)(x+b)$ where $a$, $b$ are given positive real numbers, $n \ge 2$ be a given integer. For non-negative real numbers $x_1, x_2, \dots, x_n$ that satisfy $x_1 + x_2 + \dots + x_n = 1$, find the maximum of $F = \sum_{1 \le i < j \le n} \min\{f(x_i), f(x_j)\}$.
