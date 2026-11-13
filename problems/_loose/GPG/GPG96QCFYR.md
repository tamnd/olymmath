---
tag: GPG96QCFYR
kind: problem
type: answer
answer: x_{n}=2^{\frac{(-1)^{n}-2^{n}}{3}},\foralln\geq0\lim_{narrow\infty}x_{n}=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179070
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left(x_{n}\right)_{n \geq 0}$ be given by $x_{0}=1, x_{1}=\frac{1}{2}$ and $x_{n+2}=x_{n+1} \cdot x_{n}^{2}, \forall n \geq 0$. Find the general term $x_{n}$ of the sequence and then calculate $\lim _{n \rightarrow \infty} x_{n}$.
