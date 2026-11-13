---
tag: B1ZPWRZG5A
kind: problem
type: answer
answer: 1, 3, 4, 12
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=306
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $x$ let $\sigma(x)$ be the sum of its positive divisors and $\tau(x)$ be the number of the positive divisors of $x$.
Find all positive integers $n$ such that $\sigma(\tau(n)) = n$.
