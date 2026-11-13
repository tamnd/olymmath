---
tag: QCPARES8GK
kind: problem
type: answer
answer: "2022"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $a_1 = 1$, and that for all $n \ge 2$, $a_n = a_{n-1} + 2a_{n-2} + 3a_{n-3} + \ldots + (n-1)a_1.$ Suppose furthermore that $b_n = a_1 + a_2 + \ldots + a_n$ for all $n$. If $b_1 + b_2 + b_3 + \ldots + b_{2021} = a_k$ for some $k$, find $k$.

*Proposed by Andrew Wu*
