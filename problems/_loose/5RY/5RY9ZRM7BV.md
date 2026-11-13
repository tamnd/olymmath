---
tag: 5RY9ZRM7BV
kind: problem
type: answer
answer: \frac{4}{\pi}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269309
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $E$ be the set of all continuously differentiable real valued functions $f$ on $[0,1]$ such that $f(0)=0$ and $f(1)=1$. Define
$$J(f)=\int^1_0(1+x^2)f'(x)^2\text dx.$$
a) Show that $J$ achieves its minimum value at some element of $E$.
b) Calculate $\min_{f\in E}J(f)$.
