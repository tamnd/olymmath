---
tag: 6ZW4BRC5AS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
All numbers of the form $2^{k}3^{s}$ ($k, s$ are non-negative whole numbers) were written in increasing order $1, 2, 3, 4, 6, 8, 9, 12, \ldots$ and formed the sequence $a_n$. Prove that there are infinitely many numbers $n$ satisfying the condition
$$
\frac{a_{n+1}}{a_n} < 1 + \frac{1}{10^{2014}}
$$
