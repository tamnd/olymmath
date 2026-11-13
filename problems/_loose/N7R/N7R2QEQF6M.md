---
tag: N7R2QEQF6M
kind: problem
type: answer
answer: '{n: n is odd and 5 <= n <= 2014}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find those positive integers $n \le 2014$ for which there exist positive integers $r, s$ such that $\text{gcd}(rs(r+s), n) = 1$ and $n$ does not divide $r - s$.
