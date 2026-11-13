---
tag: RMVAD3HCVQ
kind: problem
type: answer
answer: (n, a) = (1, 9) and (1, 22)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=80
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad Round 2
---
Find all positive integer pairs $(n, a)$ such that the quotient
$$
\frac{a^{n+1} + 3^{n+1} + 1}{a^n + 3^n + 1}
$$
is an integer.
