---
tag: 8E3FT4S3JS
kind: problem
type: answer
answer: 180°
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=426
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_1A_2\dots A_n$ be a convex polygon where $n \ge 4$. For each $i = 1, 2, \dots, n$, let $f(i)$ be the maximum of the angles $\angle A_iA_jA_{i+1}$ where $A_j$ can be any vertex different from $A_i$ and $A_{i+1}$ (with $A_{n+1} = A_1$). For each $n$, find the smallest possible value of $f(1) + f(2) + \dots + f(n)$.
