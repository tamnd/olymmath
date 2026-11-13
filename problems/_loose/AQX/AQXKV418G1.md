---
tag: AQXKV418G1
kind: problem
type: answer
answer: \lfloor\frac{n^{2}+n+1}{3}\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81244
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots, a_{n}$ be numbers that are either 0 or 1. We define $b_{1}, b_{2}, \ldots, b_{n-1}$ as follows: if $a_{k}=a_{k+1}$, then $b_{k}=0$, otherwise $b_{k}=1$. We repeat this process until we have filled a triangular table. What is the maximum number of 1s that this table can contain?
