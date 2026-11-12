---
tag: EZC327NRC4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=57093
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Prove that for any polynomial $f(x)$ of degree $n$, there exists a unique representation of it in the form

$$
f(x)=d_{0} C_{x}^{0}+d_{1} C_{x}^{1}+\ldots+d_{n} C_{x}^{n}
$$

The binomial coefficient $C_{x}^{k}$ is interpreted as a polynomial in the variable $x$. In particular, the lower index of the binomial coefficient can be any real number.

b) Prove that the coefficients $d_{0}, d_{1}, \ldots, d_{n}$ in this representation are computed by the formula $d_{k}=\Delta^{k} f(0)(0 \leq k \leq n)$.
