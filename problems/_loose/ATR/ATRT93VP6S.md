---
tag: ATRT93VP6S
kind: problem
type: answer
answer: \prod_{i=1}^{n}x_{i}\geqslant(n-1)^{\frac{n}{k}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}, \cdots, x_{n}>0$, and $\sum_{i=1}^{n} \frac{x_{i}^{k}}{1+x_{i}^{k}}=n-1\left(n \geqslant 3, k \in \mathbf{N}^{`}\right.$ and $\left.2 \leqslant k \leqslant n\right)$, then $\prod_{i=1}^{n} x_{i} \geqslant(n-1)^{\frac{\pi}{x}}$.
