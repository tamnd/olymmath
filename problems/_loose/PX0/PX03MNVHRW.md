---
tag: PX03MNVHRW
kind: problem
type: answer
answer: n = 1, 2, 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=43
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence given by $x_1 = 1$ and $x_{n+1} = 1 + \frac{n}{x_n}$, for $n \in \mathbb{N}^*$. Find all $n$ such that $x_n$ is an integer.
