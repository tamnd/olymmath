---
tag: PC7ADTMEVD
kind: problem
type: answer
answer: the smallest integer d such that p^m divides d!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=136
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Let $p^m$ be a power of a prime number. Find the lowest value of $d$ such that there exists a monic polynomial $Q(x)$ of degree $d$ with integer coefficients such that for any positive integer $n$, $p^m$ divides $Q(n)$.
