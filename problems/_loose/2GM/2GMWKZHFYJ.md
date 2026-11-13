---
tag: 2GMWKZHFYJ
kind: problem
type: answer
answer: \max{1,\frac{1}{n^{n}}(n+\lambda)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive number $\lambda$ and a positive integer $n \geqslant 2$. Find the smallest positive number $M(\lambda)$, such that for all non-negative real numbers $x_{1}, x_{2} \cdots x_{n}$, we have $M(\lambda)\left(x_{1}+x_{2}+\cdots+\right.$ $\left.x_{n}\right)^{n} \geqslant x_{1}^{n}+x_{2}^{n}+\cdots+x_{n}^{n}+\lambda x_{1} x_{2} \cdots x_{n}$.
