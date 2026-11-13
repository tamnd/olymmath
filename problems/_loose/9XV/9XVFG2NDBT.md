---
tag: 9XVFG2NDBT
kind: problem
type: answer
answer: ceil(n/3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=396
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 70th ROMANIAN MATHEMATICAL OLYMPIAD
---
Let $n \ge 2$, be an integer. Find in terms of $n$ the maximum value of $m \le n$ such that we can select $m$ numbers from the set $1, 2, 3, \dots, n$ in such a way that for any two of them, say $a, b$, with $a > b$, the number $a-b$ does not divide $a+b$.
Vasile Pop
