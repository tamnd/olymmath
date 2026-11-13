---
tag: Q1GKD5HDJ8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an integer $n$, define $f(n)$ to be the greatest integer $k$ such that $2^k$ divides $\binom{n}{m}$ for some $0 \le m \le n$. Compute $f(1) + f(2) + \cdots + f(2048)$.
