---
tag: GQB6NKNHJD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33806
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Newton used the concept of the integral as an operation inverse to differentiation. In other words, a function $f=f(x)$ on $[a, b]$, $a<b$, was considered integrable if there existed an antiderivative $F=F(x)$ such that $F^{\prime}(x)=f(x)$ on $[a, b]$ (one-sided derivatives are taken at the endpoints $a$ and $b$). In this case, it was assumed that

$$
\text { (N) } \int_{a}^{b} f(x) d x=F(b)-F(a)
$$

Try to construct an example of a function $f$ for which the Newton integral

$$
\text { (N) } \int_{0}^{1} f(x) d x
$$

is defined, but the Lebesgue integral does not exist.
