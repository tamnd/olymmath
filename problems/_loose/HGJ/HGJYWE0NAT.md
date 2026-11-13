---
tag: HGJYWE0NAT
kind: problem
type: answer
answer: \ln(x_{0}-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179753
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(x_{n}\right)_{n \geq 0}$ and $\left(y_{n}\right)_{n \geq 0}$ be two sequences of real numbers defined by $x_{0}>1$ and $x_{n+1}^{2}-2 x_{n+1}=x_{n}-2$, and $y_{n}=1-\frac{1}{2}-\frac{1}{2^{2}}-\cdots-\frac{1}{2^{n}}$. Calculate $\lim _{n \rightarrow \infty} \frac{x_{n}-2}{y_{n}}$.
