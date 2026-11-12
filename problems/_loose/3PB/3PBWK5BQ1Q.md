---
tag: 3PBWK5BQ1Q
kind: problem
type: answer
answer: \frac{3}{2-x-x^{2}}=\sum_{n=0}^{\infty}(1+\frac{(-1)^{n}}{2^{n+1}})x^{n}\quad\forallx\in(-1,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Expand the function

$$
f(x)=\frac{3}{2-x-x^{2}}
$$

into a Taylor series in powers of $x\left(x_{0}=0\right)$.
