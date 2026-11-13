---
tag: T1FXHY7X3X
kind: problem
type: answer
answer: 2, 3, 4, 5, 7, 9
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=69
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every positive integer $x$, denote by $\kappa(x)$ the number of composite numbers not greater than $x$. Find all positive integers $n$ such that
$$
(\kappa(n))! \cdot \text{lcm}(1,2,\dots,n) > (n-1)!
$$
