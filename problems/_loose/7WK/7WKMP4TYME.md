---
tag: 7WKMP4TYME
kind: problem
type: answer
answer: x_{n}=\frac{\lambda^{n}}{n!};atn=[\lambda]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52320
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $x_{0}, x_{1}, x_{2}, \ldots$ is defined by the following conditions: $x_{0}=1, x_{1}=\lambda$, for any $n>1$ the equality holds

$$
(\alpha+\beta)^{n} x_{n}=\alpha^{n} x_{n} x_{0}+\alpha^{n-1} \beta x_{n-1} x_{1}+\alpha^{n-2} \beta^{2} x_{n-2} x_{2}+\ldots+\beta^{n} x_{0} x_{n} .
$$

Here $\alpha, \beta, \lambda$ are given positive numbers. Find $x_{n}$ and determine for which $n$ the value of $x_{n}$ is the largest.
