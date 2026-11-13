---
tag: RY3S4S8SJ3
kind: problem
type: answer
answer: n^2 · ((n−1)!)^2 · ((n−1)^2)! · C(n^2, 2n−1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/JBMO/train/0000.parquet#row=72
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 1$ be a positive integer. A square table of dimensions $n \times n$ is filled arbitrarily with the numbers $1, 2, \ldots, n^2$, so that every number appears exactly once in the table. From each row, select the smallest number, and let the greatest of them be denoted by $x$. From each column, select the greatest number, and let the smallest of them be denoted by $y$. The table is called equilibrated if $x = y$. How many equilibrated tables exist?
