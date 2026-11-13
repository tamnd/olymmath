---
tag: GMZSW0NEBB
kind: problem
type: answer
answer: x_{n}=\frac{3^{2^{n}}+1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90324
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequences $\left\{x_{n}\right\}$ and $\left\{y_{n}\right\}$ are defined by $x_{0}=2, y_{0}=1$ and, for $n \geq 0$,

$$
x_{n+1}=x_{n}^{2}+y_{n}^{2} \text { and } y_{n+1}=2 x_{n} y_{n}
$$

Find and prove an explicit formula for $x_{n}$ in terms of $n$.
