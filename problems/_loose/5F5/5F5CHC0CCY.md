---
tag: 5F5CHC0CCY
kind: problem
type: answer
answer: "2013"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180323
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}, \ldots, x_{2014}$ be positive real numbers such that $\sum_{j=1}^{2014} x_{j}=1$. Determine with proof the smallest constant $K$ such that

$$
K \sum_{j=1}^{2014} \frac{x_{j}^{2}}{1-x_{j}} \geq 1
$$
