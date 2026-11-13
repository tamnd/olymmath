---
tag: 239CDAEZW3
kind: problem
type: answer
answer: All positive even integers.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=187
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every positive integer $n$, let $\sigma(n)$ denote the number of positive divisors of $n$. Determine all positive integers $k$ such that there exist positive integers $a$ and $b$ satisfying
$$
k = \sigma(a) = \sigma(b) = \sigma(2a + 3b).
$$
