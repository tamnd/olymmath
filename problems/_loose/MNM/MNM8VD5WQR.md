---
tag: MNM8VD5WQR
kind: problem
type: answer
answer: \frac{n-2}{\sqrt{n(n-1)}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123197
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geqslant 3$. It is known that not all of the real numbers $x_{1}, x_{2}, \cdots, x_{n}$ are 0 and they satisfy $\sum_{k=1}^{n} x_{k}=0$. If $A=\left(\sum_{k=1}^{n} x_{k}^{3}\right)^{2}, B=\left(\sum_{k=1}^{n} x_{k}^{2}\right)^{3}$, find the maximum value of $\frac{A}{B}$.
