---
tag: C9CX4VHPK7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129879
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A polynomial $f(x)$ with real coefficients is said to be a sum of squares if there are polynomials $p_{1}(x), p_{2}(x), \ldots, p_{n}(x)$ with real coefficients for which
$$
f(x)=p_{1}^{2}(x)+p_{2}^{2}(x)+\cdots+p_{n}^{2}(x) .
$$

For example, $2 x^{4}+6 x^{2}-4 x+5$ is a sum of squares because
$$
2 x^{4}+6 x^{2}-4 x+5=\left(x^{2}\right)^{2}+\left(x^{2}+1\right)^{2}+(2 x-1)^{2}+(\sqrt{3})^{2} \text {. }
$$
(a) Determine all values of $a$ for which $f(x)=x^{2}+4 x+a$ is a sum of squares.
(b) Determine all values of $a$ for which $f(x)=x^{4}+2 x^{3}+(a-7) x^{2}+(4-2 a) x+a$ is a sum of squares, and for such values of $a$, write $f(x)$ as a sum of squares.
(c) Suppose $f(x)$ is a sum of squares. Prove there are polynomials $u(x), v(x)$ with real coefficients such that $f(x)=u^{2}(x)+v^{2}(x)$.
