---
tag: T3B2DCEE1Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38116
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}$ and $x_{2}$ be the roots of the quadratic equation $x^{2} + a x + b = 0$, and let $s_{n} = x_{1}^{n} + x_{2}^{n}$. Prove that

$$
\frac{s_{n}}{n} = \sum_{m} (-1)^{n+m} \frac{(n-m-1)!}{m!(n-2m)!} a^{n-2m} b^{m}
$$

where the summation is over all integers $m$ such that $0 \leqslant m \leqslant n / 2$ (Waring's formula).
