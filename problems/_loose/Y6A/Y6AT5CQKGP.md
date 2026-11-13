---
tag: Y6AT5CQKGP
kind: problem
type: answer
answer: 1\leqq\int_{0}^{1}f^{2}(x)\leqq\frac{4}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166733
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider those functions $f(x)$ that are defined in the interval $(0,1)$, are positive, integrable, have an integral value of 1 over the interval $(0,1)$, and are concave from below. (This last condition means that for any $0 \leq x_{1} < x_{2} \leq 1$ and $0 \leq \lambda \leq 1$,

$$
f\left(\lambda x_{1}+(1-\lambda) x_{2}\right) \geq \lambda f\left(x_{1}\right)+(1-\lambda) f\left(x_{2}\right)
$$

holds.)

What values can the following integral take for these functions?

$$
\int_{0}^{1} f^{2}(x) d x
$$
