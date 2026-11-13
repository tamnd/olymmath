---
tag: AR79QXRB2H
kind: problem
type: answer
answer: a) 4; b) 1009
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=303
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A square with side length $2n + 1$, $n \in \mathbb{N}$, $n \geq 2$, is divided by parallels to its sides into $(2n + 1)^2$ squares and exactly $2n(n + 1)$ of them are colored.

We will call an horizontal line of the large square *nice* if it has more than half of its $2n + 1$ squares colored. Denote $f(n)$ the maximum number of nice lines.

a) Find $f(2)$.

b) Find the smallest positive integer $n$ so that $f(n) > 2016$.
