---
tag: E61Q4S0YEA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139196
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n \geqslant 3, x_{1}, x_{2}, \cdots, x_{n}$ are positive real numbers, and $x_{n+1}=x_{1}$. Prove:
$$
\sum_{i=1}^{n} \frac{x_{i+1}^{n+1}}{x_{i}^{n}} \geqslant \sum_{i=1}^{n} \frac{x_{i+1}^{n}}{x_{i}^{n-1}} .
$$
