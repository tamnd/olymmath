---
tag: TBD5Z0HFEM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23003
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the given polynomial

$$
P(x)=x^{n}+a_{n-1} x^{n-1}+\ldots+a_{1} x+a_{0}
$$

with real coefficients, it is known that for some natural number $m \geqslant 2$, the polynomial

$$
\underbrace{P(P(\ldots P}_{m \text { times }}(x) \ldots))
$$

has real roots, and they are all positive. Is it necessarily true that the polynomial $P(x)$ itself has real roots, and they are all positive?
