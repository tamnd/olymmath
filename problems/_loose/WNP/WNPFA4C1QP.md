---
tag: WNPFA4C1QP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 1$ be a positive integer. Consider a pile of $3^n$ coins, one of which is fake. Suppose that all coins are either white or black and that if the fake coin is white, it is lighter than the others, and if the fake is black, it is heavier than the others. Furthermore, assume that the number of white coins and the number of black coins differ by at most one. Under these conditions, prove that the fake coin can be identified and classified as heavy or light by at most $n$ weighings in a scale.
