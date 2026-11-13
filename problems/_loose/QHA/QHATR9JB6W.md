---
tag: QHATR9JB6W
kind: problem
type: answer
answer: (\frac{3}{4})^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129625
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The fifteenth question: Given a positive integer $n \geq 2$, find the largest positive real number $\lambda(n)$, such that for any real numbers $x_{1}, x_{2}, \cdots, x_{n}$, not all positive, we have $\prod_{i=1}^{n}\left(x_{i}^{2}-x_{i}+1\right) \geq \lambda(n) \cdot\left(\left(\prod_{i=1}^{n} x_{i}\right)^{2}-\prod_{i=1}^{n} x_{i}+1\right)$.
