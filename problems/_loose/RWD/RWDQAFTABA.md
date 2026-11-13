---
tag: RWDQAFTABA
kind: problem
type: answer
answer: \frac{1}{2}(\frac{1}{n-1})^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113476
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a natural number $n \geqslant 2$, find the smallest positive number $\lambda$, such that for any positive numbers $a_{1}, a_{2}, \cdots, a_{n}$, and any $n$ numbers $b_{1}, b_{2}, \cdots, b_{n}$ in $\left[0, \frac{1}{2}\right]$, if $a_{1}+a_{2}+\cdots+a_{n}=b_{1}+b_{2}+\cdots+b_{n}=1$, then $a_{1} a_{2} \cdots a_{n} \leqslant \lambda\left(a_{1} b_{1}+a_{2} b_{2}+\cdots+a_{n} b_{n}\right)$.
