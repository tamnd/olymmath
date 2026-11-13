---
tag: Z9X5BHDHDC
kind: problem
type: answer
answer: \sum_{i=2}^{2001} \frac{x_i}{x_1 + x_2 + \ldots + x_{i-1}} > 1.999
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_1,x_2,\ldots,x_{2001}$ be positive numbers such that
$$x_i^2\ge x_1^2+\frac{x_2^2}{2^3}+\frac{x_3^2}{3^3}+\ldots+\frac{x_{i-1}^2}{(i-1)^3}\enspace\text{for }2\le i\le2001.$$Prove that $\sum_{i=2}^{2001}\frac{x_i}{x_1+x_2+\ldots+x_{i-1}}>1.999$.
