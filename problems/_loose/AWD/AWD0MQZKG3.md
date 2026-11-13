---
tag: AWD0MQZKG3
kind: problem
type: answer
answer: N\geq4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132633
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real numbers $N$ such that there exists a strictly increasing sequence of positive integers $\left\{a_{n}\right\}_{n=1}^{+\infty}$, such that for any positive integer $n$, we have $\frac{a_{2 n}-1+a_{2 n}}{a_{n}}=N$.
