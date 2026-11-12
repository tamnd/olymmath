---
tag: RMAYPM24PK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38562
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots, a_{k}$ be fixed numbers and $u_{n+k}=a_{1} u_{n+k-1}+\ldots+a_{k} u_{n}$. Suppose that $x_{1}, \ldots, x_{k}$ are distinct roots of the equation $x^{k}=a_{1} x^{k-1}+a_{2} x^{k-2}+\ldots+a_{k}$. Prove that then $u_{n}=c_{1} x_{1}^{n-1}+\ldots+c_{k} x_{k}^{n-1}$ for some fixed numbers $c_{1}, \ldots, c_{k}$.
