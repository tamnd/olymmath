---
tag: ZA9AJ1CC3B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=75
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a square grid $n \times n$ ($n \ge 4$). Initially each of $n$ cells of one diagonal contains a sign "+" while each other cell contains a sign "-". By one move it is allowed to choose a row or a column and replace each sign "-" by "+", and vice versa. Prove that at any moment the number of signs "+" is not less than $n$. (R. Karasev)
