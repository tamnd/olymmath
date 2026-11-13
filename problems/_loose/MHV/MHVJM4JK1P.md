---
tag: MHVJM4JK1P
kind: problem
type: answer
answer: \frac{n}{n-1}\cdot\sqrt[n-1]{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n(n \geqslant 3)$ be a positive integer, and let positive numbers $\alpha$ and $\beta$ satisfy $\frac{\alpha}{\beta}=\frac{n-1}{n-2}$. Also, $x_{i} \in \mathbf{R}_{+}(i=1,2, \cdots, n)$, and $\sum_{i=1}^{n} x_{i}^{\alpha}=1$, find the minimum value of $\sum_{i=1}^{n} \frac{x_{i}^{\beta}}{1-x_{i}^{\alpha}}$.
