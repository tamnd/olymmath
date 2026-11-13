---
tag: BB1NYFKQT9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205817
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ f(x)=a_{2n}x^{2n}+a_{2n-1}x^{2n-1}+\cdots+a_1x+a_0$, with $ a_i=a_{2n-1}$ for all $ i=1,2,\ldots,n$ and $ a_{2n}\ne0$. Prove that there exists a polynomial $ g(x)$ of degree $ n$ such that $ g\left(x+\frac1x\right)x^n=f(x)$.
