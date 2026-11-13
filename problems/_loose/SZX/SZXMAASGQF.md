---
tag: SZXMAASGQF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82462
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>1$ be an integer. If $x_{1}, \ldots, x_{n}$ are the roots of the polynomial $X^{n}+a_{1} x^{n-1}+\cdots+a_{n-1}$ and $y_{1}, \ldots, y_{n-1}$ are the roots of the derivative polynomial $n x^{n-1}+(n-1) a_{1} X^{n-2}+\cdots+2 a_{n-2} X+a_{n-1}$, show:

$$
\frac{1}{n} \sum_{k=1}^{n} x_{k}^{2}>\frac{1}{n-1} \sum_{k=1}^{n} y_{k}^{2}
$$
