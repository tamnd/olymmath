---
tag: 8SWZ5NCRXN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231762
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ and $g$ be two continuous, distinct functions from $[0,1] \rightarrow (0,+\infty)$ such that

$\int_{0}^{1}f(x)dx = \int_{0}^{1}g(x)dx$

Let

$y_n=\int_{0}^{1}{\frac{f^{n+1}(x)}{g^{n}(x)}dx}$, for $n\geq 0$, natural.

Prove that $(y_n)$ is an increasing and divergent sequence.
